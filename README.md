# پروژه ساده Bootstrap 5 (RTL) با Vite

این پروژه یک صفحه‌ی ساده و آماده با **Bootstrap 5** (نصب‌شده با npm) است و برای صفحات فارسی **RTL** تنظیم شده.

## پیش‌نیاز

- Node.js (نسخه‌های جدید LTS پیشنهاد می‌شود)

## نصب

```bash
npm install
```

## اجرا (واچ)

```bash
npm start
```

سپس در مرورگر باز کنید:

- `http://localhost:5173`

## بیلد

```bash
npm run build
```

خروجی در پوشه‌ی `dist/` ساخته می‌شود.

## بیلد با واچ (هر بار ذخیره، خروجی آپدیت می‌شود)

```bash
npm run build:watch
```

با این دستور بعد از هر ذخیره، `dist/` دوباره ساخته می‌شود و `dist/index.html` هم آپدیت می‌گردد.

## ساختار

- `index.html`: صفحه اصلی
- `src/main.js`: ورودی JS (ایمپورت Bootstrap/CSS و کدهای صفحه)
- `src/styles.scss`: استایل‌های سفارشی (SCSS)

