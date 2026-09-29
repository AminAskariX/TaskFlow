# TaskFlow

[فارسی](#فارسی) · [English](#english)

<a id="فارسی"></a>
## فارسی

نمونهٔ مدیریت وظایف در مرورگر، با اولویت، زمان سررسید و ذخیره‌سازی محلی.

### امکانات

- ثبت، ویرایش و حذف وظایف با تاریخ، ساعت و اولویت.
- نمایش وظایف ذخیره‌شده در `localStorage` و هشدار سررسید هنگام نمایش فهرست.
- صفحهٔ ورود نمایشی و زمان اعتبار چهار ساعته در مرورگر.

### اجرا

مخزن را با `git clone https://github.com/AminAskariX/TaskFlow.git` دریافت کنید و `index.html` را باز کنید. اطلاعات ورود نمایشی در کد `admin` و `1234` است؛ صفحهٔ وظایف `tasks.html` نام دارد.

### محدودیت‌های مهم

ورود و زمان نشست کاملاً سمت مرورگر است و برای حفاظت از اطلاعات واقعی مناسب نیست. هنگام ویرایش، کد ساعت سررسید را حفظ نمی‌کند. هشدار فقط هنگام رندر فهرست بررسی می‌شود و زمان‌بند پس‌زمینه نیست. فایل‌ها یا کتابخانه‌هایی که در مستندات قبلی ذکر شده اما در مخزن نیستند، پیش‌نیاز قطعی این نسخه محسوب نمی‌شوند.

### پدیدآورنده و حقوق نشر

© 2025 م.امین عسکری (M. Amin Askari). [GitHub](https://github.com/AminAskariX) · [وب‌سایت](https://aminaskarix.ir)

### مجوز

این پروژه تحت مجوز MIT منتشر شده است؛ متن کامل در [LICENSE](LICENSE) آمده است. عبارت «تمام حقوق محفوظ است» جایگزین شرایط این مجوز نمی‌شود.

<a id="english"></a>
## English

A browser-based task manager demo with priorities, due dates, and local storage.

### Features

- Add, edit, and delete tasks with a due date, time, and priority.
- Persist tasks in `localStorage`; check due times when the task list renders.
- Demo sign-in with a four-hour browser-side session timestamp.

### Run

Clone `https://github.com/AminAskariX/TaskFlow.git` and open `index.html`. The demo credentials embedded in the source are `admin` / `1234`; tasks are shown on `tasks.html`.

### Important limitations

Authentication is entirely client-side and must not protect real data. Editing a task drops its due-time field. Reminders are checked when the list renders, not by a background scheduler. Files or libraries mentioned in older documentation but absent from the repository are not required by this checked-in version.

### Author and copyright

Copyright © 2025 M. Amin Askari (م.امین عسکری). [GitHub](https://github.com/AminAskariX) · [Website](https://aminaskarix.ir)

### License

This project is licensed under MIT. See [LICENSE](LICENSE) for the full terms.
