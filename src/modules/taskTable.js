import del from "../images/delete.svg";
import edit from "../images/edit.svg";
import getCurrentProject from "./getCurrentProject";
import renderTaskForm from "./taskForm"; // eslint-disable-line import/no-cycle

function clearTable() {
  const table = document.querySelector(".task-table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

function removeTask() {
  const currentProject = getCurrentProject();
  currentProject.getTaskList().removeByName(this.parentElement.id);
  renderTableData(); // eslint-disable-line no-use-before-define
}

function editTask() {
  const currentProject = getCurrentProject();
  const currentTask = currentProject
    .getTaskList()
    .getTaskByName(this.parentElement.id);
  renderTaskForm(currentTask);
}

function createTableRow(type, task) {
  const cells = ["Title", "Description", "DueDate", "Priority"];

  const tableRow = document.createElement("tr");
  if (task) {
    tableRow.classList.add("table-row");
    tableRow.setAttribute("id", `${task.getTitle()}`);
  } else tableRow.classList.add("table-heading");

  cells.forEach((cellType) => {
    const cell = document.createElement(`${type}`);
    cell.classList.add(`${cellType}`);
    if (type === "th") {
      cell.textContent = cellType;
    } else {
      const textFunction = `get${cellType}`;
      cell.textContent = task[textFunction]();
      if (cellType === "Priority")
        tableRow.classList.add(task.getPriority().toLowerCase());
    }
    tableRow.appendChild(cell);
  });

  const delCell = document.createElement(`${type}`);
  delCell.classList.add("change");
  if (type === "th") {
    delCell.textContent = "Change";
  } else {
    const deleteTaskButton = document.createElement("img");
    deleteTaskButton.setAttribute("src", del);
    deleteTaskButton.classList.add("task-delete-svg");
    deleteTaskButton.addEventListener("click", removeTask);
    delCell.appendChild(deleteTaskButton);

    const editTaskButton = document.createElement("img");
    editTaskButton.setAttribute("src", edit);
    editTaskButton.classList.add("task-edit-svg");
    editTaskButton.addEventListener("click", editTask);
    delCell.appendChild(editTaskButton);
  }
  tableRow.appendChild(delCell);

  return tableRow;
}

function renderTableData() {
  clearTable();
  const table = document.querySelector("table");
  const currentProject = getCurrentProject();

  currentProject
    .getTaskList()
    .getList()
    .forEach((task) => {
      table.appendChild(createTableRow("td", task));
    });
}

function createTaskTable() {
  const table = document.createElement("table");
  table.classList.add("task-table");
  table.setAttribute("cellspacing", "0");

  const colgroup = document.createElement("colgroup");

  const col1 = document.createElement("col");
  col1.setAttribute("span", "1");
  col1.setAttribute("style", "width: 20%");
  colgroup.appendChild(col1);

  const col2 = document.createElement("col");
  col2.setAttribute("span", "1");
  col2.setAttribute("style", "width: 40%");
  colgroup.appendChild(col2);

  const col3 = document.createElement("col");
  col3.setAttribute("span", "1");
  col3.setAttribute("style", "width: 20%");
  colgroup.appendChild(col3);

  const col4 = document.createElement("col");
  col4.setAttribute("span", "1");
  col4.setAttribute("style", "width: 10%");
  colgroup.appendChild(col4);

  const col5 = document.createElement("col");
  col5.setAttribute("span", "1");
  col5.setAttribute("style", "width: 10%");
  colgroup.appendChild(col5);

  table.appendChild(colgroup);
  table.appendChild(createTableRow("th"));

  return table;
}

export { renderTableData, createTaskTable };
