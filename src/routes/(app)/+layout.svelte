<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import WalletModal from '$lib/components/ui/WalletModal.svelte';
	import { wallet } from '$lib/stores/wallet.svelte';
	import { slide } from 'svelte/transition';

	/**
	 * Pera-X Application Orchestrator
	 * Restoration of Institutional Navigation State.
	 */

	// Keep your original nav list, but upgrade it to structured links (so we can show labels + quick actions)
	const navLinks = [
		{ label: 'Dashboard', path: '/dashboard' },
		{ label: 'Trade', path: '/trade' },
		{ label: 'Redeem', path: '/redeem' },
		{ label: 'Analytics', path: '/analytics' }
	];

	// Mobile Quick Actions (fast tap grid)
	const quickActions = [
		{ label: 'Trade', path: '/trade', tag: 'DEX' },
		{ label: 'Redeem', path: '/redeem', tag: 'BURN' },
		{ label: 'Swap', path: '/swap', tag: 'ROUTE' },
		{ label: 'Policy', path: '/policy', tag: 'ENGINE' }
	];

	let { children } = $props();
	let showMobileNav = $state(false);

	const isActive = (path: string) => $page.url.pathname.startsWith(path);
</script>

<!-- FIX: renamed perax-bg -> perax-bg-layer to avoid global CSS collision -->
<div class="perax-bg-layer pointer-events-none fixed inset-0 -z-50 opacity-40"></div>

<div class="relative min-h-screen bg-transparent selection:bg-blue-500/30">
	<div class="relative z-10 mx-auto max-w-7xl px-4 pt-0 md:px-8 md:pt-0">
		<header class="flex items-center justify-between gap-4 py-4">
			<div class="flex items-center gap-4">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/10 font-black text-blue-400 backdrop-blur-xl transition-transform hover:scale-105 md:h-12 md:w-12"
				>
					PX
				</div>
				<div class="hidden sm:block">
					<div
						class="text-lg leading-none font-black tracking-tighter text-white uppercase italic md:text-xl"
					>
						Pera-X
					</div>
					<div
						class="mt-1 text-[8px] font-bold tracking-[0.2em] text-white/40 uppercase md:text-[9px]"
					>
						Monetary Standard
					</div>
				</div>
			</div>

			<!-- Desktop Nav -->
			<nav class="hidden items-center gap-2 lg:flex">
				{#each navLinks as link}
					<a
						class="glass glow-hover rounded-full px-6 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all
						{isActive(link.path)
							? 'border-blue-400/40 bg-blue-400/5 text-blue-400'
							: 'text-white/60 hover:text-white'}"
						href={link.path}
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-3">
				<div
					class="hidden items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-2 xl:flex"
				>
					<span
						class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]"
					></span>
					<span class="text-[9px] font-black tracking-widest text-white/40 uppercase">
						Mainnet v2026
					</span>
				</div>

				<button
					type="button"
					onclick={() => wallet.connect()}
					class="glass glow-hover rounded-2xl border-blue-400/20 px-5 py-2.5 text-[9px] font-black tracking-widest text-blue-400 uppercase transition-all hover:bg-blue-400/10 active:scale-95 md:px-8 md:text-[10px]"
				>
					{wallet.address ? 'SYNCED' : 'CONNECT'}
				</button>

				<button
					type="button"
					class="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/80 transition-all hover:border-blue-400/40 lg:hidden"
					aria-label="Toggle Global Navigation"
					onclick={() => (showMobileNav = !showMobileNav)}
				>
					<div class="flex w-5 flex-col gap-1.5">
						<span
							class="h-0.5 w-full bg-current transition-all {showMobileNav
								? 'translate-y-2 rotate-45'
								: ''}"
						></span>
						<span class="h-0.5 w-full bg-current {showMobileNav ? 'opacity-0' : ''}"></span>
						<span
							class="h-0.5 w-full bg-current transition-all {showMobileNav
								? '-translate-y-2 -rotate-45'
								: ''}"
						></span>
					</div>
				</button>
			</div>
		</header>

		<!-- ✅ Mobile Quick Actions (only on mobile) -->
		<div class="lg:hidden">
			<div class="glass rounded-4xl border border-white/10 bg-black/30 p-3 backdrop-blur-3xl">
				<div class="grid grid-cols-4 gap-2">
					{#each quickActions as act}
						<button
							type="button"
							onclick={() => goto(act.path)}
							class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 px-3 py-3 text-center transition-all active:scale-95
							{isActive(act.path) ? 'border-blue-400/30 bg-blue-400/10' : 'hover:border-blue-400/20'}"
						>
							<div
								class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100"
							></div>

							<div class="relative z-10">
								<div class="text-[10px] font-black tracking-[0.2em] text-white/80 uppercase">
									{act.label}
								</div>
								<div class="mt-1 text-[8px] font-bold tracking-widest text-blue-400/60 uppercase">
									{act.tag}
								</div>
							</div>
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Mobile Slide Nav -->
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

	/* FIX: background layer now uses perax-bg-layer (no collision) */
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

	.glow-hover:hover {
		border-color: rgba(59, 130, 246, 0.3);
		box-shadow: 0 0 80px rgba(37, 99, 235, 0.08);
	}
</style>
