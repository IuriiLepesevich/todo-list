import createAddButton from "./addProjectButton";

export default function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(createAddButton());

  const line = document.createElement("div");
  line.classList.add("line");
  menu.appendChild(line);

  const projectHolder = document.createElement("div");
  projectHolder.classList.add("project-holder");
  menu.appendChild(projectHolder);

  return menu;
}
