import home from "../controllers/home.controller";
import tasks from "../controllers/tasks.controller";
import tasksCompleted from "../controllers/taskCompleted.controller";
import friends from "../controllers/friends.controller";
import landing from "../controllers/landing.controller";
let container = document.getElementById("root");

const router = (route) => {
  container.innerHTML = "";
  switch (route) {
    case "#/":
      return container.appendChild(landing());
    case "#/Home":
      return container.appendChild(home());
    case "#/Tasks":
      return container.appendChild(tasks());
    case "#/Taks_Completed":
      return container.appendChild(tasksCompleted());
    case "#/Friends":
      return container.appendChild(friends());
  }
};
export { router };
