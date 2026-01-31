// File: src/lib/utils/format.ts
export function formatMoney(amount: number, currency = "USD") {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency
  }).format(amount);
}
