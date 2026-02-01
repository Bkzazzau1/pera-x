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

<!-- FIX: removed fixed positioning. Parent decides placement. -->
<div class="relative w-full border-t border-white/5 bg-black/40 backdrop-blur-xl">
	<div class="relative flex h-8 items-center overflow-hidden md:h-10">
		<!-- FIX: tighter padding on mobile -->
		<div
			class="z-20 flex h-full items-center bg-blue-600 px-4 shadow-[20px_0_40px_rgba(0,0,0,0.5)] md:px-6"
		>
			<span class="text-[8px] font-black tracking-[0.28em] text-white uppercase md:text-[9px]">
				Global Parity: ${globalPrice.toFixed(4)}
			</span>
		</div>

		<!-- Premium edge fade so ticker doesn't feel like it "fills" too much -->
		<div
			class="pointer-events-none absolute inset-y-0 left-0 z-30 w-10 bg-linear-to-r from-black/60 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 z-30 w-10 bg-linear-to-l from-black/60 to-transparent"
		></div>

		<!-- FIX: tighter vertical padding and spacing -->
		<div class="animate-marquee flex items-center py-1 whitespace-nowrap md:py-2">
			{#each [...pools, ...pools] as pool}
				<div class="flex items-center gap-3 px-8 md:gap-4 md:px-10">
					<span class="text-[8px] font-bold tracking-widest text-white/30 uppercase md:text-[9px]">
						{pool.provider}
					</span>
					<span class="text-[9px] font-black text-white md:text-[10px]">
						{pool.pair}: <span class="text-blue-400">${pool.price.toFixed(4)}</span>
					</span>
					<div class="flex items-center gap-1.5">
						<span
							class="h-1 w-1 rounded-full {pool.status === 'OPTIMAL'
								? 'bg-emerald-400'
								: 'bg-amber-400'}"
						></span>
						<span
							class="text-[7px] font-black tracking-tight text-white/20 uppercase md:text-[8px]"
						>
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
