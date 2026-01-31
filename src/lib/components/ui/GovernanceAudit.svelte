<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	// Parameters derived from the CBPE Roadmap [cite: 360, 361]
	const activeProposals = [
		{ id: 'PXIP-04', type: 'Burn Rate', progress: 68, label: 'Aggressive' },
		{ id: 'PXIP-05', type: 'Expansion', progress: 12, label: 'Tier 5' }
	];

	const quorumTotal = '84.2M';
</script>

<div class="space-y-6" in:fade>
	<div class="glass rounded-3xl border border-white/5 bg-white/2 p-6">
		<div class="mb-4 flex items-center justify-between">
			<span class="text-[9px] font-black tracking-widest text-white/30 uppercase italic">
				Consensus Health
			</span>
			<span class="text-[8px] font-bold text-emerald-400 uppercase">Phase 2 Active</span>
		</div>

		<div class="flex items-end justify-between">
			<div>
				<div class="text-3xl font-black tracking-tighter text-white italic">
					{quorumTotal}
				</div>
				<div class="mt-1 text-[8px] font-black tracking-widest text-sky-500 uppercase">
					Active Quorum (PX)
				</div>
			</div>
			<div class="text-right">
				<div class="text-lg font-black text-white/60">75%</div>
				<div class="text-[7px] font-bold text-white/20 uppercase">Threshold</div>
			</div>
		</div>

		<div class="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
			<div
				class="h-full bg-linear-to-r from-blue-600 to-sky-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
				style="width: 75%"
			></div>
		</div>
	</div>

	<div class="space-y-3">
		<h4 class="px-2 text-[8px] font-black tracking-[0.4em] text-white/20 uppercase italic">
			Active Policy Steering
		</h4>

		{#each activeProposals as prop, i}
			<div
				class="glass group relative overflow-hidden rounded-2xl border border-white/5 p-4 transition-all hover:border-blue-500/30"
				in:fly={{ x: 20, delay: i * 150 }}
			>
				<div class="mb-3 flex items-center justify-between">
					<div class="flex flex-col">
						<span class="text-[8px] font-black tracking-tighter text-blue-400 uppercase">
							{prop.id} // {prop.type}
						</span>
						<span class="mt-1 text-[10px] font-bold text-white/80 uppercase italic">
							{prop.label} Adjustment
						</span>
					</div>
					<span class="text-[10px] font-black text-white">{prop.progress}%</span>
				</div>

				<div class="h-1 w-full overflow-hidden rounded-full bg-white/5">
					<div
						class="h-full bg-blue-500 transition-all duration-1000"
						style="width: {prop.progress}%"
					></div>
				</div>
			</div>
		{/each}
	</div>

	<div class="rounded-2xl border border-blue-500/10 bg-blue-500/5 p-4">
		<div class="mb-1 flex items-center gap-2">
			<div class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400"></div>
			<span class="text-[8px] font-black tracking-widest text-blue-400 uppercase">Oracle Sync</span>
		</div>
		<p class="text-[8px] leading-relaxed font-medium text-white/30 uppercase">
			Market integrity is secured via the **Price Band Control System**.
		</p>
	</div>
</div>
