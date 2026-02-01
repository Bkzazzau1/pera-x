<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import WalletModal from '$lib/components/ui/WalletModal.svelte';
	import { wallet } from '$lib/stores/wallet.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	/**
	 * Pera-X Application Orchestrator
	 * Restoration of Institutional Navigation State.
	 */

	const navLinks = [
		{ label: 'Dashboard', path: '/dashboard' },
		{ label: 'Trade', path: '/trade' },
		{ label: 'Redeem', path: '/redeem' },
		{ label: 'Analytics', path: '/analytics' }
	];

	const quickActions = [
		{ label: 'Trade', path: '/trade', tag: 'DEX' },
		{ label: 'Redeem', path: '/redeem', tag: 'BURN' },
		{ label: 'Swap', path: '/swap', tag: 'ROUTE' },
		{ label: 'Policy', path: '/policy', tag: 'ENGINE' }
	];

	let { children } = $props();

	let showMobileNav = $state(false);
	let showQuickActions = $state(true);

	const isActive = (path: string) => $page.url.pathname.startsWith(path);

	// ───────────────────────────────────────────────────────────────────────────────
	// Bloomberg-style Microline: WAT clock + date, Node status + latency, ticker text
	// ───────────────────────────────────────────────────────────────────────────────

	let now = $state(new Date());
	let clockTimer: number | null = null;

	function formatWAT(d: Date) {
		const parts = new Intl.DateTimeFormat('en-GB', {
			timeZone: 'Africa/Lagos',
			weekday: 'short',
			day: '2-digit',
			month: 'short',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false
		})
			.formatToParts(d)
			.reduce((acc: Record<string, string>, p) => {
				if (p.type !== 'literal') acc[p.type] = p.value;
				return acc;
			}, {});

		return {
			time: `${parts.hour}:${parts.minute}:${parts.second}`,
			date: `${(parts.weekday || '').toUpperCase()} ${parts.day} ${(parts.month || '').toUpperCase()} ${parts.year}`,
			tz: 'WAT'
		};
	}

	const wat = $derived(formatWAT(now));

	// Node status / latency (only "alive" when wallet is connected)
	let latencyMs = $state<number | null>(null);
	let statusText = $derived(wallet.address ? 'SYNCED' : wallet.isConnecting ? 'LINKING' : 'IDLE');

	let latencyTimer: number | null = null;

	function jitterLatency() {
		const base = 16;
		const j = Math.floor((Math.random() - 0.5) * 16);
		latencyMs = Math.max(11, Math.min(62, base + j));
	}

	function startNodeTelemetry() {
		if (latencyTimer) return;
		latencyMs = 18;
		latencyTimer = window.setInterval(() => jitterLatency(), 1400);
	}

	function stopNodeTelemetry() {
		if (latencyTimer) window.clearInterval(latencyTimer);
		latencyTimer = null;
		latencyMs = null;
	}

	// Ticker text
	const tickerItems = [
		'PX SYSTEM VIEW • POLICY ROUTER: ARMED',
		'MAINNET v2026 • AUDIT TRAIL: ENABLED',
		'BURN PROOFS: ATOMIC • LEDGER: IMMUTABLE',
		'DEX ROUTES: ACTIVE • SWAP ENGINE: STANDBY',
		'FULFILLMENT: VERIFIED • LOGISTICS: GREEN'
	];

	let tickerIndex = $state(0);
	let tickerTimer: number | null = null;

	function nextTicker() {
		tickerIndex = (tickerIndex + 1) % tickerItems.length;
	}

	let tickerPaused = $state(false);
	function pauseTicker() {
		tickerPaused = true;
	}
	function resumeTicker() {
		tickerPaused = false;
	}

	$effect(() => {
		if (wallet.address) startNodeTelemetry();
		else stopNodeTelemetry();
	});

	onMount(() => {
		clockTimer = window.setInterval(() => (now = new Date()), 1000);
		tickerTimer = window.setInterval(() => nextTicker(), 5200);
	});

	onDestroy(() => {
		if (clockTimer) window.clearInterval(clockTimer);
		if (tickerTimer) window.clearInterval(tickerTimer);
		stopNodeTelemetry();
	});
</script>

<div class="perax-bg-layer pointer-events-none fixed inset-0 -z-50 opacity-40"></div>

<div class="relative min-h-screen overflow-visible bg-transparent selection:bg-blue-500/30">
	<div class="relative z-10 mx-auto max-w-7xl px-4 pt-0 md:px-8 md:pt-0">
		<!-- ✅ Header REMOVED: Marketing header is now global -->

		<!-- ✅ Mobile-only Bloomberg microline -->
		<div class="-mt-1 mb-3 sm:hidden">
			<div class="flex items-center gap-3 px-1">
				<div class="flex shrink-0 items-center gap-2">
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/25"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
					</span>

					<div class="leading-none">
						<div class="flex items-baseline gap-2">
							<span class="text-[10px] font-black tracking-[0.22em] text-white/70 uppercase">
								{wat.time}
							</span>
							<span class="text-[8px] font-black tracking-[0.35em] text-blue-400/60 uppercase">
								{wat.tz}
							</span>
						</div>
						<div class="mt-1 text-[8px] font-bold tracking-[0.28em] text-white/30 uppercase">
							{wat.date}
						</div>
					</div>
				</div>

				<div class="h-px flex-1 bg-linear-to-r from-white/10 via-white/5 to-transparent"></div>

				<div class="flex shrink-0 items-center gap-2">
					<span
						class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5"
					>
						<span
							class="h-1.5 w-1.5 rounded-full
							{wallet.address
								? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]'
								: wallet.isConnecting
									? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]'
									: 'bg-white/20'}"
						></span>
						<span class="text-[8px] font-black tracking-[0.3em] text-white/35 uppercase">
							NODE: {statusText}
						</span>
					</span>

					<span class="text-[9px] font-black tracking-[0.25em] text-blue-400/60 uppercase">
						{latencyMs === null ? '—' : `${latencyMs}ms`}
					</span>
				</div>
			</div>

			<div
				class="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-2xl"
				onpointerdown={pauseTicker}
				onpointerup={resumeTicker}
				onpointercancel={resumeTicker}
				onpointerleave={resumeTicker}
				ontouchstart={pauseTicker}
				ontouchend={resumeTicker}
				ontouchcancel={resumeTicker}
				role="presentation"
			>
				<div
					class="ticker flex items-center gap-6"
					style="animation-play-state: {tickerPaused ? 'paused' : 'running'};"
				>
					<span class="ticker-item">{tickerItems[tickerIndex]}</span>
					<span class="ticker-dot"></span>
					<span class="ticker-item">{tickerItems[(tickerIndex + 1) % tickerItems.length]}</span>
					<span class="ticker-dot"></span>
					<span class="ticker-item">{tickerItems[(tickerIndex + 2) % tickerItems.length]}</span>
					<span class="ticker-dot"></span>
					<span class="ticker-item">{tickerItems[(tickerIndex + 3) % tickerItems.length]}</span>
				</div>
			</div>

			<div class="mt-2 flex items-center justify-between px-1">
				<span class="text-[9px] font-black tracking-[0.32em] text-white/30 uppercase">
					System View • v2026
				</span>
				<span class="text-[9px] font-black tracking-[0.28em] text-blue-400/55 uppercase">
					Mainnet
				</span>
			</div>
		</div>

		<!-- ✅ Mobile Quick Actions (premium + collapsible) -->
		<div class="lg:hidden">
			<div
				class="glass overflow-hidden rounded-4xl border border-white/10 bg-black/35 backdrop-blur-3xl"
			>
				<button
					type="button"
					class="group relative flex w-full items-center justify-between px-4 py-3"
					aria-expanded={showQuickActions}
					aria-controls="mobile-quick-actions"
					onclick={() => (showQuickActions = !showQuickActions)}
				>
					<div class="absolute inset-0 opacity-60">
						<div
							class="absolute -top-10 -left-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl"
						></div>
						<div
							class="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-cyan-400/8 blur-2xl"
						></div>
					</div>

					<div class="relative z-10 flex items-center gap-3">
						<span class="h-1 w-6 rounded-full bg-linear-to-r from-blue-400/60 to-transparent"
						></span>
						<span class="text-[9px] font-black tracking-[0.35em] text-white/40 uppercase">
							Quick Actions
						</span>
						<span
							class="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-[8px] font-black tracking-[0.25em] text-white/35 uppercase"
						>
							{showQuickActions ? 'OPEN' : 'CLOSED'}
						</span>
					</div>

					<div
						class="relative z-10 flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-400/10"
					>
						<svg
							class="h-4 w-4 transition-transform duration-300 {showQuickActions
								? 'rotate-180'
								: ''}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</div>
				</button>

				{#if showQuickActions}
					<div id="mobile-quick-actions" transition:slide class="px-3 pb-3">
						<div class="grid grid-cols-2 gap-2">
							{#each quickActions as act}
								<button
									type="button"
									onclick={() => goto(act.path)}
									class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 px-4 py-4 text-left transition-all active:scale-95
									{isActive(act.path)
										? 'border-blue-400/30 bg-blue-400/10'
										: 'hover:border-blue-400/20 hover:bg-white/4'}"
								>
									<div
										class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									></div>
									<div
										class="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
									></div>

									<div class="relative z-10">
										<div class="text-[11px] font-black tracking-[0.26em] text-white/80 uppercase">
											{act.label}
										</div>
										<div
											class="mt-1 text-[8px] font-bold tracking-[0.28em] text-blue-400/60 uppercase"
										>
											{act.tag}
										</div>
									</div>

									<div
										class="relative z-10 mt-3 h-px w-full bg-linear-to-r from-white/10 via-white/5 to-transparent"
									></div>
								</button>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>

		{#if showMobileNav}
			<nav
				transition:slide
				class="mt-6 flex flex-col gap-2 rounded-4xl border border-white/10 bg-black/60 p-4 backdrop-blur-3xl lg:hidden"
			>
				{#each navLinks as link}
					<a
						class="flex w-full items-center justify-between rounded-2xl px-6 py-5 text-[11px] font-black tracking-[0.3em] uppercase transition-all
						{isActive(link.path)
							? 'border border-blue-400/20 bg-blue-400/10 text-blue-400'
							: 'border border-transparent text-white/60 hover:bg-white/5'}"
						href={link.path}
						onclick={() => (showMobileNav = false)}
					>
						{link.label}
						<span class="text-[8px] opacity-40">EXECUTE →</span>
					</a>
				{/each}
			</nav>
		{/if}

		<main class="relative z-10 mt-0">
			{@render children()}
		</main>
	</div>
</div>

<WalletModal />

<style>
	:global(body) {
		background-color: #020617;
		margin: 0;
		overflow-x: hidden;
	}

	.perax-bg-layer {
		background:
			radial-gradient(circle at top right, rgba(14, 165, 233, 0.15), transparent 60%),
			radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.08), transparent 50%) !important;
	}

	.glass {
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.06);
	}

	.ticker {
		white-space: nowrap;
		will-change: transform;
		animation: ticker 14s linear infinite;
	}

	.ticker-item {
		font-size: 9px;
		font-weight: 800;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.38);
	}

	.ticker-dot {
		width: 4px;
		height: 4px;
		border-radius: 999px;
		background: rgba(96, 165, 250, 0.55);
		box-shadow: 0 0 10px rgba(96, 165, 250, 0.25);
	}

	@keyframes ticker {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-45%);
		}
	}
</style>
