<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { wallet } from '$lib/stores/wallet.svelte';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	const {} = $props(); // ensure proper reactivity w/out needing unused slot props

	const navLinks = [
		{ label: 'DASHBOARD', path: '/dashboard', code: 'DB-01' },
		{ label: 'TRADE', path: '/trade', code: 'TR-02' },
		{ label: 'REDEEM', path: '/redeem', code: 'RD-03' },
		{ label: 'ANALYTICS', path: '/analytics', code: 'AN-04' }
	];

	let showMobileNav = $state(false);
	let now = $state(new Date());
	let latencyMs = $state<number | null>(null);

	// High-Fidelity Time Formatting (WAT)
	const wat = $derived.by(() => {
		const formatter = new Intl.DateTimeFormat('en-GB', {
			timeZone: 'Africa/Lagos',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false
		});
		return { time: formatter.format(now), tz: 'WAT' };
	});

	// Node Telemetry Simulation
	function updateTelemetry() {
		latencyMs = Math.floor(14 + Math.random() * 8);
	}

	onMount(() => {
		const clock = setInterval(() => (now = new Date()), 1000);
		const telemetry = setInterval(updateTelemetry, 3000);
		return () => {
			clearInterval(clock);
			clearInterval(telemetry);
		};
	});
</script>

<header class="sticky top-0 z-999 w-full border-b border-white/5 bg-black/20 backdrop-blur-3xl">
	<div class="hidden border-b border-white/3 bg-white/2 py-1 md:block">
		<div
			class="mx-auto flex max-w-7xl justify-between px-8 text-[8px] font-black tracking-[0.3em] text-white/20 uppercase"
		>
			<div class="flex gap-6">
				<span class="flex items-center gap-2"
					><span class="h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span> NETWORK:
					OPTIMIZED</span
				>
				<span class="flex items-center gap-2"
					><span class="h-1 w-1 rounded-full bg-sky-500"></span> LATENCY: {latencyMs ??
						'--'}MS</span
				>
			</div>
			<div class="flex gap-6">
				<span class="text-sky-400/50">PROTOCOL: PERA-X v2.0.26</span>
				<span class="tabular-nums">{wat.time} {wat.tz}</span>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 md:px-8">
		<div class="flex h-20 items-center justify-between gap-8">
			<a href="/" class="group flex items-center gap-4">
				<div class="relative">
					<div class="absolute inset-0 animate-pulse rounded-xl bg-sky-500/20 blur-xl"></div>
					<div
						class="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-sky-500/20 to-blue-600/5 font-black text-sky-400 italic backdrop-blur-2xl transition-all group-hover:border-sky-400/40"
					>
						PX
					</div>
				</div>
				<div class="hidden flex-col sm:flex">
					<span class="text-xl leading-none font-black tracking-tighter text-white uppercase italic"
						>Pera-X</span
					>
					<span class="mt-1 text-[9px] font-black tracking-[0.4em] text-sky-500/40 uppercase"
						>Monetary Standard</span
					>
				</div>
			</a>

			<nav class="hidden flex-1 items-center justify-center gap-1 lg:flex">
				{#each navLinks as link}
					<a
						href={link.path}
						class="group relative px-6 py-2 text-[10px] font-black tracking-[0.25em] uppercase transition-all
						{$page.url.pathname.includes(link.path) ? 'text-sky-400' : 'text-white/40 hover:text-white'}"
					>
						{#if $page.url.pathname.includes(link.path)}
							<div
								in:fade
								class="absolute inset-0 -z-10 rounded-full border border-sky-500/20 bg-sky-500/5 blur-[2px]"
							></div>
						{/if}
						<span class="relative">
							<span class="mr-1 text-[7px] opacity-30">{link.code}</span>
							{link.label}
						</span>
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-4">
				<button
					onclick={() => wallet.connect()}
					class="group relative overflow-hidden rounded-xl border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-[10px] font-black tracking-widest text-sky-400 transition-all hover:bg-sky-400 hover:text-white active:scale-95"
				>
					<div
						class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
					></div>
					{wallet.address ? 'SYNCED' : 'CONNECT TERMINAL'}
				</button>

				<button
					class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 lg:hidden"
					onclick={() => (showMobileNav = !showMobileNav)}
					aria-label="Toggle Command Menu"
				>
					<div class="flex w-5 flex-col gap-1.5">
						<span
							class="h-0.5 w-full bg-sky-400 transition-all {showMobileNav
								? 'translate-y-2 rotate-45'
								: ''}"
						></span>
						<span class="h-0.5 w-full bg-sky-400 {showMobileNav ? 'opacity-0' : ''}"></span>
						<span
							class="h-0.5 w-full bg-current transition-all {showMobileNav
								? '-translate-y-2 -rotate-45'
								: ''}"
						></span>
					</div>
				</button>
			</div>
		</div>
	</div>

	{#if showMobileNav}
		<div
			transition:slide
			class="border-t border-white/5 bg-black/90 p-6 backdrop-blur-3xl lg:hidden"
		>
			<div class="grid gap-3">
				{#each navLinks as link}
					<button
						onclick={() => {
							goto(link.path);
							showMobileNav = false;
						}}
						class="flex items-center justify-between rounded-2xl border border-white/5 bg-white/2 px-6 py-5 transition-all active:scale-95
						{$page.url.pathname.includes(link.path)
							? 'border-sky-500/40 bg-sky-500/10 text-sky-400'
							: 'text-white/60'}"
					>
						<div class="flex flex-col items-start">
							<span class="text-[7px] font-black tracking-widest opacity-40">{link.code}</span>
							<span class="text-xs font-black tracking-[0.3em] uppercase">{link.label}</span>
						</div>
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[8px]"
						>
							→
						</div>
					</button>
				{/each}
			</div>
			<div
				class="mt-8 flex justify-between rounded-xl bg-sky-500/5 p-4 text-[9px] font-black tracking-widest text-sky-500/50 uppercase"
			>
				<span>{wat.time} {wat.tz}</span>
				<span>NODE: {wallet.address ? 'ACTIVE' : 'IDLE'}</span>
			</div>
		</div>
	{/if}
</header>
