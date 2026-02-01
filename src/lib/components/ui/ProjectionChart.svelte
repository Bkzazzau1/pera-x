<script lang="ts">
	import { generateProjection } from '$lib/logic/Projections';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const data = generateProjection(156);
	const maxSupply = Math.max(...data.map((d) => d.supply));
	const minSupply = Math.min(...data.map((d) => d.supply));

	const getX = (i: number) => (i / (data.length - 1)) * 100;
	const getY = (val: number) =>
		100 - ((val - minSupply * 0.8) / (maxSupply - minSupply * 0.8)) * 100;

	const pathData = $derived(
		data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.supply)}`).join(' ')
	);
	const areaData = $derived(`${pathData} L 100 100 L 0 100 Z`);

	let isVisible = $state(false);

	// HUD cursor (subtle luxury)
	let hudX = $state(60);
	let hudY = $state(35);
	let showHud = $state(false);

	function onMove(e: MouseEvent) {
		const el = e.currentTarget as HTMLElement;
		const r = el.getBoundingClientRect();
		const x = ((e.clientX - r.left) / r.width) * 100;
		const y = ((e.clientY - r.top) / r.height) * 100;
		hudX = Math.max(0, Math.min(100, x));
		hudY = Math.max(0, Math.min(100, y));
		showHud = true;
	}

	function onLeave() {
		showHud = false;
	}

	onMount(() => (isVisible = true));
</script>

<div
	class="lux-card relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/10 p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-700 md:p-6"
>
	<!-- Luxury ambient glow (lighter + tighter) -->
	<div
		class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-cyan-400/7 blur-[140px]"
	></div>

	<!-- soft vignette -->
	<div
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_30%,rgba(0,0,0,0.55))]"
	></div>

	<!-- micro top shine -->
	<div
		class="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
	></div>

	<!-- header (compact) -->
	<header class="relative z-10 mb-4 flex items-start justify-between gap-4 md:mb-5">
		<div class="min-w-0">
			<div class="flex items-center gap-2">
				<div
					class="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
				></div>
				<h3 class="text-[9px] font-black tracking-[0.42em] text-white/50 uppercase">
					Supply Forecast
				</h3>
			</div>

			<p
				class="mt-2 truncate text-xl font-black tracking-tight text-white uppercase italic sm:text-2xl md:text-3xl"
			>
				Luxury <span class="font-light text-blue-400 not-italic">Scarcity</span>
			</p>

			<p class="mt-1 text-[9px] font-bold tracking-[0.22em] text-white/30 uppercase">
				sovereign curve • burn horizon
			</p>
		</div>

		<div class="shrink-0 text-right">
			<div class="text-2xl font-black tracking-tight text-white/90 italic sm:text-3xl">12M</div>
			<div class="mt-1 text-[8px] font-black tracking-[0.28em] text-blue-400/60 uppercase">
				Horizon
			</div>
		</div>
	</header>

	<!-- CHART ZONE (smaller height) -->
	<button
		type="button"
		class="chart-shell group relative w-full flex-1 overflow-hidden rounded-3xl border border-white/10 bg-black/15 p-3 focus:outline-none md:p-4"
		style="min-height: 260px;"
		aria-label="Projection chart"
		onmousemove={onMove}
		onmouseleave={onLeave}
		onfocus={() => (showHud = true)}
		onblur={() => (showHud = false)}
		onkeydown={(e) => {
			if (e.key === 'Escape') showHud = false;
		}}
	>
		<!-- Minimal luxury grid (not heavy perspective) -->
		<div class="pointer-events-none absolute inset-0 opacity-[0.14]">
			<div
				class="absolute inset-0"
				style="
					background-image:
						linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
						linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px);
					background-size: 46px 46px;
				"
			></div>
		</div>

		<!-- subtle inner gloss -->
		<div
			class="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
			style="background: linear-gradient(120deg, rgba(255,255,255,0.10), transparent 45%, rgba(255,255,255,0.06));"
		></div>

		<svg
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
			class="relative z-10 h-full w-full"
			role="img"
			aria-label="Projection chart"
		>
			<defs>
				<linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.18" />
					<stop offset="55%" stop-color="#22d3ee" stop-opacity="0.06" />
					<stop offset="100%" stop-color="#000000" stop-opacity="0" />
				</linearGradient>

				<linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#93c5fd" stop-opacity="0.85" />
					<stop offset="45%" stop-color="#60a5fa" stop-opacity="1" />
					<stop offset="80%" stop-color="#22d3ee" stop-opacity="0.85" />
					<stop offset="100%" stop-color="#34d399" stop-opacity="0.55" />
				</linearGradient>

				<filter id="glowSoft">
					<feGaussianBlur stdDeviation="4" result="b" />
					<feColorMatrix
						in="b"
						type="matrix"
						values="
							1 0 0 0 0
							0 1 0 0 0
							0 0 1 0 0
							0 0 0 0.18 0"
					/>
					<feMerge>
						<feMergeNode />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>

				<filter id="glowHard">
					<feGaussianBlur stdDeviation="1.8" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			{#if isVisible}
				<path d={areaData} fill="url(#areaGradient)" in:fade={{ duration: 1200 }} />

				<!-- underglow -->
				<path
					d={pathData}
					fill="none"
					stroke="#3b82f6"
					stroke-opacity="0.18"
					stroke-width="2.8"
					stroke-linecap="round"
					filter="url(#glowSoft)"
				/>

				<!-- main line -->
				<path
					d={pathData}
					fill="none"
					stroke="url(#beam)"
					stroke-width="1.05"
					stroke-linecap="round"
					filter="url(#glowHard)"
					style="stroke-dasharray: 1000; stroke-dashoffset: {isVisible
						? 0
						: 1000}; transition: stroke-dashoffset 2.2s cubic-bezier(.2,.9,.1,1);"
				/>

				<!-- minimal nodes -->
				{#each data as point, i}
					<g>
						<circle
							cx={getX(i)}
							cy={getY(point.supply)}
							r="0.75"
							fill="rgba(255,255,255,0.22)"
							class="transition-opacity duration-300 group-hover:opacity-80"
						/>
						<circle
							cx={getX(i)}
							cy={getY(point.supply)}
							r="1.8"
							fill="none"
							stroke="rgba(59,130,246,0.30)"
							stroke-width="0.22"
							class="opacity-0 transition-opacity duration-300 group-hover:opacity-70"
						/>
					</g>
				{/each}

				{#if showHud}
					<g class="hud">
						<line
							x1={hudX}
							y1="0"
							x2={hudX}
							y2="100"
							stroke="rgba(255,255,255,0.07)"
							stroke-width="0.2"
						/>
						<line
							x1="0"
							y1={hudY}
							x2="100"
							y2={hudY}
							stroke="rgba(255,255,255,0.07)"
							stroke-width="0.2"
						/>
						<circle
							cx={hudX}
							cy={hudY}
							r="1.4"
							fill="none"
							stroke="rgba(34,211,238,0.22)"
							stroke-width="0.32"
						/>
						<circle cx={hudX} cy={hudY} r="0.6" fill="rgba(255,255,255,0.14)" />
					</g>
				{/if}
			{/if}
		</svg>

		<!-- x labels (compact, every other on mobile) -->
		<div class="absolute inset-x-0 bottom-2 z-10 flex justify-between px-2">
			{#each data as point, idx}
				<span
					class="text-[8px] font-black tracking-tight text-white/12 uppercase transition-colors group-hover:text-white/35
					{idx % 2 !== 0 ? 'hidden sm:block' : ''}"
				>
					{point.month}
				</span>
			{/each}
		</div>

		<!-- ultra subtle scanline -->
		<div class="pointer-events-none absolute inset-0 opacity-60">
			<div class="scanline"></div>
		</div>
	</button>

	<!-- Footer (compact) -->
	<footer
		class="relative z-10 mt-4 flex items-end justify-between gap-4 border-t border-white/5 pt-4 md:mt-5"
	>
		<div class="min-w-0">
			<span class="text-[9px] font-black tracking-[0.32em] text-white/25 uppercase italic">
				Circulating Floor
			</span>
			<div class="mt-1 flex items-baseline gap-2">
				<span class="text-2xl font-black tracking-tight text-emerald-400 italic sm:text-3xl">
					{minSupply}M
				</span>
				<span class="text-[9px] font-bold tracking-widest text-white/35 uppercase"> target </span>
			</div>
		</div>

		<div class="flex items-center gap-2">
			<button
				class="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-[9px] font-black tracking-[0.28em] text-white/60 uppercase transition-all hover:bg-white/10 hover:text-white active:scale-95"
			>
				Ledger
			</button>
			<button
				class="rounded-2xl border border-blue-400/20 bg-blue-500/15 px-4 py-2 text-[9px] font-black tracking-[0.28em] text-blue-300 uppercase transition-all hover:bg-blue-500/22 active:scale-95"
			>
				Export
			</button>
		</div>
	</footer>

	<!-- soft moving sheen (luxury) -->
	<div class="pointer-events-none absolute inset-0 opacity-40">
		<div class="sheen"></div>
	</div>
</div>

<style>
	/* luxury glass (clean, not loud) */
	.lux-card {
		background: rgba(255, 255, 255, 0.025);
	}

	.chart-shell {
		background: rgba(0, 0, 0, 0.22);
	}

	@keyframes scanline {
		0% {
			transform: translateY(-20%);
			opacity: 0;
		}
		10% {
			opacity: 0.7;
		}
		60% {
			opacity: 0.35;
		}
		100% {
			transform: translateY(520%);
			opacity: 0;
		}
	}

	.scanline {
		position: absolute;
		left: -20%;
		top: 0;
		width: 140%;
		height: 2px;
		background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05), transparent);
		animation: scanline 6.5s linear infinite;
	}

	@keyframes sheen {
		from {
			transform: translateX(-120%);
		}
		to {
			transform: translateX(120%);
		}
	}

	.sheen {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 35%;
		background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.04), transparent);
		animation: sheen 10s ease-in-out infinite;
	}
</style>
