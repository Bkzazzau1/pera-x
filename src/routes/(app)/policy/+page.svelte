<script lang="ts">
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { fade, fly } from 'svelte/transition';

	const burnRate = '20%';
	const recycleRate = '30%';

	const targetFloor = '$0.00009';
	const targetCeiling = '$0.00027';

	const policyRules = [
		{
			title: 'Dynamic Utility Pricing',
			desc: 'Service value is calculated first, then converted into PEX at the current market price.'
		},
		{
			title: 'Service-Credit Activation Burn',
			desc: 'Burn applies only after a user receives credits, and only from captured service revenue.'
		},
		{
			title: 'Capped Growth Release',
			desc: 'At 200% growth, only approved vested or releasable allocations may release under capped rules.'
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
			Published utility-token rules for burn, discounts, release caps, and wallet flows
		</p>
	</header>

	<div class="grid gap-8 lg:grid-cols-3">
		<div
			class="glass rounded-[3rem] border-white/10 p-10 shadow-2xl backdrop-blur-3xl lg:col-span-2"
		>
			<div class="grid gap-10 md:grid-cols-3">
				<div class="space-y-2">
					<div class="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase italic">
						Active Burn Rate
					</div>
					<div class="text-3xl font-black tracking-tighter text-blue-400">{burnRate}</div>
					<div class="text-[8px] font-bold tracking-widest text-white/10 uppercase">
						Range: 2–30%
					</div>
				</div>
				<div class="space-y-2">
					<div class="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase italic">
						Max Bill Discount
					</div>
					<div class="text-3xl font-black tracking-tighter text-white">{recycleRate}</div>
					<div class="text-[8px] font-bold tracking-widest text-white/10 uppercase">
						Requires 60+ holding days
					</div>
				</div>
				<div class="space-y-2">
					<div class="text-[9px] font-black tracking-[0.4em] text-white/20 uppercase italic">
						Launch to 200% Growth
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
					{#each policyRules as rule (rule.title)}
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
					Release Guard
				</div>

				<div class="flex flex-col items-center justify-center py-6">
					<div class="text-4xl font-black text-white italic">75%</div>
					<p
						class="mt-4 text-center text-[10px] leading-relaxed font-bold tracking-widest text-white/20 uppercase"
					>
						Maximum approved <br /> release allowance
					</p>
				</div>
			</div>

			<div class="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-6">
				<div class="mb-2 text-[9px] font-black tracking-widest text-emerald-400 uppercase italic">
					Economic Status
				</div>
				<div class="text-[10px] leading-relaxed font-bold tracking-tighter text-white/40 uppercase">
					Service credit model active. <br /> Trading Company Wallet:
					<span class="text-white">Active</span>
				</div>
			</div>
		</div>
	</div>
</div>
