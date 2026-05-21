import { browser } from '$app/environment';

export function createWalletStore() {
	let address = $state<string | null>(null);
	let balance = $state<number>(0);
	let isConnecting = $state(false);
	let showModal = $state(false);
	let transitionActive = $state(false); // Global transition signal

	async function connect() {
		if (!browser || isConnecting) return;
		showModal = true;
	}

	function setAddress(addr: string) {
		if (addr.length < 32) return;
		address = addr;
		balance = 1560000;
		showModal = false;
	}

	function disconnect() {
		address = null;
		balance = 0;
		isConnecting = false;
	}

	async function triggerTransition() {
		transitionActive = true;
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
