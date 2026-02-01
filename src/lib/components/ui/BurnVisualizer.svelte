<script lang="ts">
	export let rate: number = 7.5; // The monthly burn target
</script>

<div
	class="glass glow-hover group relative h-full min-h-45 w-full overflow-hidden rounded-[2.5rem] border-white/5 transition-all duration-700 md:min-h-55"
>
	<svg
		class="absolute inset-0 h-full w-full opacity-30 transition-opacity duration-1000 group-hover:opacity-50"
	>
		<filter id="burn-filter">
			<feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="5">
				<animate
					attributeName="baseFrequency"
					dur="25s"
					values="0.015;0.025;0.015"
					repeatCount="indefinite"
				/>
			</feTurbulence>
			<feDisplacementMap in="SourceGraphic" scale="25" />
		</filter>
		<rect width="100%" height="100%" fill="url(#burn-grad)" filter="url(#burn-filter)" />
		<defs>
			<linearGradient id="burn-grad" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color="#3b82f6" stop-opacity="0" />
				<stop offset="50%" stop-color="#60a5fa" stop-opacity="0.6" />
				<stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
			</linearGradient>
		</defs>
	</svg>

	<div class="relative z-10 flex h-full items-center justify-between px-6 md:px-10">
		<div class="flex flex-col">
			<div class="mb-1 flex items-center gap-2">
				<div class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400"></div>
				<span class="text-[10px] font-black tracking-[0.4em] text-blue-400/60 uppercase">
					Monetary Contraction Engine
				</span>
			</div>
			<div class="text-3xl font-black tracking-tighter text-white md:text-4xl">
				Target: <span class="text-blue-400">{rate}%</span>
				<span class="ml-2 text-xs font-light tracking-[0.2em] text-white/30 uppercase">
					Burn / Epoch
				</span>
			</div>
		</div>

		<div class="flex flex-col items-end gap-2">
			<div
				class="flex items-center gap-3 rounded-xl border border-blue-400/20 bg-blue-400/10 px-4 py-2 shadow-[0_0_25px_rgba(59,130,246,0.2)]"
			>
				<div class="h-2 w-2 animate-ping rounded-full bg-blue-400"></div>
				<span class="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">
					Live Audit
				</span>
			</div>
			<span class="text-[8px] font-bold tracking-[0.3em] text-white/20 uppercase">
				Network Velocity: Optimized
			</span>
		</div>
	</div>

	<div
		class="absolute inset-0 top-0 h-[1.5px] w-full animate-[scan_5s_linear_infinite] bg-linear-to-b from-transparent via-white/3 to-transparent"
	></div>
</div>

<style>
	@keyframes scan {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(600%);
		}
	}
</style>
