import createMenu from "./menu";

export default function createPage() {
  const container = document.createElement("div");
  container.setAttribute("id", "container");

  container.appendChild(createMenu());

  const main = document.createElement("div");
  main.classList.add("main");
  container.appendChild(main);

  return container;
}
