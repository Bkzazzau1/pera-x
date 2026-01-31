<script lang="ts">

	// Economic metrics for the PBCS Recycle Loop
	const bridgeMetrics = {
		totalRecycled: '$14.8M',
		bridgeEfficiency: '99.2%',
		activeLiquidity: '$890M',
		flowRate: 'High'
	};

	let { active = true } = $props();
</script>

<div
	class="glass glow-hover relative overflow-hidden rounded-[3rem] border border-white/10 p-10 shadow-2xl backdrop-blur-3xl transition-all duration-700"
>
	<div
		class="absolute -top-32 -right-32 h-96 w-96 animate-pulse rounded-full bg-emerald-500/5 blur-[120px]"
	></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.03),transparent_70%)]"
	></div>

	<header class="relative z-10 mb-10 flex items-start justify-between">
		<div>
			<div class="flex items-center gap-3">
				<div class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)]"></div>
				<h3 class="text-xs font-black tracking-[0.5em] text-white/40 uppercase">
					Global Liquidity Bridge
				</h3>
			</div>
			<p class="mt-2 text-3xl font-black tracking-tighter text-white uppercase italic">
				Fiat-to-DEX <span class="font-light text-emerald-400 not-italic">Recycle Loop</span>
			</p>
		</div>
		<div class="text-right">
			<span
				class="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-[8px] font-black tracking-widest text-emerald-400 uppercase"
				>PBCS Active</span
			>
		</div>
	</header>

	<div class="relative z-10 grid grid-cols-3 items-center gap-6 py-8">
		<div class="flex flex-col items-center gap-4 text-center">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/2 shadow-inner"
			>
				<svg class="h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-10V4m-5 10v.01"
					/>
				</svg>
			</div>
			<span class="text-[9px] font-black tracking-widest text-white/40 uppercase"
				>Trading Co. Fees</span
			>
		</div>

		<div class="relative h-px w-full bg-white/5">
			<div
				class="absolute inset-0 bg-linear-to-r from-transparent via-emerald-400 to-transparent opacity-50 blur-sm"
			></div>
			{#if active}
				<div
					class="absolute h-1 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]"
					style="animation: bridge-flow 2s infinite linear"
				></div>
			{/if}
		</div>

		<div class="flex flex-col items-center gap-4 text-center">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_30px_rgba(52,211,153,0.1)]"
			>
				<svg class="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
					/>
				</svg>
			</div>
			<span class="text-[9px] font-black tracking-widest text-emerald-400 uppercase italic"
				>Sovereign DEX</span
			>
		</div>
	</div>

	<footer class="relative z-10 mt-8 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
		<div>
			<div class="text-[8px] font-black tracking-widest text-white/20 uppercase italic">
				Aggregated Recovery
			</div>
			<div class="mt-1 text-2xl font-black tracking-tighter text-white italic">
				{bridgeMetrics.totalRecycled}
			</div>
		</div>
		<div class="text-right">
			<div class="text-[8px] font-black tracking-widest text-white/20 uppercase italic">
				Efficiency Rating
			</div>
			<div class="mt-1 text-2xl font-black tracking-tighter text-emerald-400 italic">
				{bridgeMetrics.bridgeEfficiency}
			</div>
		</div>
	</footer>
</div>

<style>
	@keyframes bridge-flow {
		0% {
			left: 0%;
			opacity: 0;
		}
		20% {
			opacity: 1;
		}
		80% {
			opacity: 1;
		}
		100% {
			left: 100%;
			opacity: 0;
		}
	}
</style>
