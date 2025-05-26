export type FormatType = 'nepali' | 'international' | 'locale';

export interface CurrencyFormatOptions {
  locale?: string; // e.g., 'en-US', 'ne-NP'
  currency?: string; // e.g., 'USD', 'NPR'
  prefix?: string; // custom symbol
  showPrefix?: boolean;
  format?: FormatType;
}

export function formatCurrency(
  amount: number,
  options: CurrencyFormatOptions = {}
): string {
  const {
    prefix = 'रू',
    showPrefix = true,
    format = 'nepali',
    locale = 'en-US',
    currency = 'NPR',
  } = options;

  if (isNaN(amount)) return '';

  const integerAmount = Math.floor(amount);

  let formatted = '';

  if (format === 'locale') {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    });
    formatted = formatter.format(integerAmount);
    return formatted;
  }

  formatted =
    format === 'international'
      ? formatInternational(integerAmount)
      : formatNepali(integerAmount);

  return showPrefix ? `${prefix} ${formatted}` : formatted;
}

function formatInternational(number: number): string {
  return number.toLocaleString('en-US');
}

function formatNepali(number: number): string {
  const str = number.toString();
  const lastThree = str.slice(-3);
  const rest = str.slice(0, -3);
  const formattedRest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return rest ? `${formattedRest},${lastThree}` : lastThree;
}