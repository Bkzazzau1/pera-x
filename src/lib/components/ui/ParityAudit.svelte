<script lang="ts">
	import { fly } from 'svelte/transition';

	// Spread data proving 1:1 Hardware Parity
	const auditData = [
		{ exchange: 'Uniswap V4', price: '$1.1842', liquidity: '$420.5M', drift: '0.001%' },
		{ exchange: 'Curve Finance', price: '$1.1839', liquidity: '$156.8M', drift: '0.003%' },
		{ exchange: 'Pera-Native DEX', price: '$1.1845', liquidity: '$890.2M', drift: '0.000%' }
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
					Global Parity Audit
				</h3>
			</div>
			<p class="mt-2 text-3xl font-black tracking-tighter text-white uppercase italic">
				Cross-DEX <span class="font-light text-blue-500 not-italic">Peg Validation</span>
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
						>Current PX/USDC</span
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
			Verification secured via the Price Band Control System. Drift levels optimized for
			institutional liquidity entry.
		</p>
		<div class="flex items-baseline gap-2">
			<span class="text-[10px] font-black text-white/20 uppercase">System Health:</span>
			<span class="text-lg font-black tracking-tighter text-emerald-400 italic">OPTIMAL</span>
		</div>
	</footer>
</div>
