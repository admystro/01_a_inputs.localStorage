import { tasksListHtml } from "./utils/elements.js";
import { localGet, viewTaskItem } from "./utils/utils.js";

// Масив задач користувача
export const taskList = localGet('taskList') ?? [];

// Перебираємо задачі і виводимо до сторінку
taskList.forEach((taskItem) => {

  // вивели задачу в список
  tasksListHtml.innerHTML += viewTaskItem(taskItem);
})