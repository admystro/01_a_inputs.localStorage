import { taskAdd } from "./app/utils/elements.js";
import { taskAddEvent } from "./app/actions/taskAddEvent.js";

// Добавлення задачі
taskAdd.onclick = taskAddEvent;
