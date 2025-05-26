# @prazzol/currency-formatter

A simple and powerful currency formatter for Nepali, International, and any locale-based formats. Useful for applications needing localized number formatting and currency symbols like `रू`, `$`, `€`, etc.

---

## ✨ Features

- 🇳🇵 Nepali number format (e.g., `12,34,567`)
- 🌐 International format (e.g., `1,234,567`)
- 🌍 Locale + currency code support (e.g., `₹12,34,567`, `$1,234,567`)
- 🔣 Optional or custom currency prefix (like `रू`, `Rs`, `$`, `€`)
- 🔒 Fully written in **TypeScript**

---

## 📦 Installation

```bash
npm install @prazzol/currency-formatter
```

## 📚 Usage
```bash
import { formatCurrency } from '@prazzol/currency-formatter';

formatCurrency(1234567);
// → रू 12,34,567

formatCurrency(1234567, { showPrefix: false });
// → 12,34,567

formatCurrency(1234567, { prefix: '$', format: 'international' });
// → $ 1,234,567

formatCurrency(1234567, {
  format: 'locale',
  locale: 'en-US',
  currency: 'USD'
});
// → $1,234,567

formatCurrency(1234567, {
  prefix: 'Rs',
  format: 'nepali'
})
// → Rs 12,34,567

formatCurrency(1234567, {
  format: 'locale',
  locale: 'fr-FR',
  currency: 'EUR'
})
// → 1 234 567 €

formatCurrency(1234567, {
  format: 'locale',
  locale: 'hi-IN',
  currency: 'INR'
})
// → ₹12,34,567
```

## 🧰 API
formatCurrency(amount: number, options?: CurrencyFormatOptions): string

| Property     | Type                                      | Default    | Description                                         |
| ------------ | ----------------------------------------- | ---------- | --------------------------------------------------- |
| `format`     | `'nepali' \| 'international' \| 'locale'` | `'nepali'` | Choose format style                                 |
| `prefix`     | `string`                                  | `'रू'`     | Custom prefix (e.g., `'$', 'Rs', '€'`)              |
| `showPrefix` | `boolean`                                 | `true`     | Whether to show the prefix                          |
| `locale`     | `string`                                  | `'en-US'`  | Locale (only used if `format` is `'locale'`)        |
| `currency`   | `string`                                  | `'NPR'`    | Currency code (only used if `format` is `'locale'`) |


## 🔄 Format Types

### 🏷 Nepali Format
```bash
formatCurrency(1234567);
// → रू 12,34,567
```

### 🗺 International Format
```bash
formatCurrency(1234567, {
  prefix: '$',
  format: 'international'
});
// → $ 1,234,567

```

### 🌍 Locale Format (Fully Automatic)
```bash
formatCurrency(1234567, {
  format: 'locale',
  locale: 'fr-FR',
  currency: 'EUR'
});
// → 1 234 567 €

formatCurrency(1234567, {
  format: 'locale',
  locale: 'hi-IN',
  currency: 'INR'
});
// → ₹12,34,567

```

## 🧪 Running Locally for Development
```bash
npm install
npm run test
```

## 🤝 Contributing
### Fork the repository
Click the Fork button on the top right of the [GitHub repo](https://github.com/prazzolgautam62/currency-formatter).

### Clone your fork locally
```bash
git clone https://github.com/your-username/currency-formatter.git
cd currency-formatter
```

### Create a new branch for your changes
```bash
git checkout -b feature/your-feature-name
```
### Make your changes
Add your code in the src/ directory.

Run the build and test:

```bash
npm run build
npm run test
```

### Commit your changes
```bash
git add .
git commit -m "feat: add your feature"
```

### Create a Pull Request
Go to your fork on GitHub

Click "Compare & pull request"

Provide a clear description of the changes

### 🔍 Guidelines
- Use clear, meaningful commit messages
- Write or update relevant tests if necessary
- Keep pull requests focused and minimal
- Follow existing code style and structure



