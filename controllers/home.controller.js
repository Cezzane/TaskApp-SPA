import homeView from "./views/home.html";
const Tasks = require("./Tasks/Tasks");
const UI = require("./Interface/UI");
export default () => {
  const div = document.createElement("div");
  div.innerHTML = homeView;
  div.classList.add("home");

  div.querySelector(".taskForm").addEventListener("submit", (e) => {
    /*Obtencion de Valores Input*/
    const id = Tasks.incrementId();
    console.log(id);
    const title = document.getElementById("taskTitle").value;
    //Instaciacion
    const task = new Tasks(title, id);
    const ui = new UI();
    ui.addTasks(task);
    ui.resetForm();
    e.preventDefault();
  });
  const card = div.querySelector(".task-area");
  card.addEventListener("click", (e) => {
    const ui = new UI();
    console.log("works");
    ui.deleteTask(e.target);
    ui.doneTask(e.target);
  });
  return div;
};
