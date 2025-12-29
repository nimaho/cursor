# پروژه ساده Bootstrap 5 (RTL) با npm (بدون Vite)

این پروژه یک صفحه‌ی ساده با **Bootstrap 5** (از npm) و **SCSS** است و بدون باندلر اجرا می‌شود.

## پیش‌نیاز

- Node.js (نسخه‌های جدید LTS پیشنهاد می‌شود)

## نصب

```bash
npm install
```

## اجرا (واچ + ریلود)

```bash
npm start
```

این دستور **مرورگر را خودکار باز می‌کند** و با هر تغییر (مثلاً تغییر در SCSS که CSS را آپدیت می‌کند) صفحه **رفرش** می‌شود.

اگر مرورگر باز نشد، دستی باز کنید:

- `http://localhost:5173`

## بیلد

```bash
npm run build
```

این دستور فقط **SCSS را به CSS** تبدیل می‌کند و خروجی را در `assets/css/styles.css` می‌نویسد.

## ساختار

- `index.html`: صفحه اصلی
- `assets/js/main.js`: کدهای صفحه (حالت تیره/فرم)
- `scss/styles.scss`: ورودی SCSS
- `assets/css/styles.css`: خروجی CSS (تولیدشده)

