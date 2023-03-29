import ProjectList from "./projectList";

function clearTable() {
  const table = document.querySelector(".task-table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

function createTableRow(type, task) {
  const cells = ["Title", "Description", "DueDate", "Priority"];

  const rowHeading = document.createElement("tr");
  rowHeading.classList.add("table-heading");
  if (task) rowHeading.classList.add(`${task.getTitle()}`);

  cells.forEach((cellType) => {
    const cell = document.createElement(`${type}`);
    cell.classList.add(`${cellType}`);
    if (type === "th") {
      cell.textContent = cellType;
    } else {
      const textFunction = `get${cellType}`;
      cell.textContent = task[textFunction]();
    }
    rowHeading.appendChild(cell);
  });

  const delCell = document.createElement(`${type}`);
  delCell.classList.add("Delete");
  if (type === "th") {
    delCell.textContent = "Delete";
  } else {
    // do something
  }
  rowHeading.appendChild(delCell);

  return rowHeading;
}

function renderTableData() {
  clearTable();
  const table = document.querySelector("table");
  const currentProjectName =
    document.querySelector(".project-name").textContent;
  const currentProject = ProjectList.getProjectByName(currentProjectName);

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

  table.appendChild(createTableRow("th"));

  return table;
}

export { renderTableData, createTaskTable };
