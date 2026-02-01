<script lang="ts">
	import { ticker } from '$lib/stores/ticker.svelte';
	import { fade, fly } from 'svelte/transition';

	const fmt = new Intl.NumberFormat();
</script>

<!-- Mobile-safe: icon | details | amount (amount never clips off-screen) -->
<div class="flex w-full flex-col gap-2">
	{#each ticker.transactions as tx (tx.id)}
		<div
			in:fly={{ x: 16, duration: 700, opacity: 0 }}
			out:fade={{ duration: 300 }}
			class="glass flex w-full items-center gap-3 rounded-2xl border border-blue-400/15 bg-white/2 px-3 py-3 backdrop-blur-2xl sm:px-4"
		>
			<!-- Icon -->
			<div
				class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10"
			>
				{#if tx.type === 'BURN'}
					<svg class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 3 3 3 6 3 6s-2 .5-2 2.5c0 2 1 4 3 4s3-1 3-3c0-3-2-3-2-3s1.5 1.5 1.5 4z"
						/>
					</svg>
				{:else}
					<svg
						class="h-4 w-4 text-emerald-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
						/>
					</svg>
				{/if}
			</div>

			<!-- Middle: details (allowed to shrink) -->
			<div class="min-w-0 flex-1">
				<div class="flex items-center gap-2">
					<span class="truncate text-[9px] font-black tracking-[0.28em] text-white/55 uppercase">
						{tx.type === 'BURN' ? 'REDEMPTION BURN' : tx.type}
					</span>

					<span class="shrink-0 text-[8px] font-black tracking-[0.28em] text-blue-400/55 uppercase">
						CONFIRMED
					</span>
				</div>

				<!-- Microline (terminal feel) -->
				<div class="mt-1 flex items-center gap-2">
					<span class="text-[8px] font-bold tracking-[0.22em] text-white/25 uppercase">
						FINALIZED
					</span>
					<span class="text-[8px] text-white/15">•</span>
					<span class="text-[8px] font-bold tracking-[0.22em] text-emerald-400/50 uppercase">
						ATOMIC
					</span>
				</div>
			</div>

			<!-- Right: amount (right aligned, never spills outside) -->
			<div class="min-w-0 shrink-0 text-right">
				<div class="flex items-baseline justify-end gap-1">
					<span
						class="max-w-[48vw] truncate text-[18px] leading-none font-black tracking-tight
							text-white tabular-nums sm:text-[20px]"
						title={`-${fmt.format(tx.amount)} PX`}
					>
						-{fmt.format(tx.amount)}
					</span>
					<span class="shrink-0 text-[9px] font-black tracking-[0.28em] text-white/25 uppercase">
						PX
					</span>
				</div>

				<!-- Optional tiny right-side sublabel (helps spacing + “terminal”) -->
				<div class="mt-1 text-[8px] font-bold tracking-[0.24em] text-blue-400/40 uppercase">
					ledger
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	/* Local glass (keeps component self-contained) */
	.glass {
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
	}
</style>
