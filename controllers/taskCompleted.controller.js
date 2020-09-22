import taskCompletedView from "./views/taskCompleted.html";
export default () => {
  const div = document.createElement("div");
  div.innerHTML = taskCompletedView;
  return div;
};
