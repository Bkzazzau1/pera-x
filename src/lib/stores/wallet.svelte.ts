import { browser } from '$app/environment';

export function createWalletStore() {
	let address = $state<string | null>(null);
	let balance = $state<number>(0);
	let isConnecting = $state(false);
	let showModal = $state(false); // FIXED: Added missing state
	let transitionActive = $state(false); // Global transition signal

	async function connect() {
		if (!browser || isConnecting) return;
		// In Svelte 5, we directly update the state proxy
		showModal = true;
	}

	function setAddress(addr: string) {
		if (!addr.startsWith('0x') || addr.length !== 42) return;
		address = addr;
		balance = 1560000; // Simulated $1.56M PX liquidity
		showModal = false; // Auto-close modal on success
	}

	function disconnect() {
		address = null;
		balance = 0;
		isConnecting = false;
	}

	async function triggerTransition() {
		transitionActive = true;
		// Cinematic delay to allow the 3D engine to peak velocity
		await new Promise((resolve) => setTimeout(resolve, 1200));
		showModal = false;
		transitionActive = false;
	}

	return {
		get address() {
			return address;
		},
		get transitionActive() {
			return transitionActive;
		},
		get balance() {
			return balance;
		},
		get isConnecting() {
			return isConnecting;
		},
		get showModal() {
			return showModal;
		},
		// Setter for showModal to allow binding in the UI
		set showModal(val: boolean) {
			showModal = val;
		},
		connect,
		setAddress,
		triggerTransition,
		disconnect
	};
}

export const wallet = createWalletStore();
