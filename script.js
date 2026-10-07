document.addEventListener('DOMContentLoaded',()=>{
  const todoINput=document.getElementById("todo-input")
const addTaskButton=document.getElementById("add-task-btn")
const todoList=document.getElementById("todo-list")

let tasks=JSON.parse(localStorage.getItem('tasks')) || []

tasks.forEach(task=>renderTasks(task))

addTaskButton.addEventListener('click',()=>{
  const taskTest=todoINput.value.trim()
  if(taskTest==="") return;

  const newTask={
    id:Date.now(),
    text:taskTest,
    completed: false
  }
  tasks.push(newTask)
  saveTasks()
  todoINput.value=""//clear input
  console.log(tasks);
  
})

function renderTasks(task) {
  console.log(task);
  
  
}

function saveTasks() {
  localStorage.setItem("tasks",JSON.stringify(tasks))
  
}
})