const task = document.getElementById('taskInput');
const addBtn = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click' , ()=>{
    console.log(task.value);
    const li = document.createElement("li")
    li.textContent = task.value
    console.log(li);
    
    taskList.appendChild(li)
})
