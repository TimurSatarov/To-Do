const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const newTaskInput = document.getElementById('new-task-input');

let tasks = JSON.parse(localStorage.getItem('task'))||[];
renderTasks();
addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskName = newTaskInput.value.trim();
    if (taskName) {
      addTask(taskName);
      newTaskInput.value = '';
      newTaskInput.focus();
    }
  });
taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const taskIndex = event.target.getAttribute('data-index');
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }
  });

  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
      const taskIndex = event.target.parentElement.getAttribute('data-index');
      tasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }
  })
  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
      const taskIndex = event.target.parentElement.getAttribute('data-index');
      tasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }
  });

function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const taskElement = document.createElement('li');
      taskElement.innerText = task.name;
      taskElement.setAttribute('data-index', index);
      if (task.completed) {
        taskElement.classList.add('completed');
      }
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.classList.add('delete-button');
      taskElement.appendChild(deleteButton);
      taskList.appendChild(taskElement);
    });
}