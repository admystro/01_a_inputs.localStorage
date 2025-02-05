const taskInput = document.getElementById('taskInput');
const taskAdd = document.getElementById('taskAdd');
const tasksListHtml = document.getElementById('tasksList')

// Масив задач користувача
const taskList = localGet('taskList') ?? [];

// Перебираємо задачі і виводимо до сторінку
taskList.forEach((taskItem) => {

    // вивели задачу в список
    tasksListHtml.innerHTML += viewTaskItem(taskItem);
})

// Добавлення задачі
taskAdd.onclick = () => {

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

// Функція дял виводу задачі на сторінку
function viewTaskItem(task) {
    const htmlTask = `<li>${task}<button class="delete">✖</button></li>`;
    return (task) ? htmlTask : '';
}

// Зберігаємо дані в localstorage
function localSave(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

// Отримуємо значення з localstorage
function localGet(key) {
    return JSON.parse(localStorage.getItem(key));
}