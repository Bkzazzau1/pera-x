// File: src/lib/logic/Marketplace.ts

import { getEligibleTier } from './PolicyEngine';

/** * PBCS Interface
 * Ensures swaps and redemptions stay within mandated monetary bands.
 */
export interface ParityMetrics {
	spotPrice: number;
	ceiling: number;
	floor: number;
}

export interface Gadget {
	id: string;
	name: string;
	brand: string;
	marketPrice: number; // Global MSRP in USD
	category: 'Phone' | 'Laptop' | 'Watch' | 'Accessory';
	image: string;
	specHighlight: string;
}

/**
 * High-End Hardware Inventory.
 * These assets drive the organic demand loop of the PeraX ecosystem.
 */
export const GADGETS: Gadget[] = [
	{
		id: '1',
		name: 'iPhone 17 Pro',
		brand: 'Apple',
		marketPrice: 1200,
		category: 'Phone',
		image: '📱',
		specHighlight: 'A19 Pro Chip • 2TB'
	},
	{
		id: '2',
		name: 'MacBook Pro M5',
		brand: 'Apple',
		marketPrice: 2400,
		category: 'Laptop',
		image: '💻',
		specHighlight: 'M5 Max • 128GB RAM'
	},
	{
		id: '3',
		name: 'Galaxy S26 Ultra',
		brand: 'Samsung',
		marketPrice: 1100,
		category: 'Phone',
		image: '📱',
		specHighlight: '200MP • Quantum AI'
	},
	{
		id: '4',
		name: 'Sony Alpha 7R V',
		brand: 'Sony',
		marketPrice: 3899,
		category: 'Phone',
		image: '📸',
		specHighlight: '61.0MP Full-Frame'
	}
];

/**
 * CBPE Data Fetcher
 * Fetches real-time metrics based on current protocol phase.
 */
export function fetchParityMetrics(): ParityMetrics {
	return {
		spotPrice: 0.1184, // Mid-point Growth Phase
		ceiling: 0.12, // Expansion target ceiling
		floor: 0.08 // Growth support floor
	};
}

/**
 * PBCS Execution Logic
 * Prevents oracle manipulation and market overheating.
 */
export function calculateGlobalParity(metrics: ParityMetrics): number {
	if (metrics.spotPrice > metrics.ceiling) return metrics.ceiling;
	if (metrics.spotPrice < metrics.floor) return metrics.floor;
	return metrics.spotPrice;
}

/**
 * Dynamic Discount Engine
 * Calculates the PX cost after applying tier-based subsidies.
 */
export function calculatePXCost(usdPrice: number, pxRate: number, discountPercent: number): number {
	// Subsidized value funded by Commerce Flow fees
	const subsidizedValue = usdPrice * (1 - discountPercent);
	return Math.round(subsidizedValue / pxRate);
}

/**
 * Savings Summary for User Dashboard
 */
export function getSavingsSummary(gadget: Gadget, balance: number) {
	const tier = getEligibleTier(balance);
	const discount = tier ? parseFloat(tier.discount) / 100 : 0;
	const savings = gadget.marketPrice * discount;

	return {
		tier: tier?.label || 'Ineligible',
		finalPrice: gadget.marketPrice - savings,
		totalSaved: savings
	};
}
