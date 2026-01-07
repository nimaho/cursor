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

## سیستم رنگ (Light/Dark) + کلاس‌های شبیه Tailwind

رنگ‌ها از داخل map به اسم **`$color-scheme`** (دو حالت `light` و `dark`) تولید می‌شوند و با تغییر
`data-bs-theme="dark"` (دکمه «حالت تیره») به‌صورت خودکار سوییچ می‌کنند.

### رنگ‌های اصلی (Bootstrap theme-colors)

- `btn-mofid`, `btn-slate`
- `text-mofid`, `text-slate`
- `bg-mofid`, `bg-slate`
- `border-mofid`, `border-slate`

### پالت‌ها (Utilities)

- **Gray**: `gray-000, gray-050, ..., gray-950, gray-999`
  - `bg-gray-300`, `text-gray-700`, `border-gray-050`, ...
- **Mofid**: `mofid-050 ... mofid-950`
  - `bg-mofid-500`, `text-mofid-700`, `border-mofid-200`, ...
- **Slate**: `slate-050 ... slate-950`
  - `bg-slate-200`, `text-slate-700`, `border-slate-400`, ...

### Hover دقیقاً مثل Tailwind

برای `gray / mofid / slate` می‌توانید هاور را اینطور تعیین کنید:

- `class="bg-gray-200 hover:bg-gray-300"`
- `class="bg-mofid-500 hover:bg-mofid-700"`
- `class="bg-slate-200 hover:bg-slate-300"`

## ساختار

- `index.html`: صفحه اصلی
- `assets/js/main.js`: کدهای صفحه (حالت تیره/فرم)
- `scss/styles.scss`: ورودی SCSS
- `assets/css/styles.css`: خروجی CSS (تولیدشده)

