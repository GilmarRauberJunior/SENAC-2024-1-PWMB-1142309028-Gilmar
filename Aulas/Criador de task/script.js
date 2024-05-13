function createTask(){
    const task = document.getElementById("task").value;
    const checkTask = document.createElement("li");
    if(task.length < 10){
        alert("Digite uma tarefa válida");
    }else{
        checkTask.className = "listTask";
        checkTask.innerText = task;
        document.getElementById("tasksContainer").appendChild(checkTask);
    }
}