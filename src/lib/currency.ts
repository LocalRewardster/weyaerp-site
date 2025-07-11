// Currency conversion utility
const UGX_TO_USD_RATE = 3750; // 1 USD = 3750 UGX

export function formatUGX(amount: number): string {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('UGX', 'UGX');
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ugxToUsd(ugxAmount: number): number {
  return Math.round(ugxAmount / UGX_TO_USD_RATE);
}

export function usdToUgx(usdAmount: number): number {
  return usdAmount * UGX_TO_USD_RATE;
}

export function formatDualCurrency(ugxAmount: number): string {
  const usdAmount = ugxToUsd(ugxAmount);
  return `${formatUGX(ugxAmount)} / ${formatUSD(usdAmount)}`;
} 