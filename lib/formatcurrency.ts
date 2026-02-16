export function formatcurrency(
  value: number,
  currency: string = "USD",
  locale: string = "eu-US",
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}
