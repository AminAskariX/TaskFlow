# ✅ TaskFlow

[فارسی](#فارسی) · [English](#english)

<a id="فارسی"></a>
## 🇮🇷 فارسی

فهرست وظایف شخصی در مرورگر، با اولویت و زمان سررسید. داده‌ها محلی‌اند و برای استفادهٔ یک نفر روی یک مرورگر طراحی شده‌اند.

### 🚀 امکانات

- افزودن، ویرایش و حذف وظیفه؛ ساعت سررسید هنگام ویرایش حفظ می‌شود.
- بررسی سررسید هر ۳۰ ثانیه و هنگام بازگشت به صفحه؛ هر وظیفه یک بار یادآوری می‌شود.
- نمایش ایمن متن وظایف، بدون اجرای HTML ورودی.
- خروجی و بازیابی JSON برای پشتیبان‌گیری یا جابه‌جایی دستی داده‌ها.

### 🛠️ اجرا

مخزن را دریافت و `index.html` را در مرورگر باز کنید؛ لینک صفحه شما را به `tasks.html` می‌برد. `dataHandler.js` پیش از `app.js` بارگذاری می‌شود و داده‌ها را در `localStorage` نگه می‌دارد.

### ⚠️ محدودهٔ امنیت و یادآورها

ورود نمایشی با رمز ثابت حذف شده است. این نسخه **حساب کاربری یا محافظت سروری ندارد**؛ روی دستگاه مشترک برای دادهٔ محرمانه مناسب نیست. یادآور در مرورگر باز اجرا می‌شود؛ هنگام بسته‌بودن کامل مرورگر، اعلان پس‌زمینه ارسال نمی‌شود. برای حفظ داده، خروجی JSON بگیرید.

### 👤 پدیدآورنده

طراحی و برنامه‌نویسی: م. امین عسکری | [AminAskariX.ir](https://aminaskarix.ir)

### 📜 مجوز

MIT؛ متن کامل در [LICENSE](LICENSE).

<a id="english"></a>
## 🇬🇧 English

A personal, browser-based task list with priorities and due times. Data remains local to one browser.

### 🚀 Features

- Add, edit, and delete tasks while preserving the due time on edit.
- Check reminders every 30 seconds and when the page regains focus; notify once per task.
- Render task text safely as text, without executing entered HTML.
- Export and import JSON for manual backup or transfer.

### 🛠️ Run

Clone the repository and open `index.html`, then follow its link to `tasks.html`. `dataHandler.js` loads before `app.js` and persists data in `localStorage`.

### ⚠️ Security and reminder scope

The fake fixed-password login has been removed. There are **no accounts or server-side access controls**; do not store sensitive data on a shared device. Reminders work while the browser page is open and do not deliver background notifications after the browser closes. Export JSON to keep a backup.

### 👤 Author

Design and development: M. Amin Askari | [AminAskariX.ir](https://aminaskarix.ir)

### 📜 License

MIT; see [LICENSE](LICENSE).
