<script lang="ts">
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { wallet } from '$lib/stores/wallet.svelte';
	import { fade, fly } from 'svelte/transition';

	// Internalized proposals derived from CBPE objectives
	const proposals = [
		{
			id: 'PXIP-04',
			title: 'Burn Coefficient Adjustment',
			desc: 'Proposal to shift the dynamic burn rate from 7.5% to 9.2% to accelerate supply contraction during the current high-velocity epoch.',
			status: 'Active',
			votesFor: 68,
			expires: '2d 14h'
		},
		{
			id: 'PXIP-05',
			title: 'Expansion: Tier 5 Mobility',
			desc: 'Governance signal to activate the procurement bridge for luxury Electric Vehicles within the Platinum Tier.',
			status: 'Draft',
			votesFor: 12,
			expires: '8d 04h'
		}
	];

	let votingPower = $derived((wallet.balance || 2500).toLocaleString());
</script>

<PlanetScene />
<ParityMonitor />

<div class="relative z-10 min-h-screen bg-transparent p-8 pb-32 lg:p-16" in:fade>
	<header
		class="mb-12 flex flex-wrap items-end justify-between gap-8"
		in:fly={{ y: -20, duration: 800 }}
	>
		<div>
			<h1 class="text-4xl font-black tracking-tighter text-white uppercase italic">
				Executive <span class="font-light text-blue-500 not-italic">Governance</span>
			</h1>
			<p class="mt-4 max-w-2xl text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">
				Phase 2: Transitioning to DAO-Driven Monetary Policy
			</p>
		</div>

		<div class="glass flex items-center gap-6 rounded-3xl border-white/10 p-6 shadow-xl">
			<div class="flex flex-col">
				<span class="text-[8px] font-black tracking-[0.2em] text-white/30 uppercase"
					>Voting Power</span
				>
				<span class="text-xl font-black tracking-tighter text-white"
					>{votingPower} <span class="text-xs text-blue-400">PX</span></span
				>
			</div>
			<div class="h-10 w-[1px] bg-white/10"></div>
			<div class="flex flex-col text-right">
				<span class="text-[8px] font-black tracking-[0.2em] text-white/30 uppercase"
					>Policy Status</span
				>
				<span class="text-xs font-black tracking-tighter text-emerald-400 uppercase"
					>Community Steering
				</span>
			</div>
		</div>
	</header>

	<div class="grid gap-8 lg:grid-cols-3">
		<div class="space-y-6 lg:col-span-2">
			{#each proposals as proposal, i}
				<div
					class="glass group relative overflow-hidden rounded-[2.5rem] border-white/5 p-10 transition-all hover:border-blue-500/30"
					in:fly={{ y: 20, delay: i * 150 }}
				>
					<div class="mb-6 flex items-start justify-between">
						<div>
							<span class="text-[10px] font-black tracking-widest text-blue-400 uppercase"
								>{proposal.id}</span
							>
							<h3 class="mt-2 text-2xl font-black tracking-tighter text-white">{proposal.title}</h3>
						</div>
						<div
							class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[9px] font-black text-white/40 uppercase transition-colors group-hover:text-blue-400"
						>
							{proposal.expires} Left
						</div>
					</div>

					<p class="mb-10 max-w-xl text-sm leading-relaxed text-white/40">
						{proposal.desc}
					</p>

					<div class="space-y-4">
						<div class="flex justify-between text-[10px] font-black tracking-widest uppercase">
							<span class="text-white/60">Quorum Progress</span>
							<span class="text-white">{proposal.votesFor}%</span>
						</div>
						<div class="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
							<div
								class="h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
								style="width: {proposal.votesFor}%"
							></div>
						</div>
					</div>

					<button
						class="mt-10 w-full rounded-2xl bg-white py-5 text-[11px] font-black tracking-[0.3em] text-black uppercase shadow-xl transition-all hover:bg-blue-600 hover:text-white active:scale-95"
					>
						Cast Influence
					</button>
				</div>
			{/each}
		</div>

		<div class="glass flex flex-col justify-between rounded-[3rem] border-white/10 p-10 shadow-2xl">
			<div>
				<div
					class="mb-10 text-center text-[10px] font-black tracking-[0.3em] text-white/40 uppercase"
				>
					Consensus Audit
				</div>

				<div class="space-y-10">
					<div class="flex flex-col items-center">
						<div class="text-4xl font-black tracking-tighter text-white">84.2M</div>
						<div class="mt-2 text-[9px] font-black tracking-widest text-white/20 uppercase">
							Circulating Quorum (PX)
						</div>
					</div>

					<div class="h-[1px] w-full bg-white/5"></div>

					<div class="space-y-6">
						<div class="flex justify-between text-[9px] font-black tracking-widest uppercase">
							<span class="text-white/40">Registered Voters</span>
							<span class="text-white">12,402</span>
						</div>
						<div class="flex justify-between text-[9px] font-black tracking-widest uppercase">
							<span class="text-white/40">Delegation Yield</span>
							<span class="text-emerald-400">4.2% APR </span>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-12 rounded-2xl border border-blue-500/10 bg-blue-500/5 p-6">
				<div class="mb-2 text-[9px] font-black tracking-widest text-blue-400 uppercase">
					Governance Guard
				</div>
				<p class="text-[9px] leading-relaxed font-bold text-white/30 uppercase">
					To maintain <span class="text-white">Sybil Resistance</span>, voting assets are
					temporarily locked until the epoch concludes.
				</p>
			</div>
		</div>
	</div>
</div>
