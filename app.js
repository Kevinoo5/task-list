const form = document.querySelector("form")
const taskInput = document.querySelector("#task")
const taskList = document.querySelector("ul")
const taskTitle = document.querySelector("#deleteAll")

taskList.addEventListener("click", deleteTask)
form.addEventListener("submit", addTask)
taskTitle.addEventListener("click", deleteAll)
function addTask(event){
    console.log(taskInput.value)
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = "collection-item"
    const a = document.createElement("a")
    a.appendChild(document.createTextNode("X"))
    a.className = "blue-text text-darken-2 secondary-content"
    a.setAttribute("href", "#")
    li.appendChild(a)
    //add to list
    const ul = document.querySelector("ul")
    ul.appendChild(li)
    taskInput.value = ""

    event.preventDefault()
}

function deleteTask(event){
    if (event.target.textContent === "X"){
        if (confirm("Are you sure you want to delete this task?"))
        {
            event.target.parentElement.remove()
        }
    }
}

function deleteAll(event){
    if (event.target.textContent === "X"){
        if (confirm("Are you sure you want to delete all tasks?"))
        {
            while (taskList.firstChild){
                taskList.removeChild(taskList.firstChild)
            }
        }
    }
}