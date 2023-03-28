import del from "../images/delete.svg";
import ProjectList from "./projectList";

function deleteProject() {
  ProjectList.removeByName(this.parentElement.textContent);
  renderProjectList();
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

  projectContainer.addEventListener("mouseover", renderDeleteButton);

  projectContainer.addEventListener("mouseleave", removeDeleteButton);

  return projectContainer;
}

function renderProjectList() {
    const projectHolder = document.querySelector(".project-holder");
  
    while (projectHolder.firstChild) {
      projectHolder.removeChild(projectHolder.firstChild);
    }
  
    ProjectList.getList().forEach((project) => {
      projectHolder.appendChild(createProjectContainer(project.getTitle()));
    });
  }

export default renderProjectList;
