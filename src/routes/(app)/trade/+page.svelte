<script lang="ts">
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { fetchParityMetrics } from '$lib/logic/DEXParity';
	import { fade, fly } from 'svelte/transition';

	// Real-time market data retrieval
	const venues = fetchParityMetrics();
</script>

<PlanetScene />
<ParityMonitor />

<div class="relative z-10 min-h-screen bg-transparent p-8 pb-32 lg:p-16" in:fade>
	<header class="mb-12" in:fly={{ y: -20, duration: 800 }}>
		<h1 class="text-4xl font-black tracking-tighter text-white uppercase italic">
			Market <span class="font-light text-blue-500 not-italic">Radar</span>
		</h1>
		<p class="mt-4 max-w-2xl text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
			Aggregated liquidity for $5B+ Capital Efficiency • Ver. 2026.V
		</p>
	</header>

	<div class="grid gap-8 lg:grid-cols-3">
		<div
			class="glass rounded-[3rem] border-white/10 p-10 shadow-2xl backdrop-blur-3xl lg:col-span-2"
		>
			<div class="mb-8 flex items-center justify-between">
				<div class="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">
					Verified Venues
				</div>
				<div
					class="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1"
				>
					<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
					<span class="text-[8px] font-black text-emerald-400 uppercase">Live Audit</span>
				</div>
			</div>

			<div class="grid gap-6 md:grid-cols-2">
				{#each venues as venue}
					<a
						class="glass group relative overflow-hidden rounded-[2.5rem] border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30"
						href="https://app.uniswap.org/#/swap?outputCurrency=0xPeraXAddress"
						target="_blank"
						rel="noreferrer"
					>
						<div
							class="absolute -top-10 -right-10 h-32 w-32 rounded-full {venue.status === 'OPTIMAL'
								? 'bg-emerald-500/5'
								: 'bg-amber-500/5'} opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
						></div>

						<div class="relative z-10">
							<div class="mb-4 flex items-center justify-between">
								<span class="text-xl font-black text-white">{venue.provider.split(' ')[0]}</span>
								<span class="text-[9px] font-bold tracking-widest text-white/20 uppercase"
									>{venue.pair}</span
								>
							</div>

							<div class="space-y-4">
								<div class="flex items-center justify-between">
									<span class="text-[9px] font-black text-white/30 uppercase">Rate</span>
									<span class="text-lg font-bold text-blue-400">${venue.price.toFixed(4)}</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-[9px] font-black text-white/30 uppercase">Liquidity</span>
									<span class="text-xs font-bold text-white/80">{venue.liquidity}M USD</span>
								</div>
							</div>

							<button
								class="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-[9px] font-black tracking-widest text-white/40 uppercase transition-all group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white"
							>
								Execute Externally
							</button>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<div class="glass flex flex-col justify-between rounded-[3rem] border-white/10 p-10 shadow-2xl">
			<div>
				<div
					class="mb-8 text-center text-[10px] font-black tracking-[0.3em] text-white/40 uppercase"
				>
					Protocol Safety
				</div>
				<ul class="space-y-6">
					{#each [{ label: 'Contract Integrity', desc: '0x...60a5 - Verify before swap' }, { label: 'Slippage Guard', desc: 'Prefer venues with >$500M depth' }, { label: 'Anti-Phishing', desc: 'Always use official protocol portals' }] as rule}
						<li class="flex gap-4">
							<div
								class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10"
							>
								<svg
									class="h-4 w-4 text-blue-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 20l9 2 9-2-1.382-14.016z"
									/>
								</svg>
							</div>
							<div>
								<div class="text-xs font-bold text-white/80">{rule.label}</div>
								<div
									class="mt-1 text-[9px] leading-relaxed tracking-widest text-white/30 uppercase"
								>
									{rule.desc}
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>

			<div class="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
				<div class="mb-2 text-[9px] font-black tracking-widest text-amber-500 uppercase">
					Notice
				</div>
				<p class="text-[9px] leading-relaxed font-bold text-amber-500/60 uppercase">
					Trading on external DEXs does not trigger the <span class="text-white"
						>Burn-Velocity Paradox</span
					>. For deflationary impact, use the
					<a href="/swap" class="text-amber-500 underline decoration-2">Native Portal</a>.
				</p>
			</div>
		</div>
	</div>
</div>
