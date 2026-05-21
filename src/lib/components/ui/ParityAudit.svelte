<script lang="ts">
	import { fly } from 'svelte/transition';

	const auditData = [
		{ exchange: 'Raydium', price: '$0.000180', liquidity: '$4.2M', drift: '0.001%' },
		{ exchange: 'Orca', price: '$0.000179', liquidity: '$1.6M', drift: '0.003%' },
		{ exchange: 'Jupiter Route', price: '$0.000181', liquidity: '$8.9M', drift: '0.000%' }
	];
</script>

<div
	class="glass glow-hover relative overflow-hidden rounded-[3rem] border border-white/10 p-10 shadow-2xl backdrop-blur-3xl transition-all duration-700"
>
	<header class="relative z-10 mb-8 flex items-start justify-between">
		<div>
			<div class="flex items-center gap-3">
				<div
					class="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]"
				></div>
				<h3 class="text-xs font-black tracking-[0.5em] text-white/40 uppercase italic">
					Solana Liquidity Audit
				</h3>
			</div>
			<p class="mt-2 text-3xl font-black tracking-tighter text-white uppercase italic">
				Dynamic <span class="font-light text-blue-500 not-italic">Utility Pricing</span>
			</p>
		</div>
		<div class="text-right">
			<span
				class="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-[8px] font-black tracking-widest text-blue-400 uppercase"
				>Oracle: Active</span
			>
		</div>
	</header>

	<div class="relative z-10 space-y-4">
		{#each auditData as item, i}
			<div
				class="group grid grid-cols-4 items-center rounded-2xl border border-white/5 bg-white/1 p-5 transition-all hover:bg-white/3"
				in:fly={{ y: 10, delay: i * 100 }}
			>
				<div class="flex flex-col">
					<span class="text-[10px] font-black tracking-widest text-white/80 uppercase"
						>{item.exchange}</span
					>
					<span class="text-[8px] font-bold text-white/20 uppercase">Aggregator Node</span>
				</div>
				<div class="text-center">
					<span class="text-sm font-black text-white italic">{item.price}</span>
					<span class="block text-[7px] font-bold tracking-tighter text-white/10 uppercase"
						>Current PX Quote</span
					>
				</div>
				<div class="text-center">
					<span class="text-sm font-black text-blue-400 italic">{item.liquidity}</span>
					<span class="block text-[7px] font-bold tracking-tighter text-blue-400/20 uppercase"
						>Pool Depth</span
					>
				</div>
				<div class="text-right">
					<span class="text-[9px] font-black text-emerald-400 uppercase">Drift: {item.drift}</span>
					<div class="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/5">
						<div class="h-full bg-emerald-500/50" style="width: 98%"></div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<footer class="relative z-10 mt-8 flex items-center justify-between border-t border-white/5 pt-8">
		<p class="max-w-xs text-[9px] leading-relaxed font-bold text-white/30 uppercase italic">
			Service value is calculated first, then converted into PX using the current market
			price at conversion time.
		</p>
		<div class="flex items-baseline gap-2">
			<span class="text-[10px] font-black text-white/20 uppercase">System Health:</span>
			<span class="text-lg font-black tracking-tighter text-emerald-400 italic">OPTIMAL</span>
		</div>
	</footer>
</div>
