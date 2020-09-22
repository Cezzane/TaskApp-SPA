import { router } from "../router/index.router";
require("../src/main.scss");
router(window.location.hash);
window.addEventListener("hashchange", () => {
  console.log(window.location.hash);
  router(window.location.hash);
});
