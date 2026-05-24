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
	class="glass glow-hover group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[2.5rem] border-white/5 p-8 transition-all duration-700 hover:border-blue-500/30"
	in:fade
>
	<div
		class="absolute -top-12 -right-12 h-40 w-40 bg-blue-500/5 blur-[80px] transition-all group-hover:bg-blue-500/15"
	></div>

	<div class="relative z-10">
		<div class="flex items-start justify-between">
			<div>
				<span class="text-[9px] font-black tracking-[0.3em] text-white/30 uppercase italic"
					>{brand}</span
				>
				<h3 class="mt-1 text-2xl font-bold tracking-tighter text-white uppercase italic">{name}</h3>
				<div
					class="mt-2 inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-[8px] font-black tracking-tighter text-blue-400 uppercase"
				>
					{specHighlight}
				</div>
			</div>
			<span class="text-5xl transition-transform duration-500 group-hover:scale-110">{icon}</span>
		</div>

		<div class="mt-10 space-y-1">
			<p class="text-[10px] font-bold tracking-widest text-white/20 uppercase line-through">
				Service value: ${price}
			</p>
			<p class="text-4xl font-black tracking-tighter text-white italic">
				{pxBurnImpact} <span class="text-xs text-blue-400 not-italic">PEX</span>
			</p>
		</div>
	</div>

	<div class="relative z-10 space-y-4">
		<div class="rounded-2xl border border-red-500/10 bg-red-500/5 p-4">
			<div
				class="flex justify-between text-[8px] font-black tracking-widest text-red-400/60 uppercase"
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
			class="w-full rounded-2xl border border-white/10 bg-white/5 py-5 text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
		>
			Convert to Credits
		</button>
	</div>
</div>
