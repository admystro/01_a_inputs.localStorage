import { apiUrl, getData } from "./api/getData.js";
import { tasksListHtml } from "./utils/elements.js";
import { viewTaskItem } from "./utils/utils.js";

// Масив задач користувача
export const taskList = await getData(apiUrl.tasks)

// Чистимо перед виводом
tasksListHtml.innerHTML = '';

// Перебираємо задачі і виводимо до сторінку
taskList.forEach((taskItem) => {

  // вивели задачу в список
  tasksListHtml.innerHTML += viewTaskItem(taskItem);
})