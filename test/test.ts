import { formatCurrency } from '../src/index';

// 🧪 Test: Nepali Format (default)
console.log('Nepali Format (default)');
console.log(formatCurrency(1234567)); 
// Expected: रू 12,34,567

console.log(formatCurrency(1234567, { showPrefix: false }));
// Expected: 12,34,567

// 🧪 Test: International Format
console.log('\nInternational Format');
console.log(formatCurrency(1234567, {
  prefix: '$',
  format: 'international'
}));
// Expected: $ 1,234,567

// 🧪 Test: Custom Prefix with Nepali Format
console.log('\nCustom Prefix + Nepali Format');
console.log(formatCurrency(9876543, {
  prefix: 'Rs',
  format: 'nepali'
}));
// Expected: Rs 98,76,543

// 🧪 Test: Locale-based Format (en-US)
console.log('\nLocale Format (en-US, USD)');
console.log(formatCurrency(1234567, {
  format: 'locale',
  locale: 'en-US',
  currency: 'USD'
}));
// Expected: $1,234,567

// 🧪 Test: Locale-based Format (fr-FR, EUR)
console.log('\nLocale Format (fr-FR, EUR)');
console.log(formatCurrency(1234567, {
  format: 'locale',
  locale: 'fr-FR',
  currency: 'EUR'
}));
// Expected: 1 234 567 €

/* Note: Outputs may vary slightly depending on system locale settings */

// 🧪 Test: Locale-based Format (hi-IN, INR)
console.log('\nLocale Format (hi-IN, INR)');
console.log(formatCurrency(1234567, {
  format: 'locale',
  locale: 'hi-IN',
  currency: 'INR'
}));
// Expected: ₹12,34,567

// 🧪 Test: Locale-based Format (ne-NP, NPR)
console.log('\nLocale Format (ne-NP, NPR)');
console.log(formatCurrency(1234567, {
  format: 'locale',
  locale: 'ne-NP',
  currency: 'NPR'
}));
// Expected: रू 12,34,567
