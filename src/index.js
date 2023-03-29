import "./style/style.css";
import createPage from "./modules/page";
import renderProjectList from "./modules/projectContainer"; // Extra line for debugging
import { renderProjectPage } from "./modules/projectPage"; // Extra line for debugging
import ProjectList from "./modules/projectList"; // Extra line for debugging

const body = document.querySelector("body");
body.appendChild(createPage());

renderProjectList(); // Extra line for debugging
renderProjectPage(ProjectList.getProjectByName('Example')); // Extra line for debugging