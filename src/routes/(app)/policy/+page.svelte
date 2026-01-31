<script lang="ts">
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { fade, fly } from 'svelte/transition';

	// Parameters derived from the CBPE
	const currentEpoch = 'EPOCH-42';
	const burnRate = '7.5%'; // Targets 3-10% range
	const recycleRate = '24.2%'; // Targets 10-40% range

	// Price Band Targets for Expansion Phase
	const targetFloor = '$0.12';
	const targetCeiling = '$0.25';

	const policyRules = [
		{
			title: 'Dynamic Quantity Adjustment',
			desc: 'DQA logic stabilizes entry costs by adjusting PX requirements based on current market price.'
		},
		{
			title: 'Band-Intervention Protocol',
			desc: 'System triggers liquidity injection and reduces burn if price breaches the ceiling band.'
		},
		{
			title: 'Redemption Recycle',
			desc: 'Redeemed tokens are split between burn, treasury, and market recycle to maintain flow.'
		}
	];
</script>

<PlanetScene />
<ParityMonitor />

<div class="relative z-10 min-h-screen bg-transparent p-8 pb-32 lg:p-16" in:fade>
	<header class="mb-12" in:fly={{ y: -20, duration: 800 }}>
		<h1 class="text-4xl font-black tracking-tighter text-white uppercase italic">
			Policy <span class="font-light text-blue-500 not-italic">Console</span>
		</h1>
		<p
			class="mt-4 max-w-2xl text-xs leading-relaxed font-bold tracking-[0.2em] text-white/40 uppercase"
		>
			Central Bank Policy Engine (CBPE) • Global Monetary Discipline
		</p>
	</header>

	<div class="grid gap-8 lg:grid-cols-3">
		<div
			class="glass rounded-[3rem] border-white/10 p-10 shadow-2xl backdrop-blur-3xl lg:col-span-2"
		>
			<div class="grid gap-10 md:grid-cols-3">
				<div class="space-y-2">
					<div class="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase italic">
						Burn Velocity
					</div>
					<div class="text-3xl font-black tracking-tighter text-blue-400">{burnRate}</div>
					<div class="text-[8px] font-bold tracking-widest text-white/10 uppercase">
						Target: 3–10%
					</div>
				</div>
				<div class="space-y-2">
					<div class="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase italic">
						Recycle Rate
					</div>
					<div class="text-3xl font-black tracking-tighter text-white">{recycleRate}</div>
					<div class="text-[8px] font-bold tracking-widest text-white/10 uppercase">
						Target: 10–40%
					</div>
				</div>
				<div class="space-y-2">
					<div class="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase italic">
						Price Band Zone
					</div>
					<div class="text-2xl font-black tracking-tighter text-emerald-400 uppercase italic">
						{targetFloor} <span class="text-[10px] text-white/20 not-italic">—</span>
						{targetCeiling}
					</div>
				</div>
			</div>

			<div class="mt-16">
				<div class="mb-8 text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">
					Active Protocol Constraints
				</div>
				<div class="grid gap-4">
					{#each policyRules as rule}
						<div
							class="rounded-2xl border border-white/5 bg-white/2 p-6 transition-all hover:border-blue-500/20 hover:bg-white/5"
						>
							<h4 class="mb-2 text-sm font-black tracking-tight text-blue-400 uppercase italic">
								{rule.title}
							</h4>
							<p class="text-xs leading-relaxed font-light text-white/40">{rule.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="glass flex flex-col justify-between rounded-[3rem] border-white/10 p-10 shadow-2xl">
			<div>
				<div
					class="mb-8 text-center text-[10px] font-black tracking-[0.3em] text-white/40 uppercase"
				>
					TVL Quorum Hash
				</div>

				<div class="flex flex-col items-center justify-center py-6">
					<div class="text-4xl font-black text-white italic">75%</div>
					<p
						class="mt-4 text-center text-[10px] leading-relaxed font-bold tracking-widest text-white/20 uppercase"
					>
						Phase 3 Community <br /> Steering Activated
					</p>
				</div>
			</div>

			<div class="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-6">
				<div class="mb-2 text-[9px] font-black tracking-widest text-emerald-400 uppercase italic">
					Economic Status
				</div>
				<div class="text-[10px] leading-relaxed font-bold tracking-tighter text-white/40 uppercase">
					Optimal Scarcity Secured. <br /> Price Stabilization Engine:
					<span class="text-white">Active</span>
				</div>
			</div>
		</div>
	</div>
</div>
