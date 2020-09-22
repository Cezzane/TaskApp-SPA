import homeView from "./views/home.html";
const Tasks = require("./Tasks/Tasks");
const UI = require("./Interface/UI");
export default () => {
  const div = document.createElement("div");
  div.innerHTML = homeView;
  div.classList.add("home");

  const taskForm = div
    .querySelector(".taskForm")
    .addEventListener("submit", (e) => {
      const title = document.getElementById("taskTitle").value;
      const description = document.getElementById("taskDescription").value;
      e.preventDefault();
      const task = new Tasks(title, description);
      const ui = new UI();
      ui.showTasks(task);
      console.log(task);
    });
  return div;
};
