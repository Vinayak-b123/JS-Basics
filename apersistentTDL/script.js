let tasks_list = []

function saveItems() {
    localStorage.setItem("tasks_list", JSON.stringify(tasks_list))
}

function loadItems() {
    tasks_list = JSON.parse(localStorage.getItem("tasks_list"))
}

function createTask(){
    tasks_list.push(document.querySelector("#task-input").value)
    saveItems()
    displayList()
    document.querySelector("#task-input").value = ''
    

}

function displayList() {
    loadItems()    
    let code = ""
    for (let i = 0; i< tasks_list.length; i++){
        code += `
        <div class="task" id="tasks-${i}">
            ${tasks_list[i]}
            <button class="delete" onclick="deleteTask(${i})">Delete</button>
        </div>
        `
    }
    
    document.querySelector(".container").innerHTML = code   

}

function deleteTask(index){
    tasks_list.splice(index,1)
    saveItems()
    displayList()
    
}

document.querySelector("#task-input").addEventListener("keydown", ()=>{
    if (event.key === "Enter") {  // Checks if the pressed key is "Enter"
        createTask()
        event.target.value = "";
    }
})

document.addEventListener("DOMContentLoaded", () => {
    loadItems()
    displayList()
})