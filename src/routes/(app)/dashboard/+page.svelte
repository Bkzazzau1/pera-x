<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
// UI Components
	import BurnHistory from '$lib/components/ui/BurnHistory.svelte';
	import BurnVisualizer from '$lib/components/ui/BurnVisualizer.svelte';
	import GovernanceAudit from '$lib/components/ui/GovernanceAudit.svelte';
	import LiquidityBridge from '$lib/components/ui/LiquidityBridge.svelte';
	import LogisticsNode from '$lib/components/ui/LogisticsNode.svelte';
	import ModuleIcon from '$lib/components/ui/ModuleIcon.svelte';
	import ParityAudit from '$lib/components/ui/ParityAudit.svelte';
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import ProjectionChart from '$lib/components/ui/ProjectionChart.svelte';
	import StatCard from '$lib/components/ui/StatCard.svelte';
	import TransactionTicker from '$lib/components/ui/TransactionTicker.svelte';
	import WalletModal from '$lib/components/ui/WalletModal.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
// Logic & Stores
	import { startNetworkSimulation } from '$lib/logic/NetworkSimulator';

	onMount(() => {
		startNetworkSimulation();
	});

	// ✅ still used by Policy Engine cards (keep)
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

<div class="relative z-10 w-full pb-8 selection:bg-blue-500/30" in:fade={{ duration: 1000 }}>
	<section class="flex flex-col gap-8 overflow-hidden">
		<!-- ✅ HEADER REMOVED (GLOBAL ProtocolHeader is used instead) -->
		<!-- ✅ MOBILE QUICK ACTIONS REMOVED (GLOBAL ProtocolHeader is used instead) -->

		<!-- ✅ TOP SUMMARY ROW -->
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
					heartbeat={true}
					heartbeatLabel="CIRCULATING"
					heartbeatHeight={18}
					heartbeatSpeed={3.0}
					heartbeatIntensity="soft"
				/>
			</div>
		</div>

		<!-- ✅ MAIN + RIGHT RAIL -->
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

				<!-- ✅ POLICY ENGINE -->
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

				<div class="pt-2">
					<ParityMonitor />
				</div>
			</main>

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
