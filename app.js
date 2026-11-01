/**
 * TaskFlow
 * Copyright (c) M. Amin Askari
 * Licensed under the MIT License. See LICENSE.
 */
const $ = id => document.getElementById(id);
const storage = window.TaskFlowStorage;
let tasks = storage.load().map((task, index) => ({
  ...task, id: task.id || String(Date.now()) + '-' + index, notified: !!task.notified
}));
let editingId = null;
function clearForm() {
  $('taskForm').reset();
  editingId = null;
  $('saveTask').textContent = 'افزودن وظیفه';
  $('cancelEdit').hidden = true;
}
function render() {
  const list = $('tasksContainer');
  list.replaceChildren();
  for (const task of tasks) {
    const li = document.createElement('li');
    const label = document.createElement('span');
    label.textContent = task.title + ' — ' + task.priority + ' — ' + task.dueDate + ' ' + (task.dueTime || '');
    const actions = document.createElement('div');
    actions.className = 'actions';
    const edit = document.createElement('button');
    edit.textContent = 'ویرایش';
    edit.onclick = () => {
      editingId = task.id;
      $('taskTitle').value = task.title;
      $('taskPriority').value = task.priority;
      $('taskDueDate').value = task.dueDate;
      $('taskTime').value = task.dueTime || '';
      $('saveTask').textContent = 'ذخیرهٔ تغییرات';
      $('cancelEdit').hidden = false;
      $('taskTitle').focus();
    };
    const remove = document.createElement('button');
    remove.textContent = 'حذف';
    remove.onclick = () => {
      if (!confirm('این وظیفه حذف شود؟')) return;
      tasks = tasks.filter(item => item.id !== task.id);
      if (editingId === task.id) clearForm();
      if (storage.save(tasks)) render();
    };
    actions.append(edit, remove);
    li.append(label, actions);
    list.append(li);
  }
}
function checkReminders() {
  const now = Date.now();
  let changed = false;
  for (const task of tasks) {
    const due = Date.parse(task.dueDate + 'T' + (task.dueTime || ''));
    if (!task.notified && Number.isFinite(due) && due <= now) {
      task.notified = true;
      changed = true;
      $('reminderStatus').textContent = '⏰ سررسید: ' + task.title;
      const audio = new Audio('assets/reminder.mp3');
      audio.play().catch(() => {});
    }
  }
  if (changed) storage.save(tasks);
}
$('taskForm').addEventListener('submit', event => {
  event.preventDefault();
  const title = $('taskTitle').value.trim();
  const dueDate = $('taskDueDate').value, dueTime = $('taskTime').value;
  if (!title || !dueDate || !dueTime) return;
  const previous = tasks.find(task => task.id === editingId);
  const updated = {
    id: previous ? previous.id : String(Date.now()) + '-' + Math.random(),
    title, priority: $('taskPriority').value, dueDate, dueTime,
    notified: previous && previous.dueDate === dueDate && previous.dueTime === dueTime ? previous.notified : false
  };
  if (previous) tasks = tasks.map(task => task.id === previous.id ? updated : task);
  else tasks.push(updated);
  if (storage.save(tasks)) { clearForm(); render(); checkReminders(); }
});
$('cancelEdit').onclick = clearForm;
$('exportTasks').onclick = () => {
  const blob = new Blob([JSON.stringify(tasks, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url; link.download = 'taskflow-backup.json'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
$('importTasks').onchange = async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!Array.isArray(data) || !data.every(item =>
      typeof item.title === 'string' && typeof item.dueDate === 'string' &&
      typeof item.dueTime === 'string' && ['low','medium','high'].includes(item.priority)))
      throw Error('invalid');
    if (!confirm('وظایف فعلی با فایل پشتیبان جایگزین شوند؟')) return;
    tasks = data.map((item, index) => ({...item, id: String(item.id || Date.now() + '-' + index), notified: !!item.notified}));
    if (storage.save(tasks)) { clearForm(); render(); checkReminders(); }
  } catch { alert('فایل پشتیبان معتبر نیست.'); }
  finally { event.target.value = ''; }
};
window.addEventListener('focus', checkReminders);
document.addEventListener('visibilitychange', () => { if (!document.hidden) checkReminders(); });
window.addEventListener('storage', event => {
  if (event.key === 'tasks') { tasks = storage.load(); render(); checkReminders(); }
});
render(); checkReminders(); setInterval(checkReminders, 30000);
