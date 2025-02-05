// Функція дял виводу задачі на сторінку
export function viewTaskItem(task) {
  const htmlTask = `<li>${task}<button class="delete">✖</button></li>`;
  return (task) ? htmlTask : '';
}

// Зберігаємо дані в localstorage
export function localSave(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

// Отримуємо значення з localstorage
export function localGet(key) {
  return JSON.parse(localStorage.getItem(key));
}