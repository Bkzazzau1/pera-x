<script lang="ts">
	import { resolve } from '$app/paths';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { fade } from 'svelte/transition';

	const utilityAppUrl = 'https://app.pera-x.xyz';

	const utilitySteps = [
		{
			code: '01',
			title: 'Hold or Acquire PEX',
			description:
				'PEX remains the Solana ecosystem asset for holding, trading, discounts, rewards, and utility participation.'
		},
		{
			code: '02',
			title: 'Convert PEX into Credits',
			description:
				'Inside the utility gateway, users convert PEX, card, stablecoin, or eligible virtual-account payments into spendable platform Credits.'
		},
		{
			code: '03',
			title: 'Spend Credits on Services',
			description:
				'Credits power AI tools, app-to-phone calls, SMS, numbers, bills, website tools, and future utility modules.'
		},
		{
			code: '04',
			title: 'Track Settlement and Burn',
			description:
				'Service payments flow through the Trading Company wallet model, with approved burn and revenue records reflected back into the dApp narrative.'
		}
	] as const;

	const serviceModules = [
		{ label: 'AI Lab', detail: 'AI detection, plagiarism checks, humanizer tools, and document services.' },
		{ label: 'Calls', detail: 'International app-to-phone calls without requiring the receiver to use Pera-X.' },
		{ label: 'SMS', detail: 'Personal SMS, bulk SMS, OTP, alerts, and developer messaging APIs.' },
		{ label: 'Bills', detail: 'Electricity, TV, internet, water, waste, and approved institutional bill payments.' },
		{ label: 'Numbers', detail: 'Foreign number purchase, renewal, inbox, and number-management flows.' },
		{ label: 'Web Tools', detail: 'AI-generated websites, landing pages, and build-credit services.' }
	] as const;
</script>

<PlanetScene />

<section class="relative z-10 min-h-screen overflow-hidden px-4 py-10 text-white sm:px-6 lg:px-8" in:fade={{ duration: 700 }}>
	<div class="mx-auto flex max-w-7xl flex-col gap-8 pt-6 md:pt-10">
		<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch">
			<div class="glass relative overflow-hidden rounded-[2.5rem] border border-cyan-400/10 p-8 shadow-2xl backdrop-blur-3xl md:rounded-[4rem] md:p-14">
				<div class="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-[110px]"></div>
				<div class="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-blue-600/20 blur-[110px]"></div>

				<div class="relative z-10">
					<div class="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-[9px] font-black tracking-[0.42em] text-cyan-300 uppercase">
						Utility Bridge
					</div>

					<h1 class="max-w-4xl text-5xl leading-[0.92] font-black tracking-tighter text-white uppercase italic sm:text-6xl md:text-8xl">
						From PEX Token <span class="text-cyan-300">to Real Services.</span>
					</h1>

					<p class="mt-8 max-w-2xl text-base leading-relaxed font-light text-white/45 sm:text-lg">
						The dApp explains the Pera-X protocol. The utility app is where users spend Credits on AI, calls, SMS, numbers, bills, and other service modules. This page connects both sides clearly.
					</p>

					<div class="mt-10 flex flex-col gap-4 sm:flex-row">
						<a
							href={utilityAppUrl}
							target="_blank"
							rel="noreferrer"
							class="rounded-3xl bg-cyan-300 px-8 py-5 text-center text-xs font-black tracking-[0.22em] text-black uppercase shadow-[0_0_50px_rgba(103,232,249,0.24)] transition hover:scale-105 active:scale-95"
						>
							Open Utility App ↗
						</a>
						<a
							href={resolve('/dashboard')}
							class="rounded-3xl border border-white/10 bg-white/5 px-8 py-5 text-center text-xs font-black tracking-[0.22em] text-white/70 uppercase transition hover:border-sky-400/30 hover:text-white active:scale-95"
						>
							Back to Dashboard
						</a>
					</div>
				</div>
			</div>

			<aside class="glass flex flex-col justify-between rounded-[2.5rem] border border-white/10 p-8 shadow-2xl backdrop-blur-3xl md:rounded-[4rem] md:p-10">
				<div>
					<div class="mb-4 text-[9px] font-black tracking-[0.45em] text-white/25 uppercase">Protocol Status</div>
					<h2 class="text-3xl font-black tracking-tighter text-white uppercase italic">PEX → Credits → Utility</h2>
					<p class="mt-4 text-sm leading-relaxed text-white/40">
						This is the clean user journey: the token gives ecosystem exposure, while Credits make service pricing simple and usable.
					</p>
				</div>

				<div class="mt-10 grid gap-3">
					<div class="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
						<div class="text-[9px] font-black tracking-widest text-cyan-300 uppercase">External Utility URL</div>
						<div class="mt-2 break-all text-sm font-black text-white">app.pera-x.xyz</div>
					</div>
					<div class="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">
						<div class="text-[9px] font-black tracking-widest text-emerald-300 uppercase">Use Case</div>
						<div class="mt-2 text-sm font-black text-white">AI • Calls • SMS • Bills • Numbers</div>
					</div>
				</div>
			</aside>
		</div>

		<div class="grid gap-6 lg:grid-cols-4">
			{#each utilitySteps as step (step.code)}
				<div class="glass rounded-[2rem] border border-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/4">
					<div class="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-[10px] font-black text-cyan-300">
						{step.code}
					</div>
					<h3 class="text-lg font-black tracking-tight text-white uppercase italic">{step.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-white/40">{step.description}</p>
				</div>
			{/each}
		</div>

		<div class="glass rounded-[2.5rem] border border-white/10 p-8 shadow-2xl backdrop-blur-3xl md:rounded-[4rem] md:p-12">
			<div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
				<div>
					<div class="mb-3 text-[9px] font-black tracking-[0.45em] text-white/25 uppercase">Service Coverage</div>
					<h2 class="text-4xl font-black tracking-tighter text-white uppercase italic md:text-6xl">What the Utility App Handles</h2>
				</div>
				<a href={utilityAppUrl} target="_blank" rel="noreferrer" class="text-[10px] font-black tracking-[0.28em] text-cyan-300 uppercase hover:text-cyan-100">
					Go to Utility App ↗
				</a>
			</div>

			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each serviceModules as service (service.label)}
					<div class="rounded-3xl border border-white/5 bg-white/3 p-6">
						<div class="text-[10px] font-black tracking-[0.3em] text-cyan-300 uppercase">{service.label}</div>
						<p class="mt-3 text-sm leading-relaxed text-white/40">{service.detail}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
