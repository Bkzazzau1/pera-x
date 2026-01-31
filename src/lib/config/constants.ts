// File: src/lib/config/constants.ts
export const APP = {
  name: "Pera-X",
  defaultCurrency: "USD"
} as const;

export const PRICE_BANDS = {
  launch: { min: 0.04, max: 0.08 },
  growth: { min: 0.08, max: 0.12 }
} as const;
