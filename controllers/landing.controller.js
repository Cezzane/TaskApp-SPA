import landingView from "./views/Landing.html";
export default () => {
  const div = document.createElement("div");
  div.innerHTML = landingView;
  return div;
};
