import "./style/style.css";
import createPage from "./modules/page";
import { fillProjectListFromLocalStorage } from "./modules/localStorage";
import renderProjectList from "./modules/projectContainer";

const body = document.querySelector("body");
body.appendChild(createPage());

fillProjectListFromLocalStorage();
renderProjectList();