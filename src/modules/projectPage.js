import { createTaskTable, renderTableData } from "./taskTable";
import renderTaskForm from "./taskForm";

function clearMainPage() {
  const main = document.querySelector("#main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function renderProjectPage(project) {
  const main = document.querySelector("#main");
  clearMainPage();

  const projectHeading = document.createElement("div");
  projectHeading.classList.add("project-heading");

  const projectName = document.createElement("span");
  projectName.classList.add("project-name");
  projectName.textContent = project.getTitle();
  projectHeading.appendChild(projectName);

  const addNewTask = document.createElement("button");
  addNewTask.classList.add("add-new-task");
  addNewTask.textContent = "Add new task";
  addNewTask.addEventListener("click", renderTaskForm);
  projectHeading.appendChild(addNewTask);

  main.appendChild(projectHeading);

  main.appendChild(createTaskTable());

  renderTableData();
}

export { clearMainPage, renderProjectPage };
