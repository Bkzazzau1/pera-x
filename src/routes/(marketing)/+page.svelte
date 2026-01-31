<script lang="ts">
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let visible = false;
	onMount(() => (visible = true));

	const visionPoints = [
		{
			t: '50% Purchase Power',
			d: 'Strategic staking of $PX unlocks institutional-grade discounts on global electronics.',
			icon: '⚡'
		},
		{
			t: 'Atomic Deflation',
			d: 'The Central Bank Engine incinerates token supply upon every physical redemption.',
			icon: '🔥'
		},
		{
			t: 'Sovereign Logistics',
			d: 'Verified hardware delivery from global tech hubs directly to your vault.',
			icon: '📦'
		}
	];

	const milestones = [
		{
			q: 'Q1 2026',
			t: 'Consumer Tech Genesis',
			d: 'Activation of the Pera-X Core. iPhones, MacBooks, and peripherals available for immediate PX redemption.',
			status: 'Live',
			side: 'left'
		},
		{
			q: 'Q3 2026',
			t: 'The Mobility Epoch',
			d: 'Strategic partnership with EV manufacturers. PX holders gain access to high-tier mobility redemptions.',
			status: 'Pending',
			side: 'right'
		},
		{
			q: 'Q1 2027',
			t: 'Sovereign Real Estate',
			d: 'Implementation of RWA (Real World Asset) tokens to secure global property equity.',
			status: 'Draft',
			side: 'left'
		}
	];

	const vendors = [
		{
			name: 'Apple Cluster',
			icon: '🍎',
			desc: 'iPhone 17 Pro, MacBook M5, Ultra 3 Watch, and Studio peripherals.',
			tier: 'Tier 1-4'
		},
		{
			name: 'Samsung Core',
			icon: '💎',
			desc: 'Galaxy S26 Ultra, Z Fold 8, and high-fidelity monitor ranges.',
			tier: 'Global Parity'
		},
		{
			name: 'Specialist Hub',
			icon: '🛰️',
			desc: 'Sony Alpha optics, DJI flight systems, and high-performance gaming hardware.',
			tier: 'Diversified'
		}
	];

	const allocation = [
		{ cat: 'Public Liquidity & Market', alloc: '25%', color: 'bg-sky-500' },
		{ cat: 'Treasury & Liquidity Mgmt', alloc: '20%', color: 'bg-blue-600' },
		{ cat: 'Team & Strategic Partners', alloc: '15%', color: 'bg-indigo-500' },
		{ cat: 'Investors & Growth', alloc: '30%', color: 'bg-purple-500' },
		{ cat: 'Strategic Reserves', alloc: '10%', color: 'bg-emerald-500' }
	];
</script>

<div class="fixed inset-0 z-0 opacity-40">
	<PlanetScene />
</div>

<div
	class="perax-bg relative z-10 min-h-screen overflow-x-hidden text-white selection:bg-sky-500/30"
>
	<nav
		class="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/5 px-8 py-6 backdrop-blur-2xl"
	>
		<div class="group flex items-center gap-3">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 font-black italic shadow-[0_0_20px_rgba(14,165,233,0.5)]"
			>
				P
			</div>
			<div class="text-2xl font-black tracking-widest uppercase italic">
				PERA-X
			</div>
		</div>
		<div
			class="hidden gap-12 text-[10px] font-black tracking-[0.4em] text-white/40 uppercase md:flex"
		>
			<a href="#vision" class="transition-all hover:tracking-[0.6em] hover:text-sky-400">Vision</a>
			<a href="#engine" class="transition-all hover:tracking-[0.6em] hover:text-sky-400"
				>The Engine</a
			>
			<a href="#roadmap" class="transition-all hover:tracking-[0.6em] hover:text-sky-400">Roadmap</a
			>
		</div>
		<a
			href="/dashboard"
			class="glass rounded-2xl px-8 py-3 text-[10px] font-black tracking-[0.2em] text-sky-400 transition-all hover:bg-sky-400 hover:text-white hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
		>
			LAUNCH SYSTEM
		</a>
	</nav>

	<section
		class="relative flex min-h-screen flex-col items-center justify-center px-6 pt-64 pb-32 text-center"
	>
		{#if visible}
			<div in:scale={{ start: 0.9, duration: 1500, delay: 200 }} class="max-w-6xl">
				<div class="mb-6 inline-block rounded-full border border-sky-400/30 bg-sky-400/5 px-6 py-2">
					<span class="text-[9px] font-black tracking-[0.5em] text-sky-400 uppercase italic"
						>Ver. 2026.01 // Monetary Standard</span
					>
				</div>
				<h1
					class="mb-8 bg-linear-to-b from-white via-white to-white/20 bg-clip-text text-7xl leading-[0.85] font-black tracking-tighter text-transparent uppercase italic md:text-[10rem]"
				>
					Own the Future <br /> <span class="text-sky-500">at Half Price.</span>
				</h1>
				<p
					class="mx-auto mb-16 max-w-2xl text-lg leading-relaxed font-light text-white/40 md:text-2xl"
				>
					A decentralized consumer monetary system designed to transform how people access
					technology.
				</p>
				<div class="flex flex-col justify-center gap-6 md:flex-row">
					<a
						href="/dashboard"
						class="group relative overflow-hidden rounded-4xl bg-white px-12 py-6 font-black text-black transition-all hover:scale-105 active:scale-95"
					>
						<span class="relative z-10">ENTER THE CORE</span>
					</a>
					<button
						class="glass rounded-4xl border-white/10 px-12 py-6 text-xs font-black tracking-widest uppercase transition-all hover:bg-white/5"
						>Audit Whitepaper</button
					>
				</div>
			</div>
		{/if}
	</section>

	<section id="vision" class="px-6 py-48 lg:px-24">
		<div class="grid items-center gap-32 lg:grid-cols-2">
			<div class="relative">
				<div
					class="glass group relative aspect-square overflow-hidden rounded-[4rem] border-sky-500/20 shadow-2xl"
				>
					<div class="absolute inset-0 bg-linear-to-br from-sky-500/30 to-transparent"></div>
					<div
						class="absolute inset-0 flex items-center justify-center text-[15rem] opacity-20 transition-transform duration-2000 group-hover:scale-125"
					>
						📱
					</div>
				</div>
				<div
					class="glass absolute -right-12 -bottom-12 rounded-4xl border-emerald-400/20 p-8 shadow-2xl"
				>
					<div class="mb-1 text-[9px] font-black tracking-widest text-emerald-400 uppercase">
						Live Status
					</div>
					<div class="text-2xl font-black italic">PX: 1.1842 USDT</div>
				</div>
			</div>
			<div>
				<h2 class="mb-12 text-6xl leading-none font-black tracking-tighter uppercase italic">
					Financial Inclusion <br /> <span class="text-sky-500">Meet High-Tech.</span>
				</h2>
				<div class="space-y-12">
					{#each visionPoints as feature}
						<div class="group flex gap-8">
							<div
								class="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-2xl transition-all group-hover:border-sky-500/50"
							>
								{feature.icon}
							</div>
							<div>
								<h4
									class="mb-2 text-xl font-black tracking-tight uppercase group-hover:text-sky-400"
								>
									{feature.t}
								</h4>
								<p class="text-lg leading-relaxed font-light text-white/30">{feature.d}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section id="engine" class="relative px-6 py-48 lg:px-24">
		<div class="mx-auto max-w-7xl">
			<header class="mb-24 text-center">
				<h2 class="text-6xl font-black tracking-tighter text-white uppercase italic">
					The <span class="text-sky-500">Procurement</span> Engine
				</h2>
				<p class="mt-4 text-[10px] font-black tracking-[0.5em] text-white/30 uppercase">
					Universal Hardware Access • Multi-Vendor Ecosystem
				</p>
			</header>
			<div class="grid gap-10 lg:grid-cols-3">
				{#each vendors as vendor}
					<div
						class="glass group rounded-[3rem] border-white/5 p-12 transition-all hover:border-sky-500/30"
					>
						<div class="mb-8 text-4xl transition-transform duration-500 group-hover:scale-110">
							{vendor.icon}
						</div>
						<h3 class="mb-4 text-2xl font-black text-white uppercase italic">{vendor.name}</h3>
						<p class="mb-8 text-sm leading-relaxed font-light text-white/40 italic">
							{vendor.desc}
						</p>
						<div class="text-[9px] font-black tracking-widest text-sky-400 uppercase">
							{vendor.tier} Eligibility
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="fulfillment" class="relative overflow-hidden px-6 py-48 lg:px-24">
		<div class="mx-auto max-w-7xl">
			<header class="mb-24 text-center">
				<h2 class="text-6xl font-black tracking-tighter text-white uppercase italic">
					Proof of <span class="text-sky-500">Fulfillment</span>
				</h2>
				<p
					class="mt-4 text-[10px] leading-relaxed font-black tracking-[0.5em] text-white/30 uppercase"
				>
					Live Audit of Physical Redemptions • Trading Company Fulfillment
				</p>
			</header>
			<div class="relative flex overflow-hidden py-10">
				<div class="animate-marquee flex gap-8 whitespace-nowrap">
					{#each [{ item: 'iPhone 17 Pro', burn: '1,240 PX', brand: 'Apple' }, { item: 'Galaxy S26 Ultra', burn: '1,050 PX', brand: 'Samsung' }, { item: 'MacBook M5', burn: '2,100 PX', brand: 'Apple' }, { item: 'Sony Alpha 7R', burn: '1,850 PX', brand: 'Sony' }, { item: 'DJI Mavic 4', burn: '980 PX', brand: 'DJI' }] as delivery}
						<div
							class="glass flex w-80 flex-col gap-4 rounded-3xl border-white/5 p-8 shadow-xl backdrop-blur-md"
						>
							<div class="flex items-center justify-between">
								<span class="text-[9px] font-black tracking-widest text-sky-400 uppercase"
									>{delivery.brand}</span
								>
								<span
									class="rounded-md bg-emerald-400/10 px-2 py-1 text-[8px] font-bold text-emerald-400 uppercase"
									>Delivered</span
								>
							</div>
							<h4 class="text-xl font-black tracking-tighter text-white uppercase italic">
								{delivery.item}
							</h4>
							<div class="h-px w-full bg-white/5"></div>
							<div class="flex justify-between text-[10px] font-bold tracking-widest uppercase">
								<span class="text-white/30">Burn:</span><span class="text-white italic"
									>{delivery.burn}</span
								>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section id="investors" class="relative px-6 py-48 lg:px-24">
		<div class="mx-auto max-w-7xl">
			<header class="mb-24 text-center">
				<h2 class="text-6xl font-black tracking-tighter text-white uppercase italic">
					Institutional <span class="text-sky-500">Foundation</span>
				</h2>
				<p
					class="mt-4 text-[10px] leading-relaxed font-black tracking-[0.5em] text-white/30 uppercase"
				>
					Strategic Allocation & Monetary Discipline
				</p>
			</header>
			<div class="grid gap-12 lg:grid-cols-2">
				<div class="glass rounded-[3rem] border-white/10 p-12 shadow-2xl backdrop-blur-3xl">
					<h3 class="mb-10 text-3xl font-black text-white uppercase italic">Supply Allocation</h3>
					<div class="space-y-6">
						{#each allocation as row}
							<div class="flex flex-col gap-3">
								<div
									class="flex justify-between text-[10px] font-black tracking-widest text-white/40 uppercase"
								>
									<span>{row.cat}</span><span class="text-white">{row.alloc}</span>
								</div>
								<div class="h-2 w-full rounded-full bg-white/5">
									<div class="h-full rounded-full {row.color}" style="width: {row.alloc}"></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="flex flex-col gap-8">
					<div class="glass rounded-[3rem] border-sky-400/20 bg-sky-400/5 p-12">
						<h3 class="mb-6 text-2xl font-black text-white uppercase italic">
							Vesting & Protection
						</h3>
						<ul class="space-y-4 text-sm font-light text-white/50">
							<li class="flex items-center gap-4">6-Month Institutional Cliff</li>
							<li class="flex items-center gap-4">5% Quarterly Linear Unlock</li>
							<li class="flex items-center gap-4">CBPE Dynamic Liquidity Intervention</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="expansion" class="relative overflow-hidden px-6 py-48 lg:px-24">
		<div class="mx-auto max-w-7xl">
			<header class="mb-24 text-center">
				<h2 class="text-6xl font-black tracking-tighter text-white uppercase italic">
					Global <span class="text-sky-500">Expansion</span>
				</h2>
				<p
					class="mt-4 text-[10px] leading-relaxed font-black tracking-[0.5em] text-white/30 uppercase"
				>
					A Multi-Trillion Dollar Addressable Market
				</p>
			</header>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each [{ region: 'Africa', icon: '🌍', desc: 'Combating currency depreciation with stable digital buying power.' }, { region: 'Asia', icon: '🌏', desc: 'Dominating high-frequency consumer electronics upgrade cycles.' }, { region: 'Middle East', icon: '🕌', desc: 'Establishing a premium hub for luxury tech and enterprise procurement.' }, { region: 'Europe', icon: '🏛️', desc: 'Integrating into mature fintech and e-commerce payment processors.' }] as market}
					<div
						class="glass group rounded-[2.5rem] border-white/5 p-8 transition-all hover:-translate-y-2 hover:border-sky-500/30"
					>
						<div class="mb-6 text-4xl transition-transform group-hover:scale-110">
							{market.icon}
						</div>
						<h3 class="mb-4 text-xl font-black text-white uppercase italic">{market.region}</h3>
						<p class="text-sm leading-relaxed font-light text-white/40 italic">{market.desc}</p>
					</div>
				{/each}
			</div>
			<div
				class="glass mt-16 rounded-[4rem] border-sky-400/10 bg-sky-400/5 p-12 text-center shadow-2xl"
			>
				<h3 class="mb-8 text-3xl font-black text-white uppercase italic">
					Beyond Gadgets: The Pera-X Utility Ecosystem
				</h3>
				<div class="grid grid-cols-2 gap-6 md:grid-cols-5">
					{#each [{ label: 'Travel', icon: '✈️' }, { label: 'Education', icon: '🎓' }, { label: 'Healthcare', icon: '🏥' }, { label: 'Subscriptions', icon: '🔄' }, { label: 'Enterprise', icon: '🏢' }] as sector}
						<div class="flex flex-col items-center gap-2">
							<div class="text-2xl">{sector.icon}</div>
							<span class="text-[9px] font-black tracking-widest text-white/40 uppercase"
								>{sector.label}</span
							>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section id="roadmap" class="relative overflow-hidden px-6 py-48 lg:px-24">
		<div
			class="absolute top-0 left-1/2 hidden h-full w-px bg-linear-to-b from-transparent via-sky-500/50 to-transparent md:block"
		></div>
		<div class="relative z-10 mx-auto max-w-6xl">
			<header class="mb-32 text-center">
				<h2 class="text-6xl font-black tracking-tighter text-white uppercase italic">
					Deflationary <span class="text-sky-500">Expansion</span>
				</h2>
				<p class="mt-4 text-[10px] font-black tracking-[0.5em] text-white/30 uppercase">
					Roadmap to $5B+ Capital Maturity
				</p>
			</header>
			<div class="space-y-40">
				{#each milestones as milestone}
					<div
						class="relative flex flex-col {milestone.side === 'right'
							? 'md:items-end'
							: 'md:items-start'}"
					>
						<div
							class="absolute top-0 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.8)] md:block"
						></div>
						<div
							class="glass group w-full rounded-[3rem] border-white/10 p-10 shadow-2xl backdrop-blur-3xl transition-all hover:border-sky-500/30 md:w-[45%]"
						>
							<div class="mb-6 flex items-center justify-between">
								<span class="text-[10px] font-black tracking-[0.3em] text-sky-400 uppercase"
									>{milestone.q}</span
								>
								<span
									class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[8px] font-black text-white/40 uppercase"
									>{milestone.status}</span
								>
							</div>
							<h3
								class="mb-4 text-3xl font-black tracking-tighter text-white uppercase italic group-hover:text-sky-500"
							>
								{milestone.t}
							</h3>
							<p class="text-lg leading-relaxed font-light text-white/40 italic">{milestone.d}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="relative overflow-hidden px-4 py-32 text-center md:px-6 md:py-64">
		<div
			class="glass relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border-sky-500/20 p-10 py-20 shadow-2xl md:rounded-[5rem] md:p-32"
		>
			<div
				class="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-sky-500/20 blur-[80px] md:h-96 md:w-96 md:blur-[150px]"
			></div>
			<div class="relative z-10 text-center">
				<h2
					class="mb-8 text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-7xl"
				>
					Not a Token. <br class="hidden md:block" /> <span class="text-sky-500">An Economy.</span>
				</h2>
				<a
					href="/dashboard"
					class="inline-block w-full rounded-3xl bg-sky-500 px-10 py-5 text-sm font-black text-white shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all hover:scale-110 active:scale-95 md:w-auto md:rounded-[2.5rem] md:px-20 md:py-8 md:text-lg"
					>ENTER DASHBOARD</a
				>
			</div>
		</div>
	</section>

	<footer class="border-t border-white/5 py-20 text-center">
		<p class="px-6 text-[9px] font-black tracking-[0.8em] text-white/20 uppercase">
			Architected for $5B+ Capital Efficiency • Pera-X Core Logic
		</p>
	</footer>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	.animate-marquee {
		display: flex;
		width: max-content;
		animation: marquee 30s linear infinite;
	}
</style>
