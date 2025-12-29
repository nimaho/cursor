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

- `btn-mofid`, `btn-slate`
- `text-mofid`, `text-slate`
- `bg-mofid`, `bg-slate`
- `border-mofid`, `border-slate`

### پالت مفید 000 تا 900

برای `mofid` پالت `mofid-000` تا `mofid-900` هم اضافه شده:

- `bg-mofid-000` … `bg-mofid-900`
- `text-mofid-000` … `text-mofid-900`
- `border-mofid-000` … `border-mofid-900`
- `btn-mofid-000` … `btn-mofid-900`

### Hover شبیه Tailwind (فقط برای مفید)

می‌توانید برای رنگ‌های `mofid-000..900` هاور را با کلاس‌های `hover:` تعیین کنید:

- مثال: `class="bg-mofid-200 hover:bg-mofid-400"`
- مثال: `class="text-mofid-700 hover:text-mofid-900"`
- مثال: `class="border border-mofid-300 hover:border-mofid-500"`

## ساختار

- `index.html`: صفحه اصلی
- `assets/js/main.js`: کدهای صفحه (حالت تیره/فرم)
- `scss/styles.scss`: ورودی SCSS
- `assets/css/styles.css`: خروجی CSS (تولیدشده)

