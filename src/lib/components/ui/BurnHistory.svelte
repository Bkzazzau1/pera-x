<script lang="ts">
	import { fly } from 'svelte/transition';

	// Static ledger data for $5B protocol audit
	const history = [
		{ id: 1, amount: '45,230', type: 'Redemption Burn', date: '2h ago', status: 'Finalized' },
		{ id: 2, amount: '12,000', type: 'Policy Adjustment', date: '5h ago', status: 'Finalized' },
		{ id: 3, amount: '89,400', type: 'Redemption Burn', date: '12h ago', status: 'Finalized' },
		{ id: 4, amount: '2,500', type: 'Admin Incineration', date: '1d ago', status: 'Finalized' }
	];
</script>

<div
	class="glass glow-hover relative overflow-hidden rounded-[3.5rem] border border-white/10 p-10 shadow-2xl backdrop-blur-3xl transition-all duration-700"
>
	<div class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]"></div>
	<div
		class="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-blue-600/5 blur-[120px]"
	></div>

	<header class="relative z-10 mb-10 flex items-center justify-between">
		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-3">
				<div
					class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)]"
				></div>
				<h3 class="text-xs font-black tracking-[0.5em] text-white/40 uppercase">
					Historical Contraction
				</h3>
			</div>
			<p class="text-[9px] font-bold tracking-widest text-blue-400/60 uppercase italic">
				Supply Incineration Ledger • Verified Node Audit
			</p>
		</div>

		<div
			class="flex items-center gap-3 rounded-2xl border border-blue-400/20 bg-blue-400/5 px-4 py-2 shadow-lg transition-all hover:bg-blue-400/10"
		>
			<span class="text-[10px] font-black tracking-widest text-blue-400 uppercase italic"
				>On-Chain</span
			>
			<div class="h-3 w-px bg-blue-400/30"></div>
			<span
				class="text-[10px] font-black tracking-tighter tracking-widest text-white uppercase italic"
				>Live</span
			>
		</div>
	</header>

	<div class="relative z-10 space-y-4">
		{#each history as event, i}
			<div
				class="group relative flex items-center justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(59,130,246,0.05)]"
				in:fly={{ x: -20, delay: i * 150, duration: 800 }}
			>
				<div
					class="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/[0.02] to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				></div>

				<div class="relative z-10 flex items-center gap-6">
					<div
						class="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-blue-500/40 group-hover:bg-blue-500/10"
					>
						<svg
							class="h-6 w-6 text-white/20 transition-colors group-hover:text-blue-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 3 3 3 6 3 6s-2 .5-2 2.5c0 2 1 4 3 4s3-1 3-3c0-3-2-3-2-3s1.5 1.5 1.5 4z"
							/>
						</svg>
					</div>

					<div class="flex flex-col">
						<span
							class="text-sm font-black tracking-tighter text-white/90 uppercase italic transition-colors group-hover:text-white"
						>
							{event.type}
						</span>
						<div class="mt-1 flex items-center gap-2">
							<span class="text-[9px] font-bold tracking-widest text-white/20 uppercase">
								{event.date}
							</span>
							<div class="h-1 w-1 rounded-full bg-white/10"></div>
							<span
								class="text-[9px] font-black tracking-widest text-emerald-500/60 uppercase italic"
							>
								{event.status}
							</span>
						</div>
					</div>
				</div>

				<div class="relative z-10 flex flex-col items-end">
					<div class="flex items-baseline gap-2">
						<span
							class="text-2xl font-black tracking-tighter text-white transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-400"
						>
							-{event.amount}
						</span>
						<span class="text-xs font-black tracking-widest text-blue-400/40 uppercase">PX</span>
					</div>
					<div
						class="mt-1 flex items-center gap-1.5 opacity-40 transition-opacity group-hover:opacity-100"
					>
						<svg class="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
						<span class="text-[8px] font-black tracking-[0.2em] text-white uppercase"
							>Atomic Burn</span
						>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<footer class="relative z-10 mt-10 flex justify-center border-t border-white/5 pt-8">
		<button
			class="group flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white/30 uppercase transition-all hover:text-white"
		>
			<span>Download Full Ledger Audit</span>
			<svg
				class="h-4 w-4 transition-transform group-hover:translate-y-0.5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</button>
	</footer>
</div>

<style>
	.glow-hover:hover {
		border-color: rgba(59, 130, 246, 0.2);
		box-shadow: 0 0 100px rgba(59, 130, 246, 0.05);
	}
</style>
