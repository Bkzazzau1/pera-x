<script lang="ts">
	import { resolve } from '$app/paths';
	import BusinessLandingBackground from '$lib/components/landing/BusinessLandingBackground.svelte';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';

	let mounted = false;
	onMount(() => (mounted = true));

	const utilityAppUrl = 'https://app.pera-x.xyz';
	const programId = 'FqEiSx5vujh2vi3yk12NaZMXhjMSaKovGUuzcKiAgshn';

	const metrics = [
		{ label: 'Total Supply', value: '1B PEX', hint: 'Fixed supply policy' },
		{ label: 'Burn Range', value: '2%–30%', hint: 'Market-condition burn' },
		{ label: 'Settlement', value: 'Credits', hint: 'Utility spending layer' },
		{ label: 'Network', value: 'Solana', hint: 'Devnet now • Mainnet next' }
	] as const;

	const pillars = [
		{
			kicker: 'AI_LAB',
			title: 'Agentic AI tools',
			desc: 'AI detection, plagiarism checks, humanizer tools, document intelligence, and future AI services powered by Credits.',
			icon: 'AI'
		},
		{
			kicker: 'CALLS_SMS',
			title: 'Communication utility',
			desc: 'International app-to-phone calls, SMS bundles, OTP messages, alerts, campaigns, and developer messaging APIs.',
			icon: 'CALL'
		},
		{
			kicker: 'BILLS_WEB',
			title: 'Bills and web tools',
			desc: 'Utility bill credits, website builder credits, AI landing pages, portfolio sites, and business website services.',
			icon: 'WEB'
		}
	] as const;

	const contractControls = [
		'Utility payments are transferred to Trading Company token accounts.',
		'External utility payments can be recorded for off-chain providers.',
		'Market-condition burn validates eligible revenue, burn rate, and decision ID.',
		'Growth releases require price, TWAP, liquidity, and buy-pressure gates.',
		'Emergency releases are capped and require downside/liquidity-drain triggers.',
		'Pause, emergency pause, and two-step authority transfer protect operations.'
	] as const;

	const backendLayer = [
		{ title: 'Protocol Status', endpoint: 'GET /protocol/status', desc: 'Program, supply, network, burn mode, utility URL, and wallet configuration.' },
		{ title: 'Utility Catalog', endpoint: 'GET /utility/catalog', desc: 'AI Lab, Calls, SMS, Numbers, Bills, and Website Tools served to the app.' },
		{ title: 'Credits Engine', endpoint: 'POST /credits/buy', desc: 'PEX, card, stablecoin, and virtual-account payments become internal Credits.' },
		{ title: 'Telecom Layer', endpoint: '/telecom/*', desc: 'Calls, SMS, phone numbers, renewals, and communication usage flows.' }
	] as const;

	const flow = [
		{ n: '01', title: 'Acquire or hold PEX', body: 'PEX remains the Solana ecosystem asset for holding, utility access, discounts, and protocol participation.' },
		{ n: '02', title: 'Convert into Credits', body: 'The backend prices PEX, fiat, stablecoin, and VA payments into a stable internal service balance.' },
		{ n: '03', title: 'Spend on real services', body: 'Credits are consumed across AI, calls, SMS, numbers, bills, and web tools without exposing users to token volatility per action.' },
		{ n: '04', title: 'Record settlement and burn', body: 'Service revenue is routed through Trading Company logic, recorded, and used for burn/policy transparency.' }
	] as const;

	const trustSignals = [
		{ label: 'Utility-first economy', value: 'PEX + Credits', desc: 'PEX is the asset. Credits are the spending layer.' },
		{ label: 'Backend transparency', value: 'Status APIs', desc: 'Protocol and service catalog are exposed from the utility gateway.' },
		{ label: 'Safety controls', value: 'Pause + Gates', desc: 'Pause, emergency pause, authority flow, burn and release checks.' }
	] as const;
</script>

<svelte:head>
	<title>Pera-X — Utility • Connect • Empower</title>
	<meta
		name="description"
		content="Pera-X connects a Solana utility token to AI tools, communication services, SMS, bills, web tools, Credits, settlement, and market-condition burn transparency."
	/>
</svelte:head>

<BusinessLandingBackground />

<div class="premium-landing relative z-10 min-h-screen overflow-x-hidden bg-transparent text-white selection:bg-cyan-400/30">
	<nav class="fixed top-0 z-50 w-full border-b border-white/5 bg-[#020617]/70 backdrop-blur-2xl">
		<div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
			<a href={resolve('/')} class="group flex items-center gap-4">
				<div class="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-cyan-400/20 to-blue-700/10 font-black text-cyan-300 italic shadow-[0_0_34px_rgba(34,211,238,0.18)] transition group-hover:border-cyan-300/40">
					PEX
				</div>
				<div class="flex flex-col">
					<span class="text-2xl leading-none font-black tracking-tighter uppercase italic">PERA-X</span>
					<span class="mt-1 text-[9px] font-black tracking-[0.4em] text-cyan-400/60 uppercase">Token-to-Credits Protocol</span>
				</div>
			</a>

			<div class="hidden items-center gap-10 text-[10px] font-black tracking-[0.38em] text-white/35 uppercase lg:flex">
				<a href="#utility" class="transition hover:text-cyan-300">Utility</a>
				<a href="#protocol" class="transition hover:text-cyan-300">Protocol</a>
				<a href="#backend" class="transition hover:text-cyan-300">Backend</a>
				<a href="#flow" class="transition hover:text-cyan-300">Flow</a>
			</div>

			<div class="flex items-center gap-3">
				<a href={utilityAppUrl} target="_blank" rel="noreferrer" class="hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-6 py-3 text-[10px] font-black tracking-widest text-cyan-200 transition hover:bg-cyan-300 hover:text-black md:inline-flex">
					Open Utility
				</a>
				<a href={resolve('/dashboard')} class="rounded-2xl bg-white px-6 py-3 text-[10px] font-black tracking-widest text-black transition hover:scale-105 active:scale-95">
					Launch dApp
				</a>
			</div>
		</div>
	</nav>

	<section class="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-36 pb-24 lg:px-8 lg:pt-44">
		<div class="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
			{#if mounted}
				<div in:fly={{ y: 22, duration: 800 }}>
					<div class="mb-7 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2 text-[9px] font-black tracking-[0.45em] text-cyan-300 uppercase">
						Utility • Connect • Empower
					</div>

					<h1 class="max-w-5xl text-6xl leading-[0.86] font-black tracking-tighter uppercase italic md:text-8xl xl:text-[8.8rem]">
						Real utility.<br />
						<span class="bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">Token-powered.</span>
					</h1>

					<p class="mt-8 max-w-2xl text-lg leading-relaxed font-light text-white/50 md:text-xl">
						Pera-X connects PEX to a real Credits economy for AI tools, international calls, SMS, foreign numbers, utility bills, and web services — with backend settlement and smart-contract transparency.
					</p>

					<div class="mt-10 flex flex-col gap-4 sm:flex-row">
						<a href={resolve('/dashboard')} class="rounded-[1.8rem] bg-cyan-300 px-8 py-5 text-center text-xs font-black tracking-[0.22em] text-black uppercase shadow-[0_0_60px_rgba(34,211,238,0.25)] transition hover:scale-105 active:scale-95">
							Enter dApp
						</a>
						<a href={resolve('/utility')} class="rounded-[1.8rem] border border-white/10 bg-white/5 px-8 py-5 text-center text-xs font-black tracking-[0.22em] text-white/75 uppercase transition hover:border-cyan-300/30 hover:text-white active:scale-95">
							View Utility Bridge
						</a>
					</div>
				</div>
			{/if}

			{#if mounted}
				<div in:scale={{ start: 0.94, duration: 900, delay: 180 }} class="relative">
					<div class="absolute -inset-8 rounded-[4rem] bg-cyan-400/10 blur-3xl"></div>
					<div class="glass relative overflow-hidden rounded-[3rem] border-cyan-300/15 p-6 shadow-2xl md:rounded-[4rem] md:p-8">
						<div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]"></div>
						<div class="relative z-10">
							<div class="mb-6 flex items-center justify-between">
								<div>
									<div class="text-[9px] font-black tracking-[0.42em] text-white/25 uppercase">Protocol Core</div>
									<div class="mt-2 text-2xl font-black uppercase italic">PEX → Credits</div>
								</div>
								<div class="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-[9px] font-black tracking-widest text-emerald-300 uppercase">Configured</div>
							</div>

							<div class="grid gap-3 sm:grid-cols-2">
								{#each metrics as metric (metric.label)}
									<div class="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
										<div class="text-[8px] font-black tracking-[0.32em] text-white/25 uppercase">{metric.label}</div>
										<div class="mt-3 text-3xl font-black tracking-tighter text-white uppercase italic">{metric.value}</div>
										<div class="mt-2 text-xs text-white/35">{metric.hint}</div>
									</div>
								{/each}
							</div>

							<div class="mt-5 rounded-3xl border border-cyan-300/10 bg-black/25 p-5">
								<div class="mb-2 text-[8px] font-black tracking-[0.4em] text-cyan-300 uppercase">Anchor Program ID</div>
								<div class="break-all font-mono text-xs text-white/70">{programId}</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<section class="relative z-10 px-5 pb-10 lg:px-8">
		<div class="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
			{#each trustSignals as signal}
				<div class="glass rounded-[2rem] border-white/5 p-6">
					<div class="mb-3 text-[8px] font-black tracking-[0.34em] text-cyan-300/70 uppercase">{signal.label}</div>
					<div class="mb-3 text-2xl font-black uppercase italic text-white">{signal.value}</div>
					<p class="text-sm leading-relaxed text-white/42">{signal.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<section id="utility" class="relative z-10 px-5 py-28 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="mb-12 max-w-3xl">
				<div class="mb-4 text-[10px] font-black tracking-[0.45em] text-cyan-300 uppercase">Utility products</div>
				<h2 class="text-5xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">Built for services, not hype.</h2>
			</div>
			<div class="grid gap-5 lg:grid-cols-3">
				{#each pillars as pillar (pillar.kicker)}
					<div class="glass group rounded-[2.6rem] border-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-300/20">
						<div class="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-300/15 bg-cyan-300/10 text-xl font-black text-cyan-300 transition group-hover:scale-110">{pillar.icon}</div>
						<div class="mb-3 text-[9px] font-black tracking-[0.35em] text-cyan-300/70 uppercase">{pillar.kicker}</div>
						<h3 class="mb-4 text-2xl font-black uppercase italic">{pillar.title}</h3>
						<p class="text-sm leading-relaxed text-white/45">{pillar.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="flow" class="relative z-10 px-5 py-28 lg:px-8">
		<div class="mx-auto max-w-7xl rounded-[3.5rem] border border-white/10 bg-white/[0.025] p-6 shadow-2xl backdrop-blur-3xl md:p-12">
			<div class="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
				<div>
					<div class="mb-4 text-[10px] font-black tracking-[0.45em] text-cyan-300 uppercase">System flow</div>
					<h2 class="text-5xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">PEX becomes usable Credits.</h2>
				</div>
				<p class="text-lg leading-relaxed text-white/45">The token remains the ecosystem asset. Credits become the stable internal balance for service usage. This separation makes pricing clearer, protects user experience, and keeps burn/settlement policy transparent.</p>
			</div>

			<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{#each flow as item (item.n)}
					<div class="rounded-[2rem] border border-white/5 bg-black/25 p-6">
						<div class="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xs font-black text-cyan-300">{item.n}</div>
						<h3 class="mb-3 text-xl font-black uppercase italic">{item.title}</h3>
						<p class="text-sm leading-relaxed text-white/42">{item.body}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="protocol" class="relative z-10 px-5 py-28 lg:px-8">
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
			<div class="sticky top-32">
				<div class="mb-4 text-[10px] font-black tracking-[0.45em] text-cyan-300 uppercase">Smart contract layer</div>
				<h2 class="text-5xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">Market-aware contract controls.</h2>
				<p class="mt-6 text-lg leading-relaxed text-white/45">The Anchor program is designed for utility payment records, Trading Company settlement, market-condition burns, release gates, and safety controls.</p>
				<a href={resolve('/contract')} class="mt-8 inline-flex rounded-3xl border border-cyan-300/20 bg-cyan-300/10 px-7 py-4 text-xs font-black tracking-widest text-cyan-200 uppercase transition hover:bg-cyan-300 hover:text-black">View Contract Page</a>
			</div>

			<div class="grid gap-4">
				{#each contractControls as control, index}
					<div class="glass flex gap-5 rounded-[2rem] border-white/5 p-6">
						<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xs font-black text-cyan-300">{String(index + 1).padStart(2, '0')}</div>
						<p class="text-sm leading-relaxed text-white/55 md:text-base">{control}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="backend" class="relative z-10 px-5 py-28 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
				<div>
					<div class="mb-4 text-[10px] font-black tracking-[0.45em] text-cyan-300 uppercase">Backend gateway</div>
					<h2 class="text-5xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">The utility engine behind the token.</h2>
				</div>
				<a href={utilityAppUrl} target="_blank" rel="noreferrer" class="rounded-3xl bg-white px-8 py-4 text-xs font-black tracking-widest text-black uppercase transition hover:scale-105 active:scale-95">Open Utility App</a>
			</div>

			<div class="grid gap-5 md:grid-cols-2">
				{#each backendLayer as layer (layer.endpoint)}
					<div class="glass rounded-[2.4rem] border-white/5 p-7 transition hover:border-cyan-300/20">
						<div class="mb-4 font-mono text-xs text-cyan-300">{layer.endpoint}</div>
						<h3 class="mb-3 text-2xl font-black uppercase italic">{layer.title}</h3>
						<p class="text-sm leading-relaxed text-white/45">{layer.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="relative z-10 px-5 py-32 lg:px-8">
		<div class="mx-auto max-w-7xl overflow-hidden rounded-[3.8rem] border border-cyan-300/15 bg-linear-to-br from-cyan-300/10 via-white/[0.03] to-blue-700/10 p-8 text-center shadow-[0_0_110px_rgba(34,211,238,0.10)] backdrop-blur-3xl md:p-16">
			<div class="mx-auto mb-6 inline-flex rounded-full border border-white/10 bg-black/30 px-5 py-2 text-[9px] font-black tracking-[0.4em] text-white/35 uppercase">Pera-X Business Landing</div>
			<h2 class="mx-auto max-w-5xl text-5xl leading-none font-black tracking-tighter uppercase italic md:text-8xl">One ecosystem for token, credits, and useful services.</h2>
			<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/45">Enter the dApp to view dashboard, utility bridge, contract verification, and analytics — or open the utility app to start using Credits.</p>
			<div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
				<a href={resolve('/dashboard')} class="rounded-[1.8rem] bg-cyan-300 px-10 py-5 text-xs font-black tracking-[0.22em] text-black uppercase transition hover:scale-105 active:scale-95">Launch dApp</a>
				<a href={utilityAppUrl} target="_blank" rel="noreferrer" class="rounded-[1.8rem] border border-white/10 bg-white/5 px-10 py-5 text-xs font-black tracking-[0.22em] text-white/75 uppercase transition hover:border-cyan-300/30 hover:text-white">Open Utility</a>
			</div>
		</div>
	</section>

	<footer class="relative z-10 border-t border-white/5 px-5 py-14 text-center">
		<p class="text-[9px] font-black tracking-[0.7em] text-white/20 uppercase">Pera-X • Utility • Connect • Empower</p>
	</footer>
</div>

<style>
	.premium-landing :global(.glass) {
		background: rgba(255, 255, 255, 0.025);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(28px) saturate(160%);
		-webkit-backdrop-filter: blur(28px) saturate(160%);
		box-shadow:
			inset 0 1px 1px rgba(255, 255, 255, 0.08),
			0 28px 70px -28px rgba(0, 0, 0, 0.85);
	}
</style>
