import Project from "./project";
import ProjectList from "./projectList";

function removeForm() {
  const form = document.querySelector(".project-form");
  if (form) {
    form.remove();
  }
}

function createProjectContainer(projectName) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  projectContainer.textContent = projectName;

  // projectContainer.addEventListener('mouseover', );

  // projectContainer.addEventListener('mouseleave', );

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

function addProject(e) {
  e.preventDefault();
  const projectName = this.querySelector(".project-name-input").value;
  ProjectList.addProject(Project(projectName));
  removeForm();
  renderProjectList();
}

export default function appendProjectForm() {
  if (document.querySelector(".project-form")) return;

  const projectHolder = document.querySelector(".project-holder");

  const form = document.createElement("form");
  form.classList.add("project-form");

  const projectNameInput = document.createElement("input");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("required", "true");
  projectNameInput.setAttribute("placeholder", "Project name:");
  projectNameInput.classList.add("project-name-input");
  form.appendChild(projectNameInput);

  const buttonHolder = document.createElement("div");
  buttonHolder.classList.add("project-button-holder");

  const buttonApply = document.createElement("input");
  buttonApply.setAttribute("type", "submit");
  buttonApply.setAttribute("value", "Apply");
  buttonApply.classList.add("project-button-apply");
  buttonHolder.appendChild(buttonApply);

  const buttonCancel = document.createElement("input");
  buttonCancel.setAttribute("type", "button");
  buttonCancel.setAttribute("value", "Cancel");
  buttonCancel.classList.add("project-button-cancel");
  buttonCancel.addEventListener("click", removeForm);
  buttonHolder.appendChild(buttonCancel);

  form.addEventListener("submit", addProject);
  form.appendChild(buttonHolder);

  projectHolder.appendChild(form);
}
