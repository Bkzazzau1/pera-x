/* File: src/lib/stores/ticker.svelte.ts */

export interface Transaction {
	id: string;
	type: 'BURN' | 'REDEEM' | 'MINT';
	amount: number;
	timestamp: number;
}

export function createTickerStore() {
	let transactions = $state<Transaction[]>([]);

	return {
		get transactions() {
			return transactions;
		},
		add(tx: Omit<Transaction, 'id' | 'timestamp'>) {
			const newTx = {
				...tx,
				id: Math.random().toString(36).slice(2, 9),
				timestamp: Date.now()
			};
			// Maintain only the last 5 transactions for UI performance
			transactions = [newTx, ...transactions].slice(0, 5);
		}
	};
}

export const ticker = createTickerStore();
