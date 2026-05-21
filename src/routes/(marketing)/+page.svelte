<script lang="ts">
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let visible = false;
	onMount(() => (visible = true));

	const visionPoints = [
		{
			t: 'Token-to-Service Credits',
			d: 'Users convert Pera-X into AI credits, call time, SMS units, website builder credits, or utility bill credits.',
			icon: 'PX'
		},
		{
			t: '2%-30% Dynamic Burn',
			d: 'Burning begins only after a user is credited with a service, and applies to service revenue inside the Trading Company Wallet.',
			icon: '2%'
		},
		{
			t: 'Holding-Based Bill Discounts',
			d: 'Utility bill discounts start after 10 holding days and can reach 30% after 60+ days, subject to policy rules.',
			icon: '30'
		}
	];

	const milestones = [
		{
			q: 'Q1 2026',
			t: 'Service Credit Core',
			d: 'Launch token-to-credit conversion for agentic AI tools, app-to-phone calls, SMS units, website credits, and utility bills.',
			status: 'Live',
			side: 'left'
		},
		{
			q: 'Q3 2026',
			t: 'Provider Routing Expansion',
			d: 'Add approved voice, SMS, AI, website, and bill partners with transparent settlement records.',
			status: 'Pending',
			side: 'right'
		},
		{
			q: 'Q1 2027',
			t: 'Public Dashboard Layer',
			d: 'Publish dashboards for burn activity, utility usage, labeled wallets, discount tiers, and supply statistics.',
			status: 'Draft',
			side: 'left'
		}
	];

	const vendors = [
		{
			name: 'Agentic AI',
			icon: 'AI',
			desc: 'AI detector, plagiarism checker, rephraser, grammar assistant, document generation, code help, and academic support.',
			tier: 'AI Credits'
		},
		{
			name: 'Communication',
			icon: 'CALL',
			desc: 'App-to-phone calls, personal SMS, bulk SMS, OTP messages, transaction alerts, and developer SMS APIs.',
			tier: 'Minutes + Units'
		},
		{
			name: 'Bills + Websites',
			icon: 'WEB',
			desc: 'Electricity, TV, internet, water, waste, institutional bills, plus AI-generated websites and landing pages.',
			tier: 'Utility Credits'
		}
	];

	const allocation = [
		{ cat: 'Service Provider Settlement', alloc: '40%', color: 'bg-sky-500' },
		{ cat: 'Burn Execution', alloc: '30%', color: 'bg-blue-600' },
		{ cat: 'Liquidity Support', alloc: '15%', color: 'bg-indigo-500' },
		{ cat: 'Treasury & Operations', alloc: '20%', color: 'bg-emerald-500' },
		{ cat: 'Rewards & Growth', alloc: '10%', color: 'bg-purple-500' }
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
		class="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-32 text-center md:pt-64"
	>
		{#if visible}
			<div in:scale={{ start: 0.9, duration: 1500, delay: 200 }} class="max-w-6xl">
				<div class="mb-6 inline-block rounded-full border border-sky-400/30 bg-sky-400/5 px-6 py-2">
					<span class="text-[9px] font-black tracking-[0.5em] text-sky-400 uppercase italic"
						>Whitepaper v1.0 // Solana Utility Token</span
					>
				</div>
				<h1
					class="mb-8 bg-linear-to-b from-white via-white to-white/20 bg-clip-text text-7xl leading-[0.85] font-black tracking-tighter text-transparent uppercase italic md:text-[10rem]"
				>
					Utility. Connect. <br /> <span class="text-sky-500">Empower.</span>
				</h1>
				<p
					class="mx-auto mb-16 max-w-2xl text-lg leading-relaxed font-light text-white/40 md:text-2xl"
				>
					Pera-X powers AI tools, app-to-phone calls, SMS bundles, AI website generation,
					and utility bill discounts through a transparent token-to-service credit economy.
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
						>Read Whitepaper</button
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
					Practical Services <br /> <span class="text-sky-500">Meet Solana.</span>
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
					The <span class="text-sky-500">Utility</span> Engine
				</h2>
				<p class="mt-4 text-[10px] font-black tracking-[0.5em] text-white/30 uppercase">
					AI • Calls • SMS • Websites • Utility Bills
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
					Proof of <span class="text-sky-500">Utility</span>
				</h2>
				<p
					class="mt-4 text-[10px] leading-relaxed font-black tracking-[0.5em] text-white/30 uppercase"
				>
					Service-Credit Activation • Trading Company Wallet Flow
				</p>
			</header>
			<div class="relative flex overflow-hidden py-10">
				<div class="animate-marquee flex gap-8 whitespace-nowrap">
					{#each [{ item: 'AI Document Pack', burn: '2,000 PX', brand: 'AI' }, { item: 'Call Credit Top-Up', burn: '1,500 PX', brand: 'Voice' }, { item: 'OTP SMS Bundle', burn: '900 PX', brand: 'SMS' }, { item: 'Electricity Bill Credit', burn: '3,250 PX', brand: 'Bills' }, { item: 'Website Builder Credits', burn: '2,750 PX', brand: 'Web' }] as delivery}
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
					Transparent <span class="text-sky-500">Economic Flow</span>
				</h2>
				<p
					class="mt-4 text-[10px] leading-relaxed font-black tracking-[0.5em] text-white/30 uppercase"
				>
					Token-to-credit conversion and wallet-based execution
				</p>
			</header>
			<div class="grid gap-12 lg:grid-cols-2">
				<div class="glass rounded-[3rem] border-white/10 p-12 shadow-2xl backdrop-blur-3xl">
					<h3 class="mb-10 text-3xl font-black text-white uppercase italic">Service Revenue Flow</h3>
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
							Wallet Transparency
						</h3>
						<ul class="space-y-4 text-sm font-light text-white/50">
							<li class="flex items-center gap-4">Trading Company Wallet receives service-converted tokens</li>
							<li class="flex items-center gap-4">Burn Wallet receives the approved burn portion</li>
							<li class="flex items-center gap-4">Provider, treasury, liquidity, rewards, team, and investor wallets are labeled</li>
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
					Service <span class="text-sky-500">Coverage</span>
				</h2>
				<p
					class="mt-4 text-[10px] leading-relaxed font-black tracking-[0.5em] text-white/30 uppercase"
				>
					Everyday utility categories connected to one PX credit model
				</p>
			</header>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{#each [{ region: 'AI Tools', icon: 'AI', desc: 'Writing, coding, documents, proposals, academic support, detection, and originality checks.' }, { region: 'Calls', icon: 'CALL', desc: 'App-to-phone calling where receivers need neither the Pera-X app nor internet access.' }, { region: 'SMS', icon: 'SMS', desc: 'Personal, bulk, OTP, transaction, campaign, and developer messaging services.' }, { region: 'Bills', icon: 'BILL', desc: 'Electricity, TV, internet, water, waste, and approved institutional bill payments.' }] as market}
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
					One Token-to-Credit Economy
				</h3>
				<div class="grid grid-cols-2 gap-6 md:grid-cols-5">
					{#each [{ label: 'AI Credits', icon: 'AI' }, { label: 'Call Time', icon: 'CALL' }, { label: 'SMS Units', icon: 'SMS' }, { label: 'Build Credits', icon: 'WEB' }, { label: 'Bill Credits', icon: 'BILL' }] as sector}
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
					Utility <span class="text-sky-500">Roadmap</span>
				</h2>
				<p class="mt-4 text-[10px] font-black tracking-[0.5em] text-white/30 uppercase">
					Service adoption, transparent dashboards, and capped releases
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
					Not Just Speculation. <br class="hidden md:block" /> <span class="text-sky-500">Real Utility.</span>
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
			Solana Utility Token • AI, Communication, SMS, Websites, and Utility Bills
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
