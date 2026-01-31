<script lang="ts">
	import { generateProjection } from '$lib/logic/Projections';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const data = generateProjection(156);
	const maxSupply = Math.max(...data.map((d) => d.supply));
	const minSupply = Math.min(...data.map((d) => d.supply));

	// UI Coordinate Logic
	const getX = (i: number) => (i / (data.length - 1)) * 100;
	const getY = (val: number) =>
		100 - ((val - minSupply * 0.8) / (maxSupply - minSupply * 0.8)) * 100;

	// SVG Path Generation for the "Sovereign Curve"
	const pathData = $derived(
		data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.supply)}`).join(' ')
	);

	const areaData = $derived(`${pathData} L 100 100 L 0 100 Z`);

	let isVisible = $state(false);
	onMount(() => (isVisible = true));
</script>

<div
	class="glass glow-hover relative flex h-full min-h-[35rem] w-full flex-col overflow-hidden rounded-[3.5rem] border border-white/10 p-10 shadow-[0_0_50px_rgba(0,0,0,0.2)] transition-all duration-700"
>
	<div class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"></div>
	<div
		class="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]"
	></div>

	<header class="relative z-20 mb-12 flex items-start justify-between">
		<div>
			<div class="flex items-center gap-3">
				<div
					class="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]"
				></div>
				<h3 class="text-xs font-black tracking-[0.5em] text-white/50 uppercase">
					Supply Contraction Forecast
				</h3>
			</div>
			<p class="mt-2 text-4xl leading-none font-black tracking-tighter text-white uppercase italic">
				Exponential <span class="font-light text-blue-500 not-italic">Scarcity</span>
			</p>
		</div>
		<div class="text-right">
			<div class="text-5xl font-black tracking-tighter text-white/90 italic">12M</div>
			<div class="mt-1 text-[9px] font-black tracking-[0.3em] text-blue-400/60 uppercase">
				Projection Horizon
			</div>
		</div>
	</header>

	<div class="group relative flex-1 cursor-crosshair">
		<svg viewBox="0 0 100 100" preserveAspectRatio="none" class="h-full w-full overflow-visible">
			<defs>
				<linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
					<stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
				</linearGradient>
				<filter id="glow">
					<feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
					<feMerge>
						<feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			{#if isVisible}
				<path d={areaData} fill="url(#areaGradient)" in:fade={{ duration: 2000 }} />

				<path
					d={pathData}
					fill="none"
					stroke="#60a5fa"
					stroke-width="0.8"
					stroke-linecap="round"
					filter="url(#glow)"
					style="stroke-dasharray: 1000; stroke-dashoffset: {isVisible
						? 0
						: 1000}; transition: stroke-dashoffset 3s ease-out;"
				/>

				{#each data as point, i}
					<g
						class="transition-all duration-300"
						style="transform-box: fill-box; transform-origin: center;"
					>
						<circle
							cx={getX(i)}
							cy={getY(point.supply)}
							r="0.6"
							fill="#fff"
							class="opacity-20 transition-opacity group-hover:opacity-100"
						/>
						<rect
							x={getX(i) - 1}
							y="0"
							width="2"
							height="100"
							fill="white"
							class="opacity-0 transition-opacity group-hover:opacity-[0.02]"
						/>
					</g>
				{/each}
			{/if}
		</svg>

		<div class="absolute bottom-0 flex w-full justify-between pt-6">
			{#each data as point}
				<span
					class="text-[9px] font-black tracking-tighter text-white/10 uppercase transition-colors group-hover:text-white/40"
				>
					{point.month}
				</span>
			{/each}
		</div>
	</div>

	<footer class="relative z-20 mt-12 flex items-end justify-between border-t border-white/5 pt-10">
		<div class="space-y-2">
			<span class="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase italic"
				>Burn Finality Target</span
			>
			<div class="flex items-baseline gap-3">
				<span class="text-5xl font-black tracking-tighter text-emerald-400 italic"
					>{minSupply}M</span
				>
				<span class="text-xs font-bold tracking-widest text-white/40 uppercase"
					>Circulating Floor</span
				>
			</div>
		</div>

		<div class="flex gap-4">
			<button
				class="rounded-2xl border border-white/5 bg-white/[0.03] px-8 py-4 text-[10px] font-black tracking-[0.3em] text-white/60 uppercase transition-all hover:bg-white/10 hover:text-white"
			>
				View Ledger
			</button>
			<button
				class="rounded-2xl bg-blue-600 px-8 py-4 text-[10px] font-black tracking-[0.3em] text-white uppercase shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-500 active:scale-95"
			>
				Export Audit
			</button>
		</div>
	</footer>
</div>

<style>
	.glow-hover:hover {
		border-color: rgba(59, 130, 246, 0.3);
		box-shadow: 0 0 80px rgba(37, 99, 235, 0.1);
	}
</style>
