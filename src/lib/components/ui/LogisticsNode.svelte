<script lang="ts">
	import { fly } from 'svelte/transition';

	// Real-time service-credit metrics from the whitepaper utility areas.
	const logisticsData = [
		{ hub: 'AI Credit Router', status: 'Crediting', load: '82%', transit: 1420 },
		{ hub: 'Voice + SMS Providers', status: 'Settling', load: '94%', transit: 3105 },
		{ hub: 'Utility Bill Partners', status: 'Verified', load: '64%', transit: 725 }
	];
</script>

<div
	class="glass glow-hover relative overflow-hidden rounded-3xl border border-white/10 p-5 shadow-2xl backdrop-blur-3xl transition-all duration-700 sm:p-6 md:rounded-[3.5rem] md:p-10"
>
	<div class="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/5 blur-[100px]"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.03),transparent_70%)]"
	></div>

	<header
		class="relative z-10 mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between md:mb-10"
	>
		<div>
			<div class="flex items-center gap-3">
				<div
					class="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,1)]"
				></div>
				<h3 class="text-xs font-black tracking-[0.5em] text-white/40 uppercase italic">
					Service Credit Node
				</h3>
			</div>
			<p
				class="mt-2 text-2xl leading-none font-black tracking-tighter text-white uppercase italic md:text-3xl"
			>
				Token-to-Credit <span class="font-light text-blue-500 not-italic">Activation Audit</span>
			</p>
		</div>
		<div class="text-left sm:text-right">
			<span
				class="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[8px] font-black tracking-[0.3em] text-white/60 uppercase"
				>Node Ver: 2026.4</span
			>
		</div>
	</header>

	<div class="relative z-10 space-y-5">
		{#each logisticsData as item, i (item.hub)}
			<div
				class="group flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/1 p-4 transition-all hover:bg-white/3 sm:flex-row sm:items-center sm:justify-between sm:p-5"
				in:fly={{ x: -20, delay: i * 150 }}
			>
				<div class="flex min-w-0 items-center gap-4 sm:gap-5">
					<div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
						<div
							class="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 transition-opacity group-hover:opacity-100"
						></div>
						<svg
							class="h-5 w-5 text-white/20 transition-colors group-hover:text-sky-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
					</div>

					<div class="flex flex-col">
						<span class="text-[11px] font-black tracking-widest text-white/80 uppercase"
							>{item.hub}</span
						>
						<span class="mt-0.5 text-[8px] font-bold tracking-tighter text-white/20 uppercase"
							>Provider Load: {item.load}</span
						>
					</div>
				</div>

				<div
					class="flex flex-row items-center justify-between gap-3 sm:flex-col sm:items-end sm:gap-1"
				>
					<span class="text-[9px] font-black tracking-widest text-sky-400 uppercase italic"
						>{item.status}</span
					>
					<span class="text-[10px] font-bold text-white/10 uppercase tabular-nums"
						>+{item.transit} Credits Issued</span
					>
				</div>
			</div>
		{/each}
	</div>

	<footer
		class="relative z-10 mt-8 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between md:pt-8"
	>
		<div class="flex flex-col">
			<span class="text-[8px] font-black tracking-widest text-white/20 uppercase"
				>Global Aggregate</span
			>
			<span class="text-xl font-black tracking-tighter text-white italic"
				>4,525 <span class="text-[10px] text-sky-400/50">Credits</span></span
			>
		</div>
		<button
			class="glass rounded-xl border-white/10 px-5 py-2.5 text-[9px] font-black tracking-widest text-white/60 uppercase transition-all hover:text-white"
		>
			Usage Dashboard
		</button>
	</footer>
</div>
