import Project from "./project";
import ProjectList from "./projectList";
import renderProjectList from "./projectContainer"; // eslint-disable-line import/no-cycle
import getCurrentProject from "./getCurrentProject";
import { renderProjectPage } from "./projectPage";

function removeForm() {
  const form = document.querySelector(".project-form");
  if (form) {
    form.remove();
  }
}

function addProject(e) {
  e.preventDefault();
  const projectName = this.querySelector(".project-name-input").value;
  ProjectList.addProject(Project(projectName));
  removeForm();
  renderProjectList();
}

function editProject(targetedProject) {
  const isCurrentProject = (getCurrentProject() === targetedProject);
  const projectName = this.querySelector(".project-name-input").value;
  ProjectList.setProjectTitle(targetedProject, projectName);
  removeForm();
  renderProjectList();
  if(isCurrentProject) {
    renderProjectPage(targetedProject);
  }
}

ProjectList.addProject(Project("Example")); // Extra line for debugging

export default function appendProjectForm(evt, targetedProject) {
  if (document.querySelector(".project-form")) return;

  evt.stopPropagation();

  const projectHolder = document.querySelector(".project-holder");

  const form = document.createElement("form");
  form.classList.add("project-form");

  const projectNameInput = document.createElement("input");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("required", "true");
  projectNameInput.setAttribute("maxlength", "8");
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

  if (targetedProject) {
    projectNameInput.value = targetedProject.getTitle();
    form.addEventListener("submit", editProject.bind(form, targetedProject));
  } else {
    form.addEventListener("submit", addProject);
  }

  form.appendChild(buttonHolder);

  if (targetedProject) {
    const currentContainer = projectHolder.querySelector(
      `#${targetedProject.getTitle()}`
    );
    currentContainer.after(form);
  } else {
    projectHolder.appendChild(form);
  }

  form.querySelector(".project-name-input").focus();
}
