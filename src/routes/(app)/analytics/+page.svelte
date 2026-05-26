<script lang="ts">
	import LiquidityBridge from '$lib/components/ui/LiquidityBridge.svelte';
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import ProjectionChart from '$lib/components/ui/ProjectionChart.svelte';
	import StatCard from '$lib/components/ui/StatCard.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { fade, fly } from 'svelte/transition';

	// Analytics Context: Audited Economic Metrics
	const metrics = [
		{ label: 'Service Revenue', value: '$1.42M', hint: 'Trading Company Wallet' },
		{ label: 'Avg. Burn per Hour', value: '42,500 PEX', hint: '2%-30% dynamic band' },
		{ label: 'Credit Activation Rate', value: '89.2%', hint: 'AI, calls, SMS, web, bills' }
	];
</script>

<PlanetScene />
<ParityMonitor />

<div
	class="relative z-10 min-h-screen bg-transparent px-0 py-6 pb-24 sm:px-2 md:p-8 md:pb-32 lg:p-16"
	in:fade
>
	<header class="mb-8 md:mb-12" in:fly={{ y: -20, duration: 800 }}>
		<h1 class="text-3xl font-black tracking-tighter text-white uppercase italic sm:text-4xl">
			Analytics <span class="font-light text-blue-500 not-italic">Hub</span>
		</h1>
		<p class="mt-4 max-w-2xl text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
			Public dashboards for burn activity, utility usage, wallet activity, discount tiers, and
			supply
		</p>
	</header>

	<div class="grid gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
		{#each metrics as metric, i (metric.label)}
			<div in:fly={{ y: 20, delay: i * 100 }}>
				<StatCard label={metric.label} value={metric.value} hint={metric.hint} variant="neon" />
			</div>
		{/each}

		<div class="lg:col-span-3" in:fly={{ y: 20, delay: 300 }}>
			<LiquidityBridge />
		</div>

		<div class="lg:col-span-2" in:fly={{ y: 20, delay: 500 }}>
			<div
				class="glass overflow-hidden rounded-3xl border border-white/5 p-1 shadow-2xl backdrop-blur-3xl md:rounded-[3rem]"
			>
				<ProjectionChart />
			</div>
		</div>

		<div
			class="glass flex flex-col justify-between rounded-3xl border-white/10 p-5 shadow-2xl backdrop-blur-3xl sm:p-6 md:rounded-[3rem] md:p-10"
			in:fly={{ y: 20, delay: 700 }}
		>
			<div>
				<div class="mb-8 text-[10px] font-black tracking-[0.4em] text-white/40 uppercase italic">
					Wallet Flow Audit
				</div>

				<div class="mt-6 space-y-6">
					<div class="flex items-center justify-between gap-4">
						<div class="flex flex-col">
							<span class="text-[9px] font-black tracking-widest text-white/30 uppercase"
								>Provider Settlement</span
							>
							<span class="text-[8px] font-bold text-white/10 uppercase italic"
								>Voice, SMS, AI, bills</span
							>
						</div>
						<span class="text-xl font-black tracking-tighter text-emerald-400 italic">$890M</span>
					</div>

					<div class="flex items-center justify-between gap-4">
						<div class="flex flex-col">
							<span class="text-[9px] font-black tracking-widest text-white/30 uppercase"
								>Burn Wallet</span
							>
							<span class="text-[8px] font-bold text-white/10 uppercase italic"
								>Service revenue portion</span
							>
						</div>
						<span class="text-xl font-black tracking-tighter text-blue-400 italic">$420M</span>
					</div>

					<div class="h-px w-full bg-white/5"></div>

					<div class="flex items-center justify-between">
						<span class="text-[9px] font-black tracking-widest text-white/30 uppercase italic"
							>Usage Dashboard</span
						>
						<span class="text-xs font-bold tracking-widest text-white">0.02% @ 10M</span>
					</div>
				</div>
			</div>

			<div
				class="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 transition-all hover:bg-blue-500/10 md:mt-10 md:p-6"
			>
				<div class="mb-2 flex items-center gap-2">
					<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400"></span>
					<span class="text-[9px] font-black tracking-widest text-blue-400 uppercase"
						>Utility Integrity</span
					>
				</div>
				<div class="text-lg leading-none font-black tracking-tighter text-white uppercase italic">
					Credits Issued <br /> <span class="font-light text-blue-500 not-italic">Before Burn</span>
				</div>
			</div>
		</div>
	</div>
</div>
