<script lang="ts">
	import { fade } from 'svelte/transition';

	let {
		name,
		brand,
		price,
		discountedPrice,
		icon,
		specHighlight
	}: {
		name: string;
		brand: string;
		price: number;
		discountedPrice: number;
		icon: string;
		specHighlight: string;
	} = $props();

	// Derived service-credit conversion amount.
	let pxBurnImpact = $derived(discountedPrice.toLocaleString());
</script>

<div
	class="glass glow-hover group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border-white/5 p-5 transition-all duration-700 hover:border-blue-500/30 sm:min-h-[360px] sm:p-6 md:min-h-[400px] md:rounded-[2.5rem] md:p-8"
	in:fade
>
	<div
		class="absolute -top-12 -right-12 h-40 w-40 bg-blue-500/5 blur-[80px] transition-all group-hover:bg-blue-500/15"
	></div>

	<div class="relative z-10">
		<div class="flex items-start justify-between gap-4">
			<div class="min-w-0">
				<span class="text-[9px] font-black tracking-[0.3em] text-white/30 uppercase italic"
					>{brand}</span
				>
				<h3
					class="mt-1 text-xl leading-none font-bold tracking-tighter text-white uppercase italic sm:text-2xl"
				>
					{name}
				</h3>
				<div
					class="mt-2 inline-block max-w-full rounded-lg bg-blue-500/10 px-3 py-1 text-[8px] font-black tracking-tighter break-words text-blue-400 uppercase"
				>
					{specHighlight}
				</div>
			</div>
			<span
				class="shrink-0 text-4xl transition-transform duration-500 group-hover:scale-110 sm:text-5xl"
				>{icon}</span
			>
		</div>

		<div class="mt-8 space-y-1 sm:mt-10">
			<p class="text-[10px] font-bold tracking-widest text-white/20 uppercase line-through">
				Service value: ${price}
			</p>
			<p class="text-3xl leading-none font-black tracking-tighter text-white italic sm:text-4xl">
				{pxBurnImpact} <span class="text-xs text-blue-400 not-italic">PEX</span>
			</p>
		</div>
	</div>

	<div class="relative z-10 space-y-4">
		<div class="rounded-2xl border border-red-500/10 bg-red-500/5 p-4">
			<div
				class="flex flex-wrap justify-between gap-2 text-[8px] font-black tracking-widest text-red-400/60 uppercase"
			>
				<span>Service Activation Burn</span>
				<span>2%-30% Dynamic</span>
			</div>
			<p class="mt-1 text-[8px] leading-relaxed font-bold text-white/20 uppercase">
				After credits are issued, the approved burn is applied from the Trading Company Wallet, not
				from user balances.
			</p>
		</div>

		<button
			class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[10px] font-black tracking-[0.24em] uppercase transition-all duration-500 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 sm:py-5 sm:tracking-[0.3em]"
		>
			Convert to Credits
		</button>
	</div>
</div>
