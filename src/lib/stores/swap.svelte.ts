// File: src/lib/stores/swap.svelte.ts
import { calculateGlobalParity, fetchParityMetrics } from '$lib/logic/Marketplace';

export function createSwapStore() {
	let fromAmount = $state(0);
	let slippage = $state(0.5);

	const currentParity = $derived(calculateGlobalParity(fetchParityMetrics()));

	const estimateOut = $derived((fromAmount / currentParity) * (1 - slippage / 100));

	return {
		// UI Getters
		get fromAmount() {
			return fromAmount;
		},
		get slippage() {
			return slippage;
		},
		get currentParity() {
			return currentParity;
		},
		get estimateOut() {
			return estimateOut;
		},

		// State Mutators
		setFromAmount: (val: number) => {
			fromAmount = val;
		},
		setSlippage: (val: number) => {
			slippage = val;
		},

		/**
		 * Triggers token acquisition. Service conversion happens after the user chooses credits.
		 */
		execute: () => {
			console.log(`Executing PX swap: ${fromAmount} USDT at ${currentParity} PX spot`);
		}
	};
}

export const swapStore = createSwapStore();
