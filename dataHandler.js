/**
 * TaskFlow storage
 * Copyright (c) M. Amin Askari
 * Licensed under the MIT License. See LICENSE.
 */
window.TaskFlowStorage = {
  load() {
    try {
      const value = JSON.parse(localStorage.getItem('tasks') || '[]');
      return Array.isArray(value) ? value : [];
    } catch { return []; }
  },
  save(tasks) {
    try { localStorage.setItem('tasks', JSON.stringify(tasks)); return true; }
    catch { alert('فضای ذخیره‌سازی مرورگر در دسترس نیست.'); return false; }
  }
};
