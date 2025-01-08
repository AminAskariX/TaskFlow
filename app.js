/**
 * TaskFlow - مدیریت وظایف
 * نویسنده: م.امین عسکری
 * وب‌سایت: aminaskarix.ir
 */

// بررسی ورود کاربر و مدیریت مکانیزم لاگین
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // بررسی ساده نام کاربری و رمز عبور (به صورت نمونه)
    if (username === "admin" && password === "1234") {
        // ذخیره زمان ورود و انتقال به صفحه وظایف
        localStorage.setItem("loginTime", new Date().getTime());
        window.location.href = "tasks.html";
    } else {
        document.getElementById("errorMessage").textContent = "نام کاربری یا رمز عبور اشتباه است!";
    }
});

// بررسی زمان ورود و اعتبار نشست
if (window.location.pathname.endsWith("tasks.html")) {
    const loginTime = localStorage.getItem("loginTime");
    const currentTime = new Date().getTime();
    const sessionDuration = 4 * 60 * 60 * 1000; // 4 ساعت

    if (!loginTime || currentTime - loginTime > sessionDuration) {
        alert("نشست شما منقضی شده است. لطفاً دوباره وارد شوید.");
        window.location.href = "index.html";
    }
}

// مدیریت وظایف
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function checkReminder(task) {
    const taskDateTime = new Date(`${task.dueDate}T${task.dueTime}`);
    const now = new Date();

    // بررسی اگر زمان سررسید فرا رسیده باشد
    if (taskDateTime <= now) {
        alert(`یادآور: وظیفه "${task.title}" اکنون سررسید شده است!`);
        playReminderSound();
    }
}

// پخش صدای یادآور
function playReminderSound() {
    const audio = new Audio('assets/reminder.mp3');
    audio.play();
}


// نمایش وظایف
function renderTasks() {
    const tasksContainer = document.getElementById("tasksContainer");
    if (!tasksContainer) return;

    tasksContainer.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${task.title} - ${task.priority} - ${task.dueDate} ${task.dueTime}</span>
            <div class="actions">
                <button class="edit-btn" onclick="editTask(${index})">ویرایش</button>
                <button class="delete-btn" onclick="deleteTask(${index})">حذف</button>
            </div>
        `;
        tasksContainer.appendChild(taskItem);

        // بررسی زمان یادآور
        checkReminder(task);
    });
}


// افزودن وظیفه جدید
document.getElementById("taskForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("taskTitle").value.trim();
    const priority = document.getElementById("taskPriority").value;
    const dueDate = document.getElementById("taskDueDate").value;
    const dueTime = document.getElementById("taskTime").value;

    if (title && priority && dueDate && dueTime) {
        tasks.push({ title, priority, dueDate, dueTime });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        alert("وظیفه با موفقیت اضافه شد!");
        this.reset();
    } else {
        alert("لطفاً همه فیلدها را پر کنید.");
    }
});

// حذف وظیفه
function deleteTask(index) {
    if (confirm("آیا مطمئن هستید که می‌خواهید این وظیفه را حذف کنید؟")) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        alert("وظیفه با موفقیت حذف شد!");
    }
}

// ویرایش وظیفه
function editTask(index) {
    const task = tasks[index];
    const newTitle = prompt("عنوان جدید را وارد کنید:", task.title);
    const newPriority = prompt("اولویت جدید (low, medium, high):", task.priority);
    const newDueDate = prompt("تاریخ جدید (YYYY-MM-DD):", task.dueDate);

    if (newTitle && newPriority && newDueDate) {
        tasks[index] = { title: newTitle, priority: newPriority, dueDate: newDueDate };
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        alert("وظیفه با موفقیت ویرایش شد!");
    }
}

// خروج کاربر
document.getElementById("logoutButton")?.addEventListener("click", function () {
    localStorage.removeItem("loginTime");
    window.location.href = "index.html";
});

// بارگذاری وظایف در صفحه مدیریت
renderTasks();
