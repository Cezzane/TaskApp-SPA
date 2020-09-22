import friendsView from "./views/friends.html";
export default () => {
  const div = document.createElement("div");
  div.innerHTML = friendsView;
  return div;
};
