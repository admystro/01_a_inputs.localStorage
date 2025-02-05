import { taskList } from "../config.js";
import { taskInput, tasksListHtml } from "../utils/elements.js";
import { localSave, viewTaskItem } from "../utils/utils.js";

export function taskAddEvent() {

  // беремо назву задачі від користовачат
  const task = taskInput.value;

  // почитити інпут
  taskInput.value = ''

  // Перевіряємо чи взагалі є задача
  if (task) {

    // Перевіряємо масив на дублікат
    const exist = taskList.findIndex(taskExist => taskExist == task)

    // Добавляємо задачу тільки якщо її немає в масиві
    if (exist === -1) {

      // Добавити задачу до масива
      taskList.push(task)

      // Чистимо список перед виводом
      tasksListHtml.innerHTML = ''

      // Перебираємо задачі і виводимо до сторінку
      taskList.forEach((taskItem) => {

        // вивели задачу в список
        tasksListHtml.innerHTML += viewTaskItem(taskItem);
      })

      // Запам'ятовуємо задачі
      localSave('taskList', taskList);
    }
  }
}