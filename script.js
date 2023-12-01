// Arreglo para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push(taskText);
    taskInput.value = '';
    displayTasks();
  }
}

// Función para mostrar las tareas
function displayTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => deleteTask(index);

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Función para eliminar una tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Mostrar las tareas al cargar la página
displayTasks();
