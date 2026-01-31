<script lang="ts">
	import { fly } from 'svelte/transition';
	export let label: string;
	export let value: string;
	export let hint: string = '';
	export let variant: 'default' | 'neon' = 'default';
</script>

<div
	class="glass glow-hover group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[2.5rem] p-7 transition-all duration-700 ease-out"
	in:fly={{ y: 20, duration: 800 }}
>
	<div
		class="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px] transition-all duration-1000 group-hover:bg-blue-400/20"
	></div>
	<div
		class="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/5 blur-[60px]"
	></div>

	<div
		class="pointer-events-none absolute inset-0 bg-linear-to-br from-white/[0.05] via-transparent to-transparent"
	></div>

	<div class="relative z-10">
		<div class="flex items-start justify-between gap-4">
			<div class="space-y-1">
				<div class="flex items-center gap-2">
					<span class="h-1 w-1 animate-pulse rounded-full bg-blue-400"></span>
					<span class="text-[9px] font-black tracking-[0.4em] text-white/30 uppercase">{label}</span
					>
				</div>

				<div
					class={'mt-4 text-4xl font-black tracking-tighter transition-all duration-500 ' +
						(variant === 'neon'
							? 'bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(96,165,250,0.4)]'
							: 'text-white/90')}
				>
					{value}
				</div>
			</div>

			<div class="relative transition-transform duration-500 group-hover:rotate-12">
				<div
					class="absolute inset-0 bg-blue-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100"
				></div>
				<div
					class="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl"
				>
					<div
						class="absolute inset-0 translate-x-[-100%] bg-linear-to-tr from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"
					></div>
					<span class="font-mono text-[8px] font-bold tracking-widest text-white/20 uppercase"
						>{label.slice(0, 3)}</span
					>
				</div>
			</div>
		</div>
	</div>

	{#if hint}
		<div class="relative z-10 mt-6 border-t border-white/5 pt-5">
			<div class="flex items-center justify-between">
				<span class="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">{hint}</span>
				<svg
					class="h-3 w-3 text-white/10 transition-colors group-hover:text-blue-400/40"
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
