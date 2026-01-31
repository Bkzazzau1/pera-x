<script lang="ts">
	import { swapStore } from '$lib/stores/swap.svelte';
	import { wallet } from '$lib/stores/wallet.svelte';
	import { fade, fly } from 'svelte/transition';
// High-Fidelity Infrastructure
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import SwapConfirm from '$lib/components/ui/SwapConfirm.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';

	let isConfirming = $state(false);

	/**
	 * Final Atomic Execution.
	 * Logic to trigger the on-chain swap via the Trading Company flow.
	 */
	async function handleExecution() {
		// Settlement logic handled by the non-profit Trading Company mandate [cite: 83]
		swapStore.execute();
		isConfirming = false;
	}
</script>

<PlanetScene />
<ParityMonitor />

<SwapConfirm
	isOpen={isConfirming}
	onConfirm={handleExecution}
	onCancel={() => (isConfirming = false)}
/>

<div class="relative z-10 min-h-screen bg-transparent p-6 pb-24 md:p-12" in:fade>
	<div class="mx-auto max-w-xl">
		<header class="mb-10 text-center" in:fly={{ y: -10, duration: 600 }}>
			<h1 class="text-4xl font-black tracking-tighter text-white uppercase italic">
				Liquidity <span class="font-light text-blue-500 not-italic">Portal</span>
			</h1>
			<p
				class="mt-2 text-[10px] leading-relaxed font-black tracking-[0.3em] text-blue-400 uppercase"
			>
				Verified DCMS-Native Execution • Multi-Vendor Settlement [cite: 215, 334]
			</p>
		</header>

		<div
			class="glass relative overflow-hidden rounded-[3rem] border border-white/10 p-8 shadow-2xl backdrop-blur-3xl md:p-10"
		>
			<div class="relative z-10 space-y-6">
				<div
					class="glass border border-white/10 bg-white/5 p-6 transition-all hover:border-blue-500/30"
				>
					<div
						class="mb-4 flex justify-between text-[10px] font-black tracking-widest text-white/30 uppercase"
					>
						<span>Pay With</span>
						<span>Balance: {wallet.balance ? wallet.balance.toFixed(2) : '2,500.00'}</span>
					</div>
					<div class="flex items-center justify-between">
						<input
							type="number"
							bind:value={swapStore.fromAmount}
							placeholder="0.00"
							class="w-full bg-transparent text-4xl font-black tracking-tighter text-white placeholder:text-white/10 focus:outline-none"
						/>
						<div
							class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2"
						>
							<span class="text-sm font-black tracking-tighter text-blue-400 uppercase italic"
								>USDT</span
							>
						</div>
					</div>
				</div>

				<div class="relative z-20 -my-8 flex justify-center">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-transform duration-500 hover:rotate-180"
					>
						<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</div>
				</div>

				<div class="glass border border-blue-500/20 bg-blue-500/5 p-6">
					<div
						class="mb-4 flex justify-between text-[10px] font-black tracking-widest text-white/30 uppercase"
					>
						<span>Receive Assets</span>
						<span>Est. Rate: ${swapStore.currentParity.toFixed(4)}</span>
					</div>
					<div class="flex items-center justify-between">
						<div class="text-4xl font-black tracking-tighter text-white/90">
							{swapStore.estimateOut.toFixed(2)}
						</div>
						<div
							class="flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/20 px-4 py-2"
						>
							<span class="text-sm font-black tracking-tighter text-blue-400 uppercase italic"
								>PX</span
							>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8 rounded-2xl border border-blue-500/10 bg-blue-500/5 p-5">
				<div
					class="mb-2 flex justify-between text-[9px] font-bold tracking-widest text-blue-400/60 uppercase"
				>
					<span>Slippage Tolerance</span>
					<span>{swapStore.slippage}%</span>
				</div>
				<div
					class="flex justify-between text-[9px] font-bold tracking-widest text-white/20 uppercase"
				>
					<span>Execution Fee</span>
					<span class="text-emerald-400">$0.00 (Subsidized)</span>
				</div>
			</div>

			<button
				onclick={() => (isConfirming = true)}
				disabled={swapStore.fromAmount <= 0}
				class="mt-8 w-full rounded-[1.5rem] bg-white px-6 py-6 text-[11px] font-black tracking-[0.3em] text-black uppercase shadow-xl transition-all hover:bg-blue-400 hover:text-white active:scale-95 disabled:opacity-20"
			>
				Execute Atomic Swap
			</button>
		</div>
	</div>
</div>
