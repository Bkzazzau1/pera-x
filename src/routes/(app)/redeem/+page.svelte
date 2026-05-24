<script lang="ts">
	import GadgetCard from '$lib/components/ui/GadgetCard.svelte';
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { SERVICE_CREDITS, calculatePEXCost } from '$lib/logic/Marketplace';
	import { getEligibleTier } from '$lib/logic/PolicyEngine';
	import { fade, fly } from 'svelte/transition';

	// Current PEX market price used for dynamic utility pricing.
	const pexSpot = 0.00018;
	const holdingDays = 38;

	// Svelte 5 Runes: Parse string-based discount to satisfy arithmetic types
	let activeTier = $derived(getEligibleTier(holdingDays));
	let discountMult = $derived(activeTier ? parseFloat(activeTier.discount) / 100 : 0);
</script>

<PlanetScene />
<ParityMonitor />

<div class="relative z-10 min-h-screen bg-transparent p-6 pb-32 md:p-12" in:fade>
	<header class="mb-16 max-w-6xl" in:fly={{ y: -20, duration: 800 }}>
		<h1 class="mb-4 text-5xl font-black tracking-tighter text-white uppercase italic">
			Service <span class="font-light text-blue-500 not-italic">Credits</span>
		</h1>
		<div class="flex flex-wrap items-center gap-6">
			<p
				class="max-w-lg text-[11px] leading-relaxed font-bold tracking-widest text-white/40 uppercase"
			>
				Convert Pera-X into AI credits, call time, SMS units, website builder credits, or utility
				payment credits.
			</p>

			<div class="glass flex items-center gap-3 rounded-2xl border-blue-400/20 px-6 py-3 shadow-lg">
				<div class="flex flex-col">
					<span class="text-[8px] font-black tracking-[0.2em] text-white/30 uppercase">Status</span>
					<span class="text-xs font-black tracking-tighter text-blue-400 uppercase">
						{activeTier?.label || 'No Discount Yet'}
					</span>
				</div>
				<div class="h-8 w-px bg-white/10"></div>
				<div class="flex flex-col">
					<span class="text-[8px] font-black tracking-[0.2em] text-white/30 uppercase"
						>Privilege</span
					>
					<span class="text-xs font-black tracking-tighter text-emerald-400 uppercase">
						{activeTier?.discount || 0} Bill Discount
					</span>
				</div>
			</div>
		</div>
	</header>

	<main class="grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
		{#each SERVICE_CREDITS as gadget, i (gadget.id)}
			<div in:fly={{ y: 30, delay: i * 100, duration: 800 }}>
				<GadgetCard
					name={gadget.name}
					brand={gadget.brand}
					price={gadget.marketPrice}
					discountedPrice={calculatePEXCost(gadget.marketPrice, pexSpot, discountMult)}
					icon={gadget.image}
					specHighlight={gadget.specHighlight}
				/>
			</div>
		{/each}
	</main>
</div>
