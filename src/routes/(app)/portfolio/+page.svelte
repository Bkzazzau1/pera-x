<!-- File: src/routes/(app)/portfolio/+page.svelte -->
<script lang="ts">
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { getEligibleTier, getNextTierProgress } from '$lib/logic/PolicyEngine';
	import { wallet } from '$lib/stores/wallet.svelte';
	import { fade, fly } from 'svelte/transition';

	// Derived Financial Intelligence
	let currentTier = $derived(getEligibleTier(wallet.balance || 2500));
	let progress = $derived(getNextTierProgress(wallet.balance || 2500));
	let usdValue = $derived((wallet.balance || 2500) * 1.1842); // Based on DEX Parity
</script>

<PlanetScene />
<ParityMonitor />

<div class="relative z-10 min-h-screen bg-transparent p-6 pb-24 md:p-12" in:fade>
	<div class="mx-auto max-w-5xl">
		<header
			class="mb-12 flex flex-wrap items-end justify-between gap-6"
			in:fly={{ y: -20, duration: 800 }}
		>
			<div>
				<h1 class="text-5xl font-black tracking-tighter text-white uppercase italic">
					Institutional Portfolio
				</h1>
				<p class="mt-2 text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">
					Asset Maturity & Redemption Audit
				</p>
			</div>
			<div class="glass flex items-center gap-4 rounded-2xl border-white/10 px-6 py-3">
				<span class="text-[10px] font-black tracking-widest text-white/40 uppercase"
					>Global Status:</span
				>
				<span class="text-xs font-black tracking-tighter text-blue-400 uppercase"
					>{currentTier?.label || 'BRONZE'}</span
				>
			</div>
		</header>

		<div class="grid gap-8 lg:grid-cols-3">
			<div
				class="glass relative overflow-hidden rounded-[3rem] border-white/10 p-10 shadow-2xl lg:col-span-2"
			>
				<div class="relative z-10">
					<div class="mb-2 text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">
						Net Liquidity Value
					</div>
					<div class="flex items-baseline gap-3">
						<div class="text-6xl font-black tracking-tighter text-white">
							${usdValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
						</div>
						<div class="text-xl font-bold text-blue-500/50 uppercase italic">USD</div>
					</div>

					<div class="mt-10 grid grid-cols-2 gap-10">
						<div>
							<div class="mb-2 text-[9px] font-black tracking-widest text-white/20 uppercase">
								PX Holdings
							</div>
							<div class="text-2xl font-bold text-white">
								{(wallet.balance || 2500).toLocaleString()} PX
							</div>
						</div>
						<div>
							<div class="mb-2 text-[9px] font-black tracking-widest text-white/20 uppercase">
								Avg. Cost Basis
							</div>
							<div class="text-2xl font-bold text-white">$1.12</div>
						</div>
					</div>
				</div>
				<div
					class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]"
				></div>
			</div>

			<div class="glass flex flex-col justify-between rounded-[3rem] border-white/10 p-10">
				<div>
					<div class="mb-6 text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">
						Tier Velocity
					</div>
					<div class="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
						<div
							class="absolute inset-y-0 left-0 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000"
							style="width: {progress}%"
						></div>
					</div>
					<div
						class="mt-4 flex justify-between text-[9px] font-black tracking-widest text-white/40 uppercase"
					>
						<span>{progress.toFixed(1)}% to Next Tier</span>
						<span class="text-blue-400">Target: Platinum</span>
					</div>
				</div>

				<div class="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
					<div class="mb-1 text-[9px] font-black tracking-widest text-blue-400 uppercase">
						Current Privilege
					</div>
					<div class="text-lg font-bold text-white">
						{currentTier?.discount || '7%'} Hardware Subsidy
					</div>
				</div>
			</div>
		</div>

		<div class="mt-12" in:fly={{ y: 20, delay: 400 }}>
			<div class="glass rounded-[3rem] border-white/10 p-10">
				<h2 class="mb-8 text-xs font-black tracking-[0.4em] text-white/30 uppercase">
					Redemption Eligibility
				</h2>
				<div class="grid gap-4 md:grid-cols-4">
					{#each ['iPhone 17 Pro', 'MacBook Pro M5', 'Galaxy S26', 'Pixel 11'] as item}
						<div
							class="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.05]"
						>
							<div class="mb-1 text-[10px] font-black tracking-widest text-white/60 uppercase">
								{item}
							</div>
							<div class="text-xs font-bold text-emerald-400 uppercase">Eligible Now</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
