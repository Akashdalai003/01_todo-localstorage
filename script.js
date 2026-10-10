document.addEventListener("DOMContentLoaded", () => {
  const todoINput = document.getElementById("todo-input");//used to type a task in the input area
  const addTaskButton = document.getElementById("add-task-btn");//it adds the task in the tasklist
  const todoList = document.getElementById("todo-list");//displays all ur tasks

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoINput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask)
    todoINput.value = ""; //clear input
    console.log(tasks);
  });

  function renderTasks(task) {
    const li=document.createElement('li')
    li.setAttribute('data-id',task.id)
    if(task.completed) li.classList.add('completed')
    li.innerHTML=`
    <span>${task.text}</span>
    <button>Delete</button>
    `
    li.addEventListener('click',(e)=>{
      if(e.target.tagName==='BUTTON') return 
      task.completed=!task.completed
      li.classList.toggle('completed')
      saveTasks()
    })

    li.querySelector('button').addEventListener('click',(e)=>{
      e.stopPropagation()//prevent toggle from firing
      tasks=tasks.filter(t => t.id !==task.id)
      li.remove()
      saveTasks()
    })  

    todoList.appendChild(li)
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
