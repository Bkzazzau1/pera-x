<script lang="ts">
	import HeartbeatMini from '$lib/components/ui/HeartbeatMini.svelte';
	import { fly } from 'svelte/transition';

	// Svelte 5 Props
	let {
		label,
		value,
		hint = '',
		variant = 'default',

		// ✅ heartbeat options (optional)
		heartbeat = false,
		heartbeatLabel = 'LIVE',
		heartbeatHeight = 22,
		heartbeatSpeed = 2.8,
		heartbeatIntensity = 'soft'
	} = $props<{
		label: string;
		value: string | number;
		hint?: string;
		variant?: 'default' | 'neon';

		heartbeat?: boolean;
		heartbeatLabel?: string;
		heartbeatHeight?: number;
		heartbeatSpeed?: number;
		heartbeatIntensity?: 'soft' | 'normal' | 'strong';
	}>();
</script>

<div
	class="glass glow-hover group relative flex min-h-45 flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-700 ease-out md:min-h-55 md:rounded-4xl md:p-7"
	in:fly={{ y: 20, duration: 800 }}
>
	<div
		class="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px] transition-all duration-1000 group-hover:bg-blue-400/20"
	></div>
	<div
		class="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/5 blur-[60px]"
	></div>

	<div
		class="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent"
	></div>

	<div class="relative z-10">
		<div class="flex items-start justify-between gap-4">
			<div class="flex-1 space-y-1 overflow-hidden">
				<div class="flex items-center gap-2">
					<span class="h-1 w-1 animate-pulse rounded-full bg-blue-400"></span>
					<span
						class="truncate text-[8px] font-black tracking-widest text-white/30 uppercase md:text-[9px] md:tracking-[0.4em]"
					>
						{label}
					</span>
				</div>

				<!-- value -->
				<div
					class={'mt-3 text-2xl leading-none font-black tracking-tighter whitespace-nowrap tabular-nums transition-all duration-500 md:mt-4 md:text-4xl ' +
						(variant === 'neon'
							? 'bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(96,165,250,0.4)]'
							: 'text-white/90')}
				>
					{value}
				</div>

				<!-- ✅ heartbeat line (tiny, futuristic, phone friendly) -->
				{#if heartbeat}
					<div class="mt-3 md:mt-4">
						<HeartbeatMini
							height={heartbeatHeight}
							speed={heartbeatSpeed}
							intensity={heartbeatIntensity}
							label={heartbeatLabel}
						/>
					</div>
				{/if}
			</div>

			<div
				class="relative hidden shrink-0 transition-transform duration-500 group-hover:rotate-12 sm:block"
			>
				<div
					class="absolute inset-0 bg-blue-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100"
				></div>
				<div
					class="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-2xl md:h-12 md:w-12 md:rounded-2xl"
				>
					<div
						class="absolute inset-0 -translate-x-full bg-linear-to-tr from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
					></div>
					<span
						class="font-mono text-[7px] font-bold tracking-widest text-white/20 uppercase md:text-[8px]"
					>
						{label.slice(0, 3)}
					</span>
				</div>
			</div>
		</div>
	</div>

	{#if hint}
		<div class="relative z-10 mt-4 border-t border-white/5 pt-4 md:mt-6 md:pt-5">
			<div class="flex items-center justify-between gap-2">
				<span
					class="truncate text-[8px] font-bold tracking-widest text-white/20 uppercase italic md:text-[10px] md:tracking-[0.2em]"
				>
					{hint}
				</span>
				<svg
					class="h-3 w-3 shrink-0 text-white/10 transition-colors group-hover:text-blue-400/40"
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
			</div>
		</div>
	{/if}
</div>

<style>
	:global(.tabular-nums) {
		font-variant-numeric: tabular-nums;
	}
</style>
