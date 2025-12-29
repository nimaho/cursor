# پروژه ساده Bootstrap 5 (RTL) با npm (بدون Vite)

این پروژه یک صفحه‌ی ساده با **Bootstrap 5** (از npm) و **SCSS** است و بدون باندلر اجرا می‌شود.

Bootstrap از روی SCSS خودش کامپایل می‌شود تا بتوانیم با **`$theme-colors` map** رنگ‌های جدید به تم اضافه کنیم.

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

این دستور SCSS را کامپایل می‌کند و خروجی RTL را در `assets/css/styles.css` می‌نویسد.

## رنگ‌های تم (Bootstrap map)

دو رنگ جدید به `theme-colors` اضافه شده‌اند و می‌توانید از کلاس‌های بوت‌استرپ استفاده کنید:

- `btn-accent-1`, `btn-accent-2`
- `text-accent-1`, `text-accent-2`
- `bg-accent-1`, `bg-accent-2`
- `border-accent-1`, `border-accent-2`

## ساختار

- `index.html`: صفحه اصلی
- `assets/js/main.js`: کدهای صفحه (حالت تیره/فرم)
- `scss/styles.scss`: ورودی SCSS
- `assets/css/styles.css`: خروجی CSS (تولیدشده)

