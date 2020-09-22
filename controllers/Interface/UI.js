class UI {
  showTasks(task) {
    const taskList = document.querySelector(".task-area");
    const taskCard = document.createElement("div");
    taskCard.classList.add("col-4");
    taskCard.innerHTML = `<div class='card  taskCard'>
        <h4 class="card-title">${task.title}</h4>
        
    </div>`;
    taskList.appendChild(taskCard);
  }
}
module.exports = UI;
