// File: src/lib/stores/swap.svelte.ts
import { calculateGlobalParity, fetchParityMetrics } from '$lib/logic/Marketplace';

export function createSwapStore() {
	// 1. Core State: Mutable reactive values [cite: 13]
	let fromAmount = $state(0);
	let slippage = $state(0.5);

	// 2. PBCS Logic: Read-only derived values
	// ESLint Fixed: Using 'const' for read-only derived runes
	const currentParity = $derived(calculateGlobalParity(fetchParityMetrics()));

	// 3. Execution Estimate [cite: 10, 325]
	const estimateOut = $derived(fromAmount * currentParity * (1 - slippage / 100));

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
		 * Triggers the atomic execution handled by the Trading Company[cite: 344, 346].
		 */
		execute: () => {
			console.log(`Executing Atomic Swap: ${fromAmount} PX at ${currentParity} Parity`);
			// Settlement ensures market flow maintenance [cite: 347]
		}
	};
}

export const swapStore = createSwapStore();
