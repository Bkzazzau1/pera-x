<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="relative min-h-screen bg-transparent">
	<div class="perax-bg pointer-events-none fixed inset-0 -z-10 opacity-30"></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-8">
		<header class="flex flex-wrap items-center justify-between gap-6">
			<div class="group flex items-center gap-4">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-400/10 font-black text-blue-400 backdrop-blur-xl transition-transform duration-500 group-hover:scale-110"
				>
					PX
				</div>
				<div>
					<div class="text-xl font-black tracking-tighter uppercase italic">Pera-X</div>
					<div class="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
						Consumer Monetary System
					</div>
				</div>
			</div>

			<nav class="hidden items-center gap-3 lg:flex">
				{#each ['dashboard', 'trade', 'redeem', 'analytics'] as path}
					<a
						class="glass glow-hover rounded-full px-6 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all
                        {$page.url.pathname.includes(path)
							? 'border-blue-400/40 bg-blue-400/5 text-blue-400'
							: 'text-white/60'}"
						href="/{path}"
					>
						{path}
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-4">
				<div
					class="hidden items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-2 sm:flex"
				>
					<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400"></span>
					<span class="text-[9px] font-black tracking-widest text-white/40 uppercase"
						>Mainnet v2026</span
					>
				</div>
				<button
					class="glass glow-hover rounded-2xl border-blue-400/20 px-6 py-2.5 text-[10px] font-black tracking-widest text-blue-400 uppercase transition-all hover:bg-blue-400/10"
				>
					Connect
				</button>
			</div>
		</header>

		<main class="mt-12">
			<slot />
		</main>
	</div>
</div>

<style>
	/* Forces transparency throughout the app router levels 
       to prevent hidden layout walls.
    */
	:global(.perax-bg) {
		background:
			radial-gradient(circle at top right, rgba(14, 165, 233, 0.1), transparent 60%),
			radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.05), transparent 50%) !important;
	}
</style>
