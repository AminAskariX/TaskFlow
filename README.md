# TaskFlow ✅📅

## معرفی پروژه (فارسی)
TaskFlow یک اپلیکیشن مدیریت وظایف خلاقانه و پویا است که به کاربران امکان می‌دهد وظایف خود را به صورت مؤثر مدیریت کنند. این اپلیکیشن به شما امکانات زیر را ارائه می‌دهد:

- **مدیریت وظایف:** ثبت، ویرایش و حذف وظایف.
- **اولویت‌بندی:** تعیین اولویت وظایف به صورت کم، متوسط و زیاد.
- **زمان‌بندی:** تعیین تاریخ سررسید برای هر وظیفه.
- **حفظ امنیت:** سیستم ورود ایمن با اعتبار نشست 4 ساعته.
- **یادآوری:** امکان نمایش پیام‌های یادآوری برای وظایف مهم.
- **ذخیره‌سازی محلی:** تمامی داده‌ها به صورت امن در مرورگر ذخیره می‌شوند.

### ویژگی‌های کلیدی
- صفحه ورود با مکانیزم ضد بروت فورس.
- طراحی مدرن و کاربرپسند.
- پشتیبانی از تاریخ شمسی با استفاده از کتابخانه `jalali-moment`.

---

## Project Overview (English)
TaskFlow is an innovative and dynamic task management application that enables users to efficiently organize their tasks. The application offers the following features:

- **Task Management:** Add, edit, and delete tasks.
- **Prioritization:** Set task priorities as low, medium, or high.
- **Scheduling:** Assign due dates to tasks.
- **Security:** Secure login system with a 4-hour session validity.
- **Reminders:** Display reminders for important tasks.
- **Local Storage:** Safely store all data in the browser.

### Key Features
- Login page with brute-force protection.
- Modern and user-friendly design.
- Support for Jalali (Persian) date conversion using `jalali-moment` library.

---

## ساختار فایل‌ها (File Structure)

```
TaskFlow/
├── index.html        # صفحه ورود
├── tasks.html        # صفحه مدیریت وظایف
├── style.css         # فایل استایل‌ها
├── app.js            # فایل اصلی جاوااسکریپت
├── dataHandler.js    # مدیریت داده‌ها
├── assets/           # منابع اضافی
│   ├── reminder.mp3  # صدای یادآوری
│   └── logo.png      # لوگوی برنامه
├── libs/             # کتابخانه‌های خارجی
│   └── jalali-moment.min.js  # تبدیل تاریخ به شمسی
└── README.md         # مستندات پروژه
```

---

## نحوه استفاده (How to Use)

### فارسی:
1. پروژه را دانلود یا کلون کنید:
   ```bash
   git clone https://github.com/AminAskariX/TaskFlow.git
   ```
2. فایل `index.html` را در مرورگر باز کنید.
3. با وارد کردن نام کاربری و رمز عبور وارد شوید (اطلاعات پیش‌فرض: `admin` و `1234`).
4. وظایف خود را اضافه، ویرایش یا حذف کنید.

### English:
1. Download or clone the project:
   ```bash
   git clone https://github.com/AminAskariX/TaskFlow.git
   ```
2. Open `index.html` in your browser.
3. Login using the username and password (default: `admin` and `1234`).
4. Manage your tasks by adding, editing, or deleting them.

---

## پیش‌نیازها (Prerequisites)
- مرورگر مدرن مانند Google Chrome یا Firefox.
- اتصال به اینترنت برای دانلود کتابخانه‌های خارجی (در صورت نیاز).

---

## توسعه‌دهنده (Developer)
- نام: **م.امین عسکری**  
- وب‌سایت شخصی: [aminaskarix.ir](https://aminaskarix.ir)  
- سایت‌های پشتیبان: [Microservice.ir](https://microservice.ir) و [Metacortex.ir](https://metacortex.ir)

---

## دعوت به همکاری (Contributing)
اگر علاقه‌مند به بهبود این پروژه هستید، خوشحال می‌شویم همکاری کنید. لطفاً مراحل زیر را دنبال کنید:

1. یک Fork از این ریپو بسازید.
2. تغییرات خود را اعمال کنید.
3. یک Pull Request ارسال کنید.

---

## مجوز (License)
این پروژه تحت مجوز MIT منتشر شده است. برای اطلاعات بیشتر فایل `LICENSE` را مشاهده کنید.

