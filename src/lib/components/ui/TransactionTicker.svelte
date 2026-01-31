<script lang="ts">
	import { ticker } from '$lib/stores/ticker.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<div class="flex w-full flex-col gap-3">
	{#each ticker.transactions as tx (tx.id)}
		<div
			in:fly={{ x: 20, duration: 800, opacity: 0 }}
			out:fade={{ duration: 400 }}
			class="glass flex items-center gap-3 rounded-2xl border-blue-400/20 px-5 py-3 shadow-xl backdrop-blur-2xl"
		>
			<div
				class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/10"
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

			<div class="overflow-hidden">
				<div class="text-[8px] font-black tracking-[0.2em] text-blue-400/60 uppercase">
					{tx.type} CONFIRMED
				</div>
				<div class="flex items-baseline gap-1.5">
					<span class="text-lg font-black tracking-tighter text-white">
						-{new Intl.NumberFormat().format(tx.amount)}
					</span>
					<span class="text-[8px] font-bold tracking-widest text-white/30 uppercase">PX</span>
				</div>
			</div>
		</div>
	{/each}
</div>
