import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
}

export function formatCurrency(amount: any, symbol: string): string {
  const LOCALE = "EN-gb";
  const totalAmount = Number(amount).toLocaleString(LOCALE, {
    style: "currency",
    currency: symbol,
    minimumFractionDigits: 2,
  });
  return totalAmount;
}
