/**
 * مدیریت داده‌های TaskFlow
 * نویسنده: م.امین عسکری
 * وب‌سایت: aminaskarix.ir
 */

// ذخیره وظایف در localStorage
function saveTasksToStorage(tasks) {
    try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
        console.error("خطا در ذخیره‌سازی وظایف:", error);
        alert("خطایی در ذخیره وظایف رخ داده است!");
    }
}

// بارگذاری وظایف از localStorage
function loadTasksFromStorage() {
    try {
        const tasks = localStorage.getItem("tasks");
        return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
        console.error("خطا در بارگذاری وظایف:", error);
        alert("خطایی در بارگذاری وظایف رخ داده است!");
        return [];
    }
}

// حذف همه وظایف (مثلاً برای ریست کردن داده‌ها)
function clearTasksFromStorage() {
    try {
        localStorage.removeItem("tasks");
        alert("تمام وظایف پاک شدند!");
    } catch (error) {
        console.error("خطا در پاک‌سازی وظایف:", error);
        alert("خطایی در پاک‌سازی وظایف رخ داده است!");
    }
}

// بررسی و ذخیره اطلاعات ورود
function saveLoginInfo(username) {
    try {
        localStorage.setItem("loginTime", new Date().getTime());
        localStorage.setItem("username", username);
    } catch (error) {
        console.error("خطا در ذخیره اطلاعات ورود:", error);
        alert("خطایی در ذخیره اطلاعات ورود رخ داده است!");
    }
}

// بارگذاری اطلاعات ورود
function getLoginInfo() {
    try {
        const loginTime = localStorage.getItem("loginTime");
        const username = localStorage.getItem("username");
        return { loginTime, username };
    } catch (error) {
        console.error("خطا در بارگذاری اطلاعات ورود:", error);
        alert("خطایی در بارگذاری اطلاعات ورود رخ داده است!");
        return { loginTime: null, username: null };
    }
}

// پاک‌سازی اطلاعات ورود
function clearLoginInfo() {
    try {
        localStorage.removeItem("loginTime");
        localStorage.removeItem("username");
    } catch (error) {
        console.error("خطا در پاک‌سازی اطلاعات ورود:", error);
    }
}

// تبدیل تاریخ میلادی به شمسی (استفاده از کتابخانه jalali-moment)
function convertToJalali(date) {
    try {
        return moment(date, "YYYY-MM-DD").locale("fa").format("YYYY/MM/DD");
    } catch (error) {
        console.error("خطا در تبدیل تاریخ:", error);
        return date; // در صورت خطا، تاریخ میلادی بازگردانده می‌شود
    }
}

// خروجی توابع
export {
    saveTasksToStorage,
    loadTasksFromStorage,
    clearTasksFromStorage,
    saveLoginInfo,
    getLoginInfo,
    clearLoginInfo,
    convertToJalali,
};
