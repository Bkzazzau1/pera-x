<script lang="ts">
	import { resolve } from '$app/paths';
	import ContractVerification from '$lib/components/ui/ContractVerification.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { fade } from 'svelte/transition';
</script>

<PlanetScene />

<section class="relative z-10 min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8" in:fade={{ duration: 700 }}>
	<div class="mx-auto flex max-w-7xl flex-col gap-8 pt-6 md:pt-10">
		<div class="glass relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 shadow-2xl backdrop-blur-3xl md:rounded-[4rem] md:p-14">
			<div class="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-cyan-400/15 blur-[110px]"></div>
			<div class="relative z-10">
				<div class="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-[9px] font-black tracking-[0.42em] text-cyan-300 uppercase">
					Contract Layer
				</div>
				<h1 class="max-w-5xl text-5xl leading-[0.92] font-black tracking-tighter text-white uppercase italic sm:text-6xl md:text-8xl">
					Pera-X Smart Contract <span class="text-cyan-300">Verification.</span>
				</h1>
				<p class="mt-8 max-w-3xl text-base leading-relaxed font-light text-white/45 sm:text-lg">
					This page makes the current Solana/Anchor contract status clear for users and investors before interacting with PEX, Credits, utility payments, burns, or market-policy controls.
				</p>
				<div class="mt-10 flex flex-col gap-4 sm:flex-row">
					<a href={resolve('/dashboard')} class="rounded-3xl bg-white px-8 py-5 text-center text-xs font-black tracking-[0.22em] text-black uppercase transition hover:scale-105 active:scale-95">
						Back to Dashboard
					</a>
					<a href={resolve('/utility')} class="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 px-8 py-5 text-center text-xs font-black tracking-[0.22em] text-cyan-200 uppercase transition hover:bg-cyan-400 hover:text-black active:scale-95">
						View Utility Bridge
					</a>
				</div>
			</div>
		</div>

		<ContractVerification />
	</div>
</section>
