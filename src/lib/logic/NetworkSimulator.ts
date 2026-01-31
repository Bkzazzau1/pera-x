/* File: src/lib/logic/NetworkSimulator.ts */
import { ticker } from '$lib/stores/ticker.svelte';

/**
 * High-Status Network Simulation Engine.
 * Randomly generates protocol activity to demonstrate Burn-Velocity.
 */
export function startNetworkSimulation() {
	const triggerRandomEvent = () => {
		const types: ('BURN' | 'REDEEM')[] = ['BURN', 'REDEEM'];
		const randomType = types[Math.floor(Math.random() * types.length)];

		// Premium volumes for a $5B valuation
		const amount = Math.floor(Math.random() * 5000) + 1200;

		ticker.add({
			type: randomType,
			amount: amount
		});

		// Set next event between 3 to 12 seconds for organic rhythm
		const nextInterval = Math.random() * 9000 + 3000;
		setTimeout(triggerRandomEvent, nextInterval);
	};

	// Initial trigger
	triggerRandomEvent();
}
