<script lang="ts">
	import { goto } from '$app/navigation';
	import { wallet } from '$lib/stores/wallet.svelte';
	import { fade, fly, scale } from 'svelte/transition';

	let manualAddress = $state('');

	const handleManualSubmit = () => {
		// Standard 0x format verification for institutional nodes
		if (manualAddress.startsWith('0x') && manualAddress.length === 42) {
			wallet.setAddress(manualAddress);
		}
	};

	const enterDashboard = async () => {
		await wallet.triggerTransition();
		goto('/dashboard');
	};
</script>

{#if wallet.showModal}
	<div
		class="fixed inset-0 z-100 flex items-center justify-center p-6 backdrop-blur-xl"
		transition:fade
	>
		<button
			type="button"
			aria-label="Close wallet modal"
			class="absolute inset-0 border-none bg-black/60 p-0 focus:outline-none"
			onclick={() => (wallet.showModal = false)}
		></button>

		<div
			class="glass relative w-full max-w-lg overflow-hidden rounded-[3rem] border border-white/10 p-12 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
			transition:scale={{ start: 0.9, duration: 400 }}
		>
			<header class="relative z-10 mb-10 text-center">
				<h2 class="text-3xl font-black tracking-tighter text-white uppercase italic">
					Establish <span class="font-light text-blue-500 not-italic">Connection</span>
				</h2>
				<p class="mt-2 text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase italic">
					Secure Protocol Onboarding • Ver. 2026.01.V
				</p>
			</header>

			{#if !wallet.address}
				<div class="relative z-10 space-y-6" in:fade>
					<div class="group flex flex-col gap-3">
						<label
							class="ml-4 text-[9px] font-black tracking-widest text-white/20 uppercase"
							for="address">Manual Node Entry</label
						>
						<div class="relative">
							<input
								id="address"
								bind:value={manualAddress}
								placeholder="Enter 0x address..."
								class="w-full rounded-2xl border border-white/5 bg-white/5 px-6 py-4 text-xs font-medium text-white transition-all placeholder:text-white/10 focus:border-blue-500/50 focus:outline-none"
							/>
							<button
								onclick={handleManualSubmit}
								class="absolute top-2 right-2 rounded-xl bg-blue-600 px-4 py-2 text-[9px] font-black tracking-widest text-white uppercase transition-all hover:bg-blue-500 active:scale-95"
								>Sync</button
							>
						</div>
					</div>

					<div class="flex items-center gap-4">
						<div class="h-px flex-1 bg-white/5"></div>
						<span class="text-[8px] font-black tracking-[0.5em] text-white/10 uppercase">OR</span>
						<div class="h-px flex-1 bg-white/5"></div>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<button
							class="glass flex flex-col items-center gap-3 rounded-4xl border-white/5 py-6 transition-all hover:border-blue-500/40 hover:bg-blue-500/5"
						>
							<div class="h-8 w-8 rounded-full bg-orange-500/20"></div>
							<span class="text-[9px] font-black tracking-widest text-white/60 uppercase"
								>MetaMask</span
							>
						</button>
						<button
							class="glass flex flex-col items-center gap-3 rounded-4xl border-white/5 py-6 transition-all hover:border-blue-500/40 hover:bg-blue-500/5"
						>
							<div class="h-8 w-8 rounded-full bg-blue-500/20"></div>
							<span class="text-[9px] font-black tracking-widest text-white/60 uppercase"
								>WalletConnect</span
							>
						</button>
					</div>
				</div>
			{:else}
				<div class="relative z-10 flex flex-col items-center gap-6 py-8" in:fly={{ y: 20 }}>
					<div
						class="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
					>
						<svg
							class="h-8 w-8 text-emerald-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div class="text-center">
						<p class="text-[10px] font-black tracking-widest text-emerald-400 uppercase">
							Synchronization Complete
						</p>
						<p class="mt-1 text-[8px] text-white/30 uppercase italic">{wallet.address}</p>
					</div>

					<button
						onclick={enterDashboard}
						class="w-full rounded-2xl bg-blue-600 py-4 text-[10px] font-black tracking-[0.4em] text-white uppercase shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-500 active:scale-95"
					>
						{wallet.transitionActive ? 'INITIALIZING TERMINAL...' : 'Enter Terminal'}
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
