<script lang="ts">
	import {
		calculateGlobalParity,
		fetchParityMetrics,
		type PoolMetrics
	} from '$lib/logic/DEXParity';
	import { onMount } from 'svelte';

	let pools: PoolMetrics[] = $state([]);
	let globalPrice = $state(0);

	onMount(() => {
		// Initial audit for the billion-dollar ledger
		pools = fetchParityMetrics();
		globalPrice = calculateGlobalParity(pools);

		// Refresh cycle every 5 seconds to simulate live DEX feeds
		const interval = setInterval(() => {
			pools = fetchParityMetrics();
			globalPrice = calculateGlobalParity(pools);
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<div
	class="fixed right-0 bottom-0 left-0 z-50 h-10 border-t border-white/5 bg-black/40 backdrop-blur-xl"
>
	<div class="relative flex h-full items-center overflow-hidden">
		<div
			class="z-20 flex h-full items-center bg-blue-600 px-6 shadow-[20px_0_40px_rgba(0,0,0,0.5)]"
		>
			<span class="text-[9px] font-black tracking-[0.3em] text-white uppercase">
				Global Parity: ${globalPrice.toFixed(4)}
			</span>
		</div>

		<div class="animate-marquee flex py-2 whitespace-nowrap">
			{#each [...pools, ...pools] as pool}
				<div class="flex items-center gap-4 px-12">
					<span class="text-[9px] font-bold tracking-widest text-white/30 uppercase">
						{pool.provider}
					</span>
					<span class="text-[10px] font-black text-white">
						{pool.pair}: <span class="text-blue-400">${pool.price.toFixed(4)}</span>
					</span>
					<div class="flex items-center gap-1.5">
						<span
							class="h-1 w-1 rounded-full {pool.status === 'OPTIMAL'
								? 'bg-emerald-400'
								: 'bg-amber-400'}"
						></span>
						<span class="text-[8px] font-black tracking-tighter text-white/20 uppercase">
							{pool.liquidity}M LIQ
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	.animate-marquee {
		display: flex;
		animation: marquee 30s linear infinite;
	}
</style>
