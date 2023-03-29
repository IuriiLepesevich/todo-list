import del from "../images/delete.svg";
import ProjectList from "./projectList";
import { clearMainPage, renderProjectPage } from "./projectPage";

function deleteProject(e) {
  e.stopPropagation();
  const projectName = this.parentElement.textContent;
  ProjectList.removeByName(projectName);
  renderProjectList(); // eslint-disable-line no-use-before-define

  const projectHeading = document.querySelector(".project-name");
  if (projectHeading) {
    if (projectName === projectHeading.textContent) {
      clearMainPage();
    }
  }
}

function checkForDeleteButton(container) {
  return container.querySelector(".project-delete");
}

function renderDeleteButton(e) {
  const targetedContainer = e.target;
  if (checkForDeleteButton(targetedContainer)) return;

  const deleteButton = document.createElement("img");
  deleteButton.setAttribute("src", del);
  deleteButton.classList.add("project-delete");
  deleteButton.addEventListener("click", deleteProject);

  targetedContainer.appendChild(deleteButton);
}

function removeDeleteButton(e) {
  const targetedContainer = e.target;
  if (!checkForDeleteButton(targetedContainer)) return;

  targetedContainer.querySelector(".project-delete").remove();
}

function createProjectContainer(projectName) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  projectContainer.textContent = projectName;

  projectContainer.addEventListener(
    "click",
    renderProjectPage.bind(this, ProjectList.getProjectByName(projectName))
  );

  projectContainer.addEventListener("mouseover", renderDeleteButton);
  projectContainer.addEventListener("mouseleave", removeDeleteButton);

  return projectContainer;
}

export default function renderProjectList() {
  const projectHolder = document.querySelector(".project-holder");

  while (projectHolder.firstChild) {
    projectHolder.removeChild(projectHolder.firstChild);
  }

  ProjectList.getList().forEach((project) => {
    projectHolder.appendChild(createProjectContainer(project.getTitle()));
  });
}
