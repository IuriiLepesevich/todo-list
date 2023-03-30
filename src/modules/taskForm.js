import Task from "./task";
import { renderTableData } from "./taskTable"; // eslint-disable-line import/no-cycle
import getCurrentProject from "./getCurrentProject";

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

function submitForm(targetTaskList, targetTask) {
  if(targetTaskList.target) {
    targetTaskList.preventDefault();
  }
  const currentProject = getCurrentProject();

  const taskTitle = this.querySelector(".task-title-input").value;
  const taskDescription = this.querySelector(".task-description-input").value;
  const taskDate = this.querySelector(".task-date-input").value;
  const taskPriority = this.querySelector(".task-priority-input").value;

  if (targetTaskList && targetTask && !targetTaskList.target) {
    targetTaskList.setTaskTitle(targetTask, taskTitle);
    targetTask.setDescription(taskDescription);
    targetTask.setDueDate(taskDate);
    targetTask.setPriority(taskPriority);
  } else {
    currentProject
      .getTaskList()
      .addTask(Task(taskTitle, taskDescription, taskDate, taskPriority));
  }

  removeForm();
  renderTableData();
}

export default function renderTaskForm(targetTaskList, targetTask) {
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

  if(targetTaskList && targetTask && !targetTaskList.target) {
    titleInput.value = targetTask.getTitle();
    descriptionInput.value = targetTask.getDescription();
    dateInput.value = targetTask.getDueDate();
    priorityInput.value = targetTask.getNumberedPriority();
  }

  const submitButton = document.createElement("input");
  submitButton.classList.add("task-priority-input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Add");
  form.appendChild(submitButton);

  form.addEventListener("submit", submitForm.bind(form, targetTaskList, targetTask));

  main.appendChild(createOverlay());
  main.appendChild(form);
}
