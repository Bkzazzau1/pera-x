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

	// HUD cursor (subtle: just for premium feel, not intrusive)
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
	class="glass glow-hover relative flex h-full min-h-140 w-full flex-col overflow-hidden rounded-[3.5rem] border border-white/10 p-6 shadow-[0_0_70px_rgba(0,0,0,0.35)] transition-all duration-700 md:p-10"
>
	<!-- ambient layers (deeper + more premium) -->
	<div
		class="pointer-events-none absolute -top-28 -left-28 h-128 w-lg rounded-full bg-blue-500/12 blur-[140px]"
	></div>
	<div
		class="pointer-events-none absolute -right-32 -bottom-32 h-136 w-136 rounded-full bg-cyan-400/8 blur-[160px]"
	></div>
	<div
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.05)_0%,transparent_55%)]"
	></div>

	<!-- holographic film -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
		style="
			background:
				linear-gradient(120deg, rgba(255,255,255,0.06), transparent 35%, rgba(255,255,255,0.04) 65%, transparent),
				radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05), transparent 55%);
		"
	></div>

	<!-- top shine -->
	<div
		class="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-linear-to-r from-transparent via-white/25 to-transparent"
	></div>

	<!-- corner HUD brackets -->
	<div class="pointer-events-none absolute inset-0 opacity-70">
		<div
			class="absolute top-6 left-6 h-8 w-8 rounded-[10px] border-t border-l border-white/15"
		></div>
		<div
			class="absolute top-6 right-6 h-8 w-8 rounded-[10px] border-t border-r border-white/15"
		></div>
		<div
			class="absolute bottom-6 left-6 h-8 w-8 rounded-[10px] border-b border-l border-white/15"
		></div>
		<div
			class="absolute right-6 bottom-6 h-8 w-8 rounded-[10px] border-r border-b border-white/15"
		></div>
	</div>

	<header
		class="relative z-20 mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-start md:justify-between"
	>
		<div>
			<div class="flex items-center gap-3">
				<div
					class="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,1)]"
				></div>
				<h3 class="text-[10px] font-black tracking-[0.5em] text-white/50 uppercase">
					Supply Contraction Forecast
				</h3>
			</div>
			<p
				class="mt-2 text-3xl leading-none font-black tracking-tighter text-white uppercase italic sm:text-4xl md:text-4xl lg:text-5xl"
			>
				Exponential <span class="font-light text-blue-500 not-italic">Scarcity</span>
			</p>
			<p class="mt-3 text-[10px] font-bold tracking-[0.22em] text-white/30 uppercase">
				HUD render • sovereign curve • predictive burn horizon
			</p>
		</div>

		<div class="md:text-right">
			<div class="text-4xl font-black tracking-tighter text-white/90 italic sm:text-5xl">12M</div>
			<div class="mt-1 text-[9px] font-black tracking-[0.3em] text-blue-400/60 uppercase">
				Projection Horizon
			</div>
		</div>
	</header>

	<!-- CHART ZONE -->
	<button
		type="button"
		class="group relative flex-1 cursor-crosshair overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/10 p-4 md:p-6 focus:outline-none"
		aria-label="Projection chart interactive HUD"
		onmousemove={onMove}
		onmouseleave={onLeave}
		onfocus={() => (showHud = true)}
		onblur={() => (showHud = false)}
		onkeydown={(e) => {
			if (e.key === 'Escape') showHud = false;
		}}
	>
		<!-- Futuristic "floor" perspective grid -->
		<div class="pointer-events-none absolute inset-0 opacity-[0.22]">
			<div
				class="absolute inset-0 mask-[radial-gradient(circle_at_50%_40%,black,transparent_70%)]"
			>
				<div
					class="absolute inset-0 origin-center transform-[perspective(600px)_rotateX(58deg)_translateY(22%)]"
				>
					<div
						class="absolute inset-0 opacity-80"
						style="
							background-image:
								linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
								linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
							background-size: 46px 46px;
						"
					></div>
					<div
						class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.10),transparent_60%)]"
					></div>
				</div>
			</div>
		</div>

		<!-- soft vertical fog / depth -->
		<div
			class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_25%,transparent_70%,rgba(0,0,0,0.45))]"
		></div>

		<svg
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
			class="relative z-10 h-full w-full overflow-visible"
			role="img"
			aria-label="Projection chart interactive HUD"
			tabindex="0"
			onmousemove={onMove}
			onmouseleave={onLeave}
			onfocus={() => (showHud = true)}
			onblur={() => (showHud = false)}
			onkeydown={(e) => {
				if (e.key === 'Escape') showHud = false;
			}}
		>
			<defs>
				<!-- neon area -->
				<linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.22" />
					<stop offset="55%" stop-color="#22d3ee" stop-opacity="0.06" />
					<stop offset="100%" stop-color="#000000" stop-opacity="0" />
				</linearGradient>

				<!-- neon beam -->
				<linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#93c5fd" stop-opacity="0.95" />
					<stop offset="35%" stop-color="#60a5fa" stop-opacity="1" />
					<stop offset="70%" stop-color="#22d3ee" stop-opacity="0.95" />
					<stop offset="100%" stop-color="#34d399" stop-opacity="0.65" />
				</linearGradient>

				<!-- scanning highlight that moves along the line -->
				<linearGradient id="pulseBeam" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="rgba(255,255,255,0)" />
					<stop offset="45%" stop-color="rgba(255,255,255,0)" />
					<stop offset="55%" stop-color="rgba(255,255,255,0.70)" />
					<stop offset="65%" stop-color="rgba(255,255,255,0)" />
					<stop offset="100%" stop-color="rgba(255,255,255,0)" />
				</linearGradient>

				<filter id="glowHard">
					<feGaussianBlur stdDeviation="2.2" result="b" />
					<feMerge>
						<feMergeNode in="b" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>

				<filter id="glowSoft">
					<feGaussianBlur stdDeviation="6" result="b" />
					<feColorMatrix
						in="b"
						type="matrix"
						values="
							1 0 0 0 0
							0 1 0 0 0
							0 0 1 0 0
							0 0 0 0.22 0"
					/>
					<feMerge>
						<feMergeNode />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>

				<!-- subtle noise overlay (rare premium touch) -->
				<filter id="noise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.9"
						numOctaves="2"
						stitchTiles="stitch"
					/>
					<feColorMatrix
						type="matrix"
						values="
							1 0 0 0 0
							0 1 0 0 0
							0 0 1 0 0
							0 0 0 0.12 0"
					/>
				</filter>
			</defs>

			{#if isVisible}
				<!-- AREA -->
				<path d={areaData} fill="url(#areaGradient)" in:fade={{ duration: 1800 }} />

				<!-- BASE UNDER-GLOW (thick) -->
				<path
					d={pathData}
					fill="none"
					stroke="#3b82f6"
					stroke-opacity="0.22"
					stroke-width="3.6"
					stroke-linecap="round"
					filter="url(#glowSoft)"
				/>

				<!-- MAIN BEAM -->
				<path
					d={pathData}
					fill="none"
					stroke="url(#beam)"
					stroke-width="1.15"
					stroke-linecap="round"
					filter="url(#glowHard)"
					style="stroke-dasharray: 1000; stroke-dashoffset: {isVisible
						? 0
						: 1000}; transition: stroke-dashoffset 2.9s cubic-bezier(.2,.9,.1,1);"
				/>

				<!-- ENERGY PULSE LAYER (animated gradient sweep) -->
				<path
					d={pathData}
					fill="none"
					stroke="url(#pulseBeam)"
					stroke-width="2.2"
					stroke-linecap="round"
					class="beam-sweep opacity-70"
				/>

				<!-- PARTICLE NODES + micro scan columns -->
				{#each data as point, i}
					<g
						class="transition-all duration-300"
						style="transform-box: fill-box; transform-origin: center;"
					>
						<!-- tiny guide column -->
						<rect
							x={getX(i) - 0.65}
							y="0"
							width="1.3"
							height="100"
							fill="white"
							class="opacity-0 transition-opacity group-hover:opacity-[0.03]"
						/>

						<!-- outer aura -->
						<circle
							cx={getX(i)}
							cy={getY(point.supply)}
							r="3.2"
							fill="#60a5fa"
							class="opacity-0 blur-[1.2px] transition-opacity duration-300 group-hover:opacity-18"
						/>

						<!-- core node -->
						<circle
							cx={getX(i)}
							cy={getY(point.supply)}
							r="0.85"
							fill="#ffffff"
							class="opacity-25 transition-opacity group-hover:opacity-80"
						/>

						<!-- micro ring -->
						<circle
							cx={getX(i)}
							cy={getY(point.supply)}
							r="1.9"
							fill="none"
							stroke="rgba(59,130,246,0.45)"
							stroke-width="0.25"
							class="opacity-0 transition-opacity duration-300 group-hover:opacity-70"
						/>
					</g>
				{/each}

				<!-- HUD crosshair (only shows on hover/move or focus) -->
				{#if showHud}
					<g class="hud">
						<line
							x1={hudX}
							y1="0"
							x2={hudX}
							y2="100"
							stroke="rgba(255,255,255,0.08)"
							stroke-width="0.22"
						/>
						<line
							x1="0"
							y1={hudY}
							x2="100"
							y2={hudY}
							stroke="rgba(255,255,255,0.08)"
							stroke-width="0.22"
						/>

						<circle
							cx={hudX}
							cy={hudY}
							r="1.7"
							fill="none"
							stroke="rgba(34,211,238,0.28)"
							stroke-width="0.35"
						/>
						<circle cx={hudX} cy={hudY} r="0.75" fill="rgba(255,255,255,0.16)" />

						<!-- small bracket -->
						<path
							d={`M ${hudX - 6} ${hudY - 6} L ${hudX - 2} ${hudY - 6} M ${hudX - 6} ${hudY - 6} L ${hudX - 6} ${hudY - 2}
							 M ${hudX + 6} ${hudY + 6} L ${hudX + 2} ${hudY + 6} M ${hudX + 6} ${hudY + 6} L ${hudX + 6} ${hudY + 2}`}
							fill="none"
							stroke="rgba(255,255,255,0.12)"
							stroke-width="0.35"
						/>
					</g>
				{/if}

				<!-- film grain (rare premium) -->
				<rect x="0" y="0" width="100" height="100" filter="url(#noise)" opacity="0.12" />
			{/if}
		</svg>

		<!-- x labels (minimal + premium) -->
		<div
			class="absolute right-0 bottom-0 left-0 z-20 flex w-full justify-between px-2 pt-5 md:px-3 md:pt-6"
		>
			{#each data as point, idx}
				<span
					class="text-[9px] font-black tracking-tighter text-white/10 uppercase transition-colors group-hover:text-white/40
						{idx % 2 !== 0 ? 'hidden sm:block' : ''}"
				>
					{point.month}
				</span>
			{/each}
		</div>

		<!-- subtle scanline overlay -->
		<div class="pointer-events-none absolute inset-0 opacity-70">
			<div class="scanline"></div>
		</div>
	</button>

	<footer
		class="relative z-20 mt-8 flex flex-col gap-6 border-t border-white/5 pt-8 md:mt-12 md:flex-row md:items-end md:justify-between md:pt-10"
	>
		<div class="space-y-2">
			<span class="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase italic">
				Burn Finality Target
			</span>
			<div class="flex items-baseline gap-3">
				<span class="text-4xl font-black tracking-tighter text-emerald-400 italic sm:text-5xl">
					{minSupply}M
				</span>
				<span class="text-xs font-bold tracking-widest text-white/40 uppercase">
					Circulating Floor
				</span>
			</div>
		</div>

		<div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
			<button
				class="rounded-2xl border border-white/5 bg-white/3 px-6 py-3 text-[10px] font-black tracking-[0.3em] text-white/60 uppercase transition-all hover:bg-white/10 hover:text-white md:px-8 md:py-4"
			>
				View Ledger
			</button>
			<button
				class="rounded-2xl bg-blue-600 px-6 py-3 text-[10px] font-black tracking-[0.3em] text-white uppercase shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-500 active:scale-95 md:px-8 md:py-4"
			>
				Export Audit
			</button>
		</div>
	</footer>

	<!-- subtle scanning line across entire card -->
	<div
		class="pointer-events-none absolute inset-0 top-0 h-[1.5px] w-full animate-[scan_6s_linear_infinite] bg-linear-to-b from-transparent via-white/4 to-transparent"
	></div>
</div>

<style>
	.glow-hover:hover {
		border-color: rgba(59, 130, 246, 0.35);
		box-shadow: 0 0 120px rgba(37, 99, 235, 0.12);
	}

	@keyframes scan {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(700%);
		}
	}

	/* animated beam sweep on the curve */
	.beam-sweep {
		stroke-dasharray: 22 980;
		animation: beam 2.8s linear infinite;
	}
	@keyframes beam {
		from {
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: -1000;
		}
	}

	/* subtle scanline inside chart zone */
	.scanline {
		position: absolute;
		left: -20%;
		top: 0;
		width: 140%;
		height: 2px;
		background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent);
		animation: scanline 5.5s linear infinite;
	}
	@keyframes scanline {
		0% {
			transform: translateY(-10%);
			opacity: 0;
		}
		15% {
			opacity: 0.8;
		}
		70% {
			opacity: 0.6;
		}
		100% {
			transform: translateY(1200%);
			opacity: 0;
		}
	}
</style>
