import add from "../images/add.svg";
import appendProjectForm from "./projectForm";

export default function createAddButton() {
  const addNew = document.createElement("div");
  addNew.classList.add("add-button");
  addNew.addEventListener("click", appendProjectForm);

  const addSvg = document.createElement("img");
  addSvg.classList.add("svg-holder");
  addSvg.setAttribute("src", add);
  addNew.appendChild(addSvg);

  const addText = document.createElement("span");
  addText.classList.add("add-new-text");
  addText.textContent = "Add New";
  addNew.appendChild(addText);

  return addNew;
}
