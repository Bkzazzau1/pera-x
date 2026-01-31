<script lang="ts">
	import { swapStore } from '$lib/stores/swap.svelte';
	import { fade, scale } from 'svelte/transition';

	export let isOpen = false;
	export let onConfirm: () => void;
	export let onCancel: () => void;

	// Accountant's Audit: Calculate the minimum guaranteed assets
	$: minReceived = swapStore.toAmount * (1 - swapStore.slippage / 100);
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md"
		transition:fade={{ duration: 300 }}
	>
		<div class="absolute inset-0 bg-black/60" on:click={onCancel}></div>

		<div
			class="glass relative w-full max-w-md rounded-[3rem] border border-white/10 p-10 shadow-2xl"
			transition:scale={{ start: 0.9, duration: 400 }}
		>
			<h2 class="mb-8 text-3xl font-black tracking-tighter text-white uppercase italic">
				Verify Swap
			</h2>

			<div class="space-y-6">
				<div class="flex items-center justify-between">
					<span class="text-[10px] font-black tracking-widest text-white/40 uppercase">You Pay</span
					>
					<span class="text-xl font-bold text-white"
						>{swapStore.fromAmount} <span class="text-blue-400">USDT</span></span
					>
				</div>

				<div class="flex items-center justify-between">
					<span class="text-[10px] font-black tracking-widest text-white/40 uppercase"
						>You Receive</span
					>
					<span class="text-xl font-bold text-white"
						>{swapStore.toAmount.toFixed(2)} <span class="text-blue-400">PX</span></span
					>
				</div>

				<div class="h-[1px] w-full bg-white/5"></div>

				<div class="space-y-3 rounded-2xl border border-white/5 bg-white/5 p-5">
					<div class="flex justify-between text-[9px] font-bold tracking-widest uppercase">
						<span class="text-white/40">Atomic Rate</span>
						<span class="text-blue-400">1 PX = ${swapStore.pxPrice.toFixed(4)}</span>
					</div>
					<div class="flex justify-between text-[9px] font-bold tracking-widest uppercase">
						<span class="text-white/40">Slippage Tolerance</span>
						<span class="text-white/80">{swapStore.slippage}%</span>
					</div>
					<div class="flex justify-between text-[9px] font-bold tracking-widest uppercase">
						<span class="text-white/40">Min. Guaranteed</span>
						<span class="text-emerald-400">{minReceived.toFixed(2)} PX</span>
					</div>
				</div>
			</div>

			<div class="mt-10 grid grid-cols-2 gap-4">
				<button
					on:click={onCancel}
					class="rounded-2xl border border-white/10 py-4 text-[10px] font-black tracking-widest text-white/40 uppercase transition-colors hover:bg-white/5"
				>
					Abort
				</button>
				<button
					on:click={onConfirm}
					class="rounded-2xl bg-blue-600 py-4 text-[10px] font-black tracking-widest text-white uppercase shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all hover:scale-105 active:scale-95"
				>
					Confirm Swap
				</button>
			</div>
		</div>
	</div>
{/if}
