// File: src/lib/logic/DEXParity.ts

export interface PoolMetrics {
	provider: string;
	pair: string;
	price: number;
	liquidity: number; // In Millions
	status: 'OPTIMAL' | 'SLIPPAGE_RISK' | 'DEGRADED';
}

/**
 * Solana-first liquidity audit used by the trading surfaces.
 */
export const fetchParityMetrics = (): PoolMetrics[] => {
	return [
		{
			provider: 'Raydium',
			pair: 'PEX/USDT',
			price: 0.00018,
			liquidity: 4.2,
			status: 'OPTIMAL'
		},
		{
			provider: 'Jupiter Route',
			pair: 'PEX/USDC',
			price: 0.000181,
			liquidity: 8.9,
			status: 'OPTIMAL'
		},
		{
			provider: 'Orca',
			pair: 'PEX/SOL',
			price: 0.000179,
			liquidity: 1.6,
			status: 'SLIPPAGE_RISK'
		}
	];
};

/**
 * Calculates the Weighted Average Price based on pool depth.
 * Weighted spot price used by swap and service-credit screens.
 */
export function calculateGlobalParity(pools: PoolMetrics[]): number {
	const totalLiquidity = pools.reduce((acc, pool) => acc + pool.liquidity, 0);
	const weightedSum = pools.reduce((acc, pool) => acc + pool.price * pool.liquidity, 0);

	return weightedSum / totalLiquidity;
}
