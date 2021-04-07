// add task pop up to visible

togglePopUpWindow = () => {
    let btnAdd = document.querySelector(".btn-add-task")
    let btnSave = document.querySelector(".btn-save-task")
    let btnCancel = document.querySelector(".btn-cancel-task")
    let popWindowElement = document.querySelector(".add-task-pop-notVisible")
    popWindowElement.classList.toggle("add-task-pop-visible")

    btnAdd.classList.toggle("btn-add-task-Hide")
    btnSave.classList.toggle("btn-save-task-Hide")
    btnCancel.classList.toggle("btn-cancel-task-Hide")
    saveTask()
}

toggleCancelWindow = () => {
    let btnAdd = document.querySelector(".btn-add-task")
    let btnSave = document.querySelector(".btn-save-task")
    let btnCancel = document.querySelector(".btn-cancel-task")
    let popWindowElement = document.querySelector(".add-task-pop-notVisible")
    popWindowElement.classList.toggle("add-task-pop-visible")

    btnAdd.classList.toggle("btn-add-task-Hide")
    btnSave.classList.toggle("btn-save-task-Hide")
    btnCancel.classList.toggle("btn-cancel-task-Hide")
}

// Save the input task

saveTask = () => {
    let taskInput = document.getElementById("new-task-text-input").value
    let popWindowElement = document.querySelector(".add-task-pop-notVisible")
    if (!popWindowElement.classList.contains("add-task-pop-visible")) {

        if(taskInput.value === ''){
            alert("Task input cannot be empty!")
        } else {
            alert("Task added!")
            addNewTask()
            document.getElementById("new-task-text-input").value = ""
        }

        // alert("Task added!")
        // addNewTask()
        // document.getElementById("new-task-text-input").value = ""
    }
}

// add a new task

addNewTask = () => {
    let taskInputBox = document.getElementById("new-task-text-input")
    let parentDiv = document.querySelector(".item-task")
    let itemDiv = document.createElement("div")
    let itemButtonsDiv = document.createElement("div")

    let itemUnorderedList = document.createElement("ul")
    let itemList = document.createElement("li")
    let itemListDate = document.createElement("li")
    let itemCompletionDate = document.getElementById("task-completion-date")
    let itemMoveButton = document.createElement("span") 
    let itemRemoveButton = document.createElement("span")
    // <span class="material-icons-outlined">remove_circle</span>

    let taskText = taskInputBox.value
    let itemTaskTextNode = document.createTextNode(taskText)
    let itemDateTextNode = document.createTextNode("Target Completion Date: " + itemCompletionDate.value)

    itemDiv.classList.add("task-item-child")  
    itemButtonsDiv.classList.add("task-item-buttons-child")
    itemList.classList.add("itemTaskText")
    itemMoveButton.classList.add("material-icons")
    itemRemoveButton.classList.add("material-icons")
    itemListDate.classList.add("item-date-text-node")

    itemMoveButton.setAttribute("onclick", "moveTaskToOngoing()")
    // itemRemoveButton.setAttribute("onclick", "testFunction()") 
    itemRemoveButton.setAttribute("onclick", "this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)")
    
    itemMoveButton.innerHTML = "next_plan"
    itemRemoveButton.innerHTML = "remove_circle"

    parentDiv.appendChild(itemDiv)

    itemDiv.appendChild(itemUnorderedList)
    itemUnorderedList.appendChild(itemList)
    itemUnorderedList.appendChild(itemListDate)
    itemDiv.appendChild(itemButtonsDiv)
    itemButtonsDiv.appendChild(itemRemoveButton)
    itemButtonsDiv.appendChild(itemMoveButton)
    

    itemList.appendChild(itemTaskTextNode)
    itemListDate.appendChild(itemDateTextNode)
    // itemMoveButton.appendChild(itemArrow)

}

moveTaskToOngoing = () => {

    alert("Still in progress and will add a function to move the task to a new coloumn")

}
