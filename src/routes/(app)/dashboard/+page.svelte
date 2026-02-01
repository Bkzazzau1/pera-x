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
	import LogisticsNode from '$lib/components/ui/LogisticsNode.svelte';
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

	// Header quick actions (SYSTEM VIEW ONLY)
	const headerActions = [
		{ name: 'Dashboard', href: '/dashboard', tag: 'Home' },
		{ name: 'Trade', href: '/trade', tag: 'DEX' },
		{ name: 'Swap', href: '/swap', tag: 'v4' },
		{ name: 'Redeem', href: '/redeem', tag: 'Burn' }
	];

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

<!-- ✅ PAGE WRAPPER (Right rail starts lower, not at top) -->
<div class="relative z-10 w-full pb-8 selection:bg-blue-500/30" in:fade={{ duration: 1000 }}>
	<section class="flex flex-col gap-8 overflow-hidden">
		<!-- ✅ SYSTEM HEADER (DESKTOP ONLY) -->
		<header class="hidden flex-col gap-6 md:flex" in:fly={{ y: -20, duration: 1000 }}>
			<!-- top row -->
			<div class="flex items-center justify-between gap-6">
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
						<p class="mt-1 text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">
							System View • Institutional Console
						</p>
					</div>
				</div>

				<div class="flex items-center gap-3">
					<div
						class="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-2xl lg:flex"
					>
						<span class="relative flex h-2 w-2">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/40"
							>
							</span>
							<span class="relative inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
						</span>
						<span class="text-[9px] font-black tracking-[0.35em] text-white/40 uppercase">
							Mainnet • v2026
						</span>
					</div>

					<button
						type="button"
						onclick={() => wallet.connect()}
						disabled={wallet.isConnecting}
						class="glass group relative overflow-hidden rounded-2xl border-blue-400/20 px-8 py-3 text-[10px] font-black tracking-[0.2em] text-blue-400 transition-all hover:border-blue-400/50 hover:bg-blue-400/5 active:scale-95 disabled:opacity-60"
					>
						<div
							class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
						></div>
						{wallet.isConnecting
							? 'ESTABLISHING NODE...'
							: wallet.address
								? wallet.address
								: 'CONNECT WALLET'}
					</button>
				</div>
			</div>

			<!-- quick actions row (desktop) -->
			<div class="glass relative overflow-hidden rounded-[2.25rem] border border-white/10 p-2">
				<div class="pointer-events-none absolute inset-0">
					<div
						class="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]"
					></div>
					<div
						class="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]"
					></div>
					<div
						class="absolute inset-0 opacity-[0.06]"
						style="
							background-image:
								linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
								linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px);
							background-size: 44px 44px;
						"
					></div>
				</div>

				<div class="relative z-10 flex items-center justify-between gap-3 px-3 py-2">
					<div class="flex items-center gap-2">
						<span class="text-[9px] font-black tracking-[0.35em] text-white/30 uppercase">
							Quick Actions
						</span>
						<span class="h-1 w-8 rounded-full bg-linear-to-r from-blue-500/40 to-transparent"
						></span>
					</div>

					<div class="flex items-center gap-2">
						{#each headerActions as a}
							<button
								type="button"
								onclick={() => goto(a.href)}
								class="group/action relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 px-5 py-3 text-[10px] font-black tracking-[0.28em] text-white/70 uppercase transition-all hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-white active:scale-95"
							>
								<div
									class="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover/action:translate-x-full"
								></div>
								<span class="relative z-10 flex items-center gap-3">
									<span class="text-white/90">{a.name}</span>
									<span
										class="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-[8px] font-black tracking-[0.25em] text-white/35"
									>
										{a.tag}
									</span>
								</span>
							</button>
						{/each}
					</div>
				</div>
			</div>
		</header>

		<!-- ✅ MOBILE QUICK ACTIONS (MOBILE VIEW) -->
		<div class="md:hidden">
			<div class="glass rounded-[2.25rem] border border-white/10 p-4">
				<div class="mb-3 flex items-center justify-between">
					<div>
						<div class="text-[9px] font-black tracking-[0.35em] text-white/30 uppercase">Quick</div>
						<div class="mt-1 text-base font-black tracking-tight text-white uppercase italic">
							Actions
						</div>
					</div>

					<button
						type="button"
						onclick={() => wallet.connect()}
						disabled={wallet.isConnecting}
						class="rounded-2xl border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-[9px] font-black tracking-[0.22em] text-blue-300 uppercase active:scale-95 disabled:opacity-60"
					>
						{wallet.isConnecting ? 'LINKING...' : wallet.address ? 'SYNCED' : 'CONNECT'}
					</button>
				</div>

				<div class="grid grid-cols-2 gap-3">
					{#each headerActions as a}
						<button
							type="button"
							onclick={() => goto(a.href)}
							class="glass group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/3 px-4 py-4 text-left transition-all hover:border-blue-400/25 hover:bg-blue-400/10 active:scale-95"
						>
							<div
								class="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
							></div>

							<div class="relative z-10">
								<div class="text-[10px] font-black tracking-[0.28em] text-white/80 uppercase">
									{a.name}
								</div>
								<div class="mt-1 text-[8px] font-black tracking-[0.25em] text-white/25 uppercase">
									{a.tag}
								</div>
							</div>

							<div
								class="relative z-10 rounded-xl border border-white/10 bg-black/30 p-2 text-white/40"
							>
								<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								</svg>
							</div>
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- ✅ TOP SUMMARY ROW (FULL WIDTH): fills space professionally -->
		<div class="grid gap-6 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<BurnVisualizer rate={7.5} />
			</div>

			<div class="self-stretch">
				<StatCard
					label="Circulating Supply"
					value="156,000,000"
					variant="neon"
					hint="DEX Liquidity Audit"
				/>
			</div>
		</div>

		<!-- ✅ MAIN + RIGHT RAIL (RIGHT PANEL NOW STARTS LOWER) -->
		<div class="grid w-full gap-6 lg:grid-cols-[1fr_400px] lg:gap-8">
			<main class="space-y-8 md:space-y-10">
				<div class="grid gap-6 md:gap-8 lg:grid-cols-2">
					<LogisticsNode />
					<div class="flex flex-col gap-6 md:gap-8">
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

				<!-- ✅ POLICY ENGINE (unchanged) -->
				<div
					class="glass glow-hover relative overflow-hidden rounded-[2.5rem] border border-white/10 p-6 md:rounded-[3.5rem] md:p-12"
				>
					<div class="pointer-events-none absolute inset-0">
						<div
							class="absolute inset-0 opacity-[0.06]"
							style="
								background-image:
									linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
									linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px);
								background-size: 42px 42px;
							"
						></div>
						<div
							class="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]"
						></div>
						<div
							class="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]"
						></div>
						<div
							class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-40"
						></div>
					</div>

					<div class="relative z-10 text-white">
						<div class="mb-6 flex flex-wrap items-center justify-between gap-4 md:mb-10">
							<div>
								<h2
									class="text-3xl font-black tracking-tighter uppercase italic sm:text-4xl md:text-6xl"
								>
									Policy Engine
								</h2>
								<p class="mt-2 text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">
									Execution modules • Routed by protocol mandate
								</p>
							</div>

							<div
								class="flex items-center gap-2 rounded-2xl border border-blue-400/20 bg-blue-400/10 px-4 py-2 backdrop-blur-2xl"
							>
								<span class="relative flex h-2 w-2">
									<span
										class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/40"
									></span>
									<span class="relative inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
								</span>
								<span class="text-[9px] font-black tracking-[0.35em] text-blue-300 uppercase"
									>ARMED</span
								>
							</div>
						</div>

						<div class="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
							{#each policyModules as module}
								<button
									type="button"
									onclick={() => goto(module.href)}
									class="glass group relative flex aspect-square items-center justify-center overflow-hidden rounded-4xl border border-white/5 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-white/4 active:translate-y-0 md:rounded-[2.5rem] md:p-7"
								>
									<div
										class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									>
										<div
											class="absolute inset-0 rounded-4xl md:rounded-[2.5rem]"
											style="
												background:
													radial-gradient(circle at 30% 20%, rgba(59,130,246,0.22), transparent 55%),
													radial-gradient(circle at 70% 80%, rgba(34,211,238,0.14), transparent 55%);
											"
										></div>
									</div>

									<div
										class="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
									></div>

									<div class="relative z-10 flex flex-col items-center gap-3 text-center">
										<div
											class="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:border-blue-400/30 group-hover:bg-blue-400/10 md:h-16 md:w-16"
										>
											<ModuleIcon name={module.name} />
										</div>

										<div class="space-y-2">
											<span
												class="block text-[11px] font-black tracking-[0.32em] uppercase transition-all duration-300 group-hover:tracking-[0.4em]"
											>
												{module.name}
											</span>

											<span
												class="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[8px] font-black tracking-[0.28em] text-white/40 uppercase transition-all duration-300 group-hover:border-blue-400/20 group-hover:text-blue-200/80"
											>
												{module.tag}
											</span>
										</div>
									</div>

									<div
										class="pointer-events-none absolute top-4 left-4 h-2 w-2 rounded-full bg-white/10"
									></div>
									<div
										class="pointer-events-none absolute right-4 bottom-4 h-2 w-2 rounded-full bg-blue-400/20"
									></div>
								</button>
							{/each}
						</div>
					</div>
				</div>

				<ParityAudit />
				<BurnHistory />

				<!-- ✅ ParityMonitor moved DOWN into normal flow (not sticky) -->
				<div class="pt-2">
					<ParityMonitor />
				</div>
			</main>

			<!-- ✅ RIGHT RAIL (starts lower because it’s in this lower grid) -->
			<aside
				class="flex flex-col overflow-hidden rounded-[3.5rem] border border-white/10 bg-white/2 p-6 shadow-2xl backdrop-blur-[60px] md:p-8"
			>
				<GovernanceAudit />
				<div
					class="my-6 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"
				></div>

				<div class="overflow-hidden">
					<header class="mb-4 px-2">
						<h3 class="text-[9px] font-black tracking-[0.5em] text-white/20 uppercase italic">
							Live Fulfillment Audit
						</h3>
						<p class="mt-2 text-[10px] font-bold tracking-widest text-sky-400 uppercase">
							Atomic Burn Proof
						</p>
					</header>

					<!-- ✅ FIX 1 APPLIED: mobile-friendly wrapper to prevent clipping -->
					<div
						class="custom-scrollbar -mx-1 max-h-[70vh] overflow-x-hidden overflow-y-auto px-1 pr-1 md:mx-0 md:max-h-85 md:px-0 md:pr-2 lg:max-h-130"
					>
						<TransactionTicker />
					</div>
				</div>

				<div
					class="my-6 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"
				></div>

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
	</section>
</div>

<!-- ✅ Removed sticky ParityMonitor block (it’s now in normal flow above) -->

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
