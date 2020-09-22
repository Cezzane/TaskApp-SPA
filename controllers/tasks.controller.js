import taksView from "./views/tasks.html";
export default () => {
  const div = document.createElement("div");
  div.innerHTML = taksView;

  return div;
};
