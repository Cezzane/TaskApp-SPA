class UI {
  addTasks(task) {
    const taskList = document.querySelector(".task-area");
    const taskCard = document.createElement("div");
    taskCard.classList.add("col-4");
    taskCard.innerHTML = `<div class='card  p-2 taskCard'>
        <h4 class="card-title text-dark  "> ${task.id}. ${task.title}</h4>
        <div class="btn-group justify-content-between"> 
        <button class='btn btn-danger delete  col-3' name='delete' > <i class="fas fa-trash"> </i></button>
        <button class='btn btn-success done  name='done' > <i class="fas fa-check"> </i> Done</button>
        </div>
    </div>`;

    const taskToDo = document.getElementById("tasks-todo");
    taskToDo.innerText = `${task.id}`;
    taskList.appendChild(taskCard);
  }
  resetForm() {
    document.getElementById("taskForm").reset();
  }
  deleteTask(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
      console.log("delete");
    }
  }
  doneTask(element) {
    if (element.name === "done") {
      element.parentElement.parentElement.parentElement.remove();
      console.log("delete");
    }
  }
}
module.exports = UI;
