# ✅ TaskFlow

[فارسی](#فارسی) · [English](#english)

<a id="فارسی"></a>
## 🇮🇷 فارسی

نمونهٔ مدیریت وظایف در مرورگر، با اولویت، زمان سررسید و ذخیره‌سازی محلی.

### 🚀 امکانات

- ثبت، ویرایش و حذف وظایف با تاریخ، ساعت و اولویت.
- نمایش وظایف ذخیره‌شده در `localStorage` و هشدار سررسید هنگام نمایش فهرست.
- صفحهٔ ورود نمایشی و زمان اعتبار چهار ساعته در مرورگر.

### 🛠️ اجرا

مخزن را با `git clone https://github.com/AminAskariX/TaskFlow.git` دریافت کنید و `index.html` را باز کنید. اطلاعات ورود نمایشی در کد `admin` و `1234` است؛ صفحهٔ وظایف `tasks.html` نام دارد.

### ⚠️ محدودیت‌های مهم

ورود و زمان نشست کاملاً سمت مرورگر است و برای حفاظت از اطلاعات واقعی مناسب نیست. هنگام ویرایش، کد ساعت سررسید را حفظ نمی‌کند. هشدار فقط هنگام رندر فهرست بررسی می‌شود و زمان‌بند پس‌زمینه نیست. فایل‌ها یا کتابخانه‌هایی که در مستندات قبلی ذکر شده اما در مخزن نیستند، پیش‌نیاز قطعی این نسخه محسوب نمی‌شوند.

### 💡 مسیر استفاده

کاربر پس از ورود نمایشی به صفحهٔ وظایف می‌رود، عنوان، اولویت و زمان سررسید را ثبت می‌کند و فهرست را در همان مرورگر می‌بیند. این ساختار برای بررسی یک رابط مدیریت کارهای شخصی و آزمایش جریان افزودن و حذف وظیفه مناسب است. داده‌ها روی سرور قرار نمی‌گیرند و با پاک‌شدن دادهٔ مرورگر از دست می‌روند.

### 🧩 نقشهٔ فایل‌ها

| مسیر | نقش |
| --- | --- |
| `index.html` | فرم ورود نمایشی |
| `tasks.html` | رابط فهرست وظایف |
| `app.js` | ورود، نمایش و عملیات وظایف |
| `dataHandler.js` | توابع کمکی ذخیره‌سازی |
| `assets/reminder.mp3` | صدای هشدار |

> 🔎 رمز عبور داخل JavaScript دیده می‌شود و نباید برای محافظت از دادهٔ واقعی استفاده شود.

### 👤 پدیدآورنده و حقوق نشر

© م.امین عسکری (M. Amin Askari). [GitHub](https://github.com/AminAskariX) · [وب‌سایت](https://aminaskarix.ir)

### 📜 مجوز

این پروژه تحت مجوز MIT منتشر شده است؛ متن کامل در [LICENSE](LICENSE) آمده است.

<a id="english"></a>
## 🇬🇧 English

A browser-based task manager demo with priorities, due dates, and local storage.

### 🚀 Features

- Add, edit, and delete tasks with a due date, time, and priority.
- Persist tasks in `localStorage`; check due times when the task list renders.
- Demo sign-in with a four-hour browser-side session timestamp.

### 🛠️ Run

Clone `https://github.com/AminAskariX/TaskFlow.git` and open `index.html`. The demo credentials embedded in the source are `admin` / `1234`; tasks are shown on `tasks.html`.

### ⚠️ Important limitations

Authentication is entirely client-side and must not protect real data. Editing a task drops its due-time field. Reminders are checked when the list renders, not by a background scheduler. Files or libraries mentioned in older documentation but absent from the repository are not required by this checked-in version.

### 💡 Typical flow

After demo sign-in, a user enters a title, priority, and due time, then sees tasks in the same browser. This makes the repository useful for exploring a personal-task UI and the add/delete flow. Nothing is stored on a server, and clearing browser data removes the tasks.

### 🧩 Repository map

| Path | Purpose |
| --- | --- |
| `index.html` | Demo sign-in form |
| `tasks.html` | Task list interface |
| `app.js` | Sign-in, rendering, and task actions |
| `dataHandler.js` | Storage helpers |
| `assets/reminder.mp3` | Alert sound |

> 🔎 The password is visible in JavaScript and must not be used to protect real data.

### 👤 Author and copyright

Copyright © M. Amin Askari (م.امین عسکری). [GitHub](https://github.com/AminAskariX) · [Website](https://aminaskarix.ir)

### 📜 License

This project is licensed under MIT. See [LICENSE](LICENSE) for the full terms.
