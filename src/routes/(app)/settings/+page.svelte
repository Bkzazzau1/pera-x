<script lang="ts">
	import ParityMonitor from '$lib/components/ui/ParityMonitor.svelte';
	import PlanetScene from '$lib/components/visuals/PlanetScene.svelte';
	import { wallet } from '$lib/stores/wallet.svelte';
	import { fade, fly } from 'svelte/transition';

	// 1. Explicitly Type the Keys for $5B Security
	type SettingKey = 'notifications' | 'biometrics' | 'privacyMode';

	let settings = $state<Record<SettingKey, boolean>>({
		notifications: true,
		biometrics: true,
		privacyMode: false
	});

	const toggles: { id: SettingKey; label: string; desc: string }[] = [
		{ id: 'biometrics', label: 'Biometric Signing', desc: 'Use FaceID/TouchID for atomic swaps' },
		{ id: 'privacyMode', label: 'Privacy Shroud', desc: 'Mask balances from external observers' }
	];

	const sessions = [
		{ device: 'iPhone 17 Pro', location: 'London, UK', status: 'Active' },
		{ device: 'MacBook Pro M5', location: 'San Francisco, US', status: 'Idle' }
	];
</script>

<PlanetScene />
<ParityMonitor />

<div class="relative z-10 min-h-screen bg-transparent p-8 pb-32 lg:p-16" in:fade>
	<header class="mb-12" in:fly={{ y: -20, duration: 800 }}>
		<h1 class="text-4xl font-black tracking-tighter text-white uppercase italic">
			System <span class="font-light text-blue-500 not-italic">Control</span>
		</h1>
		<p class="mt-4 max-w-2xl text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
			Sovereign Identity & Security Preferences
		</p>
	</header>

	<div class="grid gap-8 lg:grid-cols-3">
		<div
			class="glass rounded-[3rem] border-white/10 p-10 shadow-2xl backdrop-blur-3xl lg:col-span-2"
		>
			<div class="mb-10 flex items-center justify-between">
				<div class="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">
					Security Matrix
				</div>
				<div
					class="rounded-lg bg-emerald-400/10 px-3 py-1 text-[9px] font-bold text-emerald-400 uppercase"
				>
					Encrypted
				</div>
			</div>

			<div class="space-y-8">
				<div
					class="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-6"
				>
					<div class="flex flex-col gap-1">
						<span class="text-xs font-black tracking-tighter text-white uppercase"
							>Connected Identity</span
						>
						<span class="font-mono text-[10px] text-white/30"
							>{wallet.address || '0x71C...60a5'}</span
						>
					</div>
					<button
						class="rounded-xl bg-white/10 px-4 py-2 text-[9px] font-black tracking-widest text-white/60 uppercase transition-colors hover:bg-red-500/20 hover:text-red-400"
					>
						Disconnect
					</button>
				</div>

				<div class="grid gap-6 md:grid-cols-2">
					{#each toggles as toggle}
						<div
							class="flex items-start justify-between rounded-2xl border border-white/5 bg-white/2 p-6"
						>
							<div class="flex flex-col gap-1 pr-4">
								<span class="text-xs font-bold text-white/80">{toggle.label}</span>
								<span class="text-[9px] leading-relaxed tracking-widest text-white/20 uppercase"
									>{toggle.desc}</span
								>
							</div>
							<button
								aria-label="Toggle {toggle.label}"
								class="relative h-5 w-10 rounded-full transition-colors {settings[toggle.id]
									? 'bg-blue-600'
									: 'bg-white/10'}"
								onclick={() => (settings[toggle.id] = !settings[toggle.id])}
							>
								<div
									class="absolute top-1 h-3 w-3 rounded-full bg-white transition-all {settings[
										toggle.id
									]
										? 'left-6'
										: 'left-1'}"
								></div>
							</button>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="glass flex flex-col justify-between rounded-[3rem] border-white/10 p-10 shadow-2xl">
			<div>
				<div
					class="mb-8 text-center text-[10px] font-black tracking-[0.3em] text-white/40 uppercase"
				>
					Active Sessions
				</div>
				<div class="space-y-4">
					{#each sessions as session}
						<div class="rounded-2xl border border-white/5 bg-white/2 p-5">
							<div class="mb-2 flex items-start justify-between">
								<span class="text-xs font-black tracking-tighter text-white uppercase"
									>{session.device}</span
								>
								<span class="text-[8px] font-bold tracking-widest text-blue-400 uppercase"
									>{session.status}</span
								>
							</div>
							<div class="text-[9px] tracking-[0.2em] text-white/20 uppercase">
								{session.location}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<button
				class="mt-10 w-full rounded-2xl border border-white/10 py-4 text-[9px] font-black tracking-[0.4em] text-white/30 uppercase transition-all hover:bg-white/5 hover:text-white"
			>
				Terminate All Sessions
			</button>
		</div>
	</div>
</div>
