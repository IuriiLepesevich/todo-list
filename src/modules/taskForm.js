import Task from "./task";
import TaskList from "./taskList";
import Project from "./project";
import ProjectList from "./projectList";
import { renderTableData } from "./taskTable";

function removeForm() {
  const overlay = document.querySelector("#overlay");
  if (overlay) overlay.remove();

  const form = document.querySelector(".task-form");
  if (form) form.remove();
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  overlay.addEventListener("click", removeForm);

  return overlay;
}

function submitForm(e) {
  e.preventDefault();

  const currentProjectName =
    document.querySelector(".project-name").textContent;
  const currentProject = ProjectList.getProjectByName(currentProjectName);

  const taskTitle = this.querySelector('.task-title-input').value;
  const taskDescription = this.querySelector('.task-title-input').value;
  const taskDate = this.querySelector('.task-date-input').value;
  const taskPriority = this.querySelector('.task-priority-input').value;

  currentProject.getTaskList().addTask(Task(taskTitle, taskDescription, taskDate, taskPriority));

  removeForm();

  renderTableData();
}

export default function renderTaskForm() {
  const main = document.querySelector("#main");

  const form = document.createElement("form");
  form.classList.add("task-form");

  const titleInput = document.createElement("input");
  titleInput.classList.add("task-title-input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("required", "true");
  titleInput.setAttribute("placeholder", "Title");
  form.appendChild(titleInput);

  const descriptionInput = document.createElement("input");
  descriptionInput.classList.add("task-description-input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("required", "true");
  descriptionInput.setAttribute("placeholder", "Description");
  form.appendChild(descriptionInput);

  const dateInput = document.createElement("input");
  dateInput.classList.add("task-date-input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("required", "true");
  dateInput.setAttribute("placeholder", "Date");
  form.appendChild(dateInput);

  const priorityHolder = document.createElement("div");
  priorityHolder.classList.add("priority-holder");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority: ";
  priorityHolder.appendChild(priorityLabel);

  const priorityInput = document.createElement("select");
  priorityInput.classList.add("task-priority-input");
  priorityInput.setAttribute("id", "priority");
  priorityInput.setAttribute("required", "true");

  const priority1 = document.createElement("option");
  priority1.setAttribute("value", 0);
  priority1.textContent = "Low";
  priorityInput.appendChild(priority1);
  const priority2 = document.createElement("option");
  priority2.setAttribute("value", 1);
  priority2.textContent = "Medium";
  priorityInput.appendChild(priority2);
  const priority3 = document.createElement("option");
  priority3.setAttribute("value", 2);
  priority3.textContent = "High";
  priorityInput.appendChild(priority3);

  priorityHolder.appendChild(priorityInput);
  form.appendChild(priorityHolder);

  const submitButton = document.createElement("input");
  submitButton.classList.add("task-priority-input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Add");
  form.appendChild(submitButton);

  form.addEventListener("submit", submitForm);

  main.appendChild(createOverlay());
  main.appendChild(form);
}
