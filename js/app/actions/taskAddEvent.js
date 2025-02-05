import { apiUrl, postData } from "../api/getData.js";
import { taskList } from "../config.js";
import { taskInput, tasksListHtml } from "../utils/elements.js";
import { viewTaskItem } from "../utils/utils.js";

export function taskAddEvent() {

  // беремо назву задачі від користовачат
  const task = taskInput.value;

  // Перевіряємо чи взагалі є задача
  if (task) {

    // почитити інпут
    taskInput.value = '';

    // Перевіряємо масив на дублікат
    const exist = taskList.findIndex(taskExist => taskExist == task.name)

    // Добавляємо задачу тільки якщо її немає в масиві
    if (exist === -1) {

      // нові задачі
      const newTask = {
        name: task,
      }

      // Добавити задачу до БД
      postData(apiUrl.tasks, newTask);

      // Добавляємо до html новий запис
      tasksListHtml.insertAdjacentHTML('beforeend', viewTaskItem(newTask))
    }
  }
}
