import createPage from "./modules/page";
import "./style/style.css";

const body = document.querySelector("body");
body.appendChild(createPage());
