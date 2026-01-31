<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
// UI Components
	import BurnHistory from '$lib/components/ui/BurnHistory.svelte';
	import BurnVisualizer from '$lib/components/ui/BurnVisualizer.svelte';
	import GovernanceAudit from '$lib/components/ui/GovernanceAudit.svelte';
	import LiquidityBridge from '$lib/components/ui/LiquidityBridge.svelte';
	import ModuleIcon from '$lib/components/ui/ModuleIcon.svelte';
	import ParityAudit from '$lib/components/ui/ParityAudit.svelte';
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
// FIXED: Added Audit
	import LogisticsNode from '$lib/components/ui/LogisticsNode.svelte'; // FIXED: Added Logistics
	import ProjectionChart from '$lib/components/ui/ProjectionChart.svelte';
	import StatCard from '$lib/components/ui/StatCard.svelte';
	import TransactionTicker from '$lib/components/ui/TransactionTicker.svelte';
	import WalletModal from '$lib/components/ui/WalletModal.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
// Logic & Stores
	import { startNetworkSimulation } from '$lib/logic/NetworkSimulator';
	import { wallet } from '$lib/stores/wallet.svelte';

	onMount(() => {
		startNetworkSimulation();
	});

	const policyModules = [
		{ name: 'Swap', href: '/swap', tag: 'DEX v4' },
		{ name: 'Redeem', href: '/redeem', tag: 'Direct Burn' },
		{ name: 'Governance', href: '/governance', tag: 'Quorum' },
		{ name: 'Portfolio', href: '/portfolio', tag: 'Vault' },
		{ name: 'Analytics', href: '/analytics', tag: 'Audit' },
		{ name: 'Policy', href: '/policy', tag: 'Engine' }
	];
</script>

<PlanetScene />
<ParityMonitor />

<div
	class="relative z-10 grid h-full min-h-screen w-full gap-8 p-4 pb-24 selection:bg-blue-500/30 md:p-12 lg:grid-cols-[1fr_400px]"
	in:fade={{ duration: 1000 }}
>
	<section class="flex flex-col gap-10 overflow-hidden">
		<header
			class="flex flex-wrap items-center justify-between gap-6"
			in:fly={{ y: -20, duration: 1000 }}
		>
			<div class="group flex items-center gap-4">
				<div class="relative">
					<div class="absolute inset-0 bg-blue-600 opacity-20 blur-xl"></div>
					<div
						class="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-linear-to-br from-blue-700 to-blue-500 text-2xl font-bold text-white shadow-2xl"
					>
						P
					</div>
				</div>
				<div>
					<h1
						class="bg-linear-to-b from-white to-white/60 bg-clip-text text-3xl font-black tracking-tighter text-transparent uppercase italic"
					>
						Pera-X <span class="font-light text-blue-500 not-italic">Protocol</span>
					</h1>
				</div>
			</div>

			<button
				type="button"
				onclick={() => wallet.connect()}
				disabled={wallet.isConnecting}
				class="glass group relative overflow-hidden rounded-2xl border-blue-400/20 px-8 py-3 text-[10px] font-black tracking-[0.2em] text-blue-400 transition-all hover:border-blue-400/50 hover:bg-blue-400/5 active:scale-95"
			>
				<div
					class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
				{wallet.isConnecting
					? 'ESTABLISHING NODE...'
					: wallet.address
						? wallet.address
						: 'ESTABLISH CONNECTION'}
			</button>
		</header>

		<main class="space-y-10">
			<div class="grid gap-6 md:grid-cols-3">
				<div class="md:col-span-2"><BurnVisualizer rate={7.5} /></div>
				<StatCard
					label="Circulating Supply"
					value="156,000,000"
					variant="neon"
					hint="DEX Liquidity Audit"
				/>
			</div>

			<div class="grid gap-8 lg:grid-cols-2">
				<LogisticsNode />
				<div class="flex flex-col gap-8">
					<StatCard
						label="Units in Transit"
						value="4,525"
						variant="neon"
						hint="Global Hub Aggregate"
					/>
					<StatCard
						label="Verification Rate"
						value="100%"
						variant="neon"
						hint="Trading Co. Manifest"
					/>
				</div>
			</div>

			<div class="glass w-full overflow-hidden rounded-[3rem] border-white/5 p-1">
				<ProjectionChart />
			</div>

			<div
				class="glass glow-hover relative flex flex-col justify-between overflow-hidden rounded-[3.5rem] border border-white/10 p-12 md:p-16"
			>
				<div class="relative z-10 text-white">
					<h2 class="mb-10 text-6xl font-black tracking-tighter uppercase italic">Policy Engine</h2>
					<div class="grid grid-cols-2 gap-6 md:grid-cols-3">
						{#each policyModules as module}
							<button
								type="button"
								onclick={() => goto(module.href)}
								class="glass group relative flex flex-col items-center justify-center gap-4 rounded-[2.5rem] border border-white/5 py-10 transition-all hover:border-blue-500/40"
							>
								<ModuleIcon name={module.name} />
								<span
									class="text-[11px] font-black tracking-[0.3em] uppercase transition-all group-hover:tracking-[0.4em]"
									>{module.name}</span
								>
							</button>
						{/each}
					</div>
				</div>
			</div>

			<ParityAudit />

			<BurnHistory />
		</main>
	</section>

	<aside
		class="flex h-full flex-col overflow-hidden rounded-[3.5rem] border border-white/10 bg-white/2 p-8 shadow-2xl backdrop-blur-[60px]"
	>
		<GovernanceAudit />

		<div
			class="my-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"
		></div>

		<div class="flex-1 overflow-hidden">
			<header class="mb-6 px-2">
				<h3 class="text-[9px] font-black tracking-[0.5em] text-white/20 uppercase italic">
					Live Fulfillment Audit
				</h3>
				<p class="mt-2 text-[10px] font-bold tracking-widest text-sky-400 uppercase">
					Atomic Burn Proof
				</p>
			</header>
			<div class="custom-scrollbar h-full overflow-y-auto pr-2 pb-10">
				<TransactionTicker />
			</div>
		</div>

		<div class="my-8 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

		<LiquidityBridge />

		<div
			class="mt-8 shrink-0 rounded-4xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur-md"
		>
			<div class="mb-2 flex items-center gap-2">
				<div
					class="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,1)]"
				></div>
				<div class="text-[8px] font-black tracking-widest text-emerald-400 uppercase">
					Status: Finalized
				</div>
			</div>
			<p class="text-[10px] leading-relaxed font-bold text-white/30 uppercase italic">
				Verified redemptions via Trading Company mandate.
			</p>
		</div>
	</aside>
</div>

<WalletModal />

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 2px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
	}

	.glow-hover:hover {
		border-color: rgba(59, 130, 246, 0.3);
		box-shadow: 0 0 120px rgba(37, 99, 235, 0.08);
	}
</style>
