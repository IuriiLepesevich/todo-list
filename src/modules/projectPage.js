function clearMainPage() {
  const main = document.querySelector("#main");
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function renderProjectPage(project) {
  const main = document.querySelector("#main");
  clearMainPage();

  const projectHeading = document.createElement("h1");
  projectHeading.classList.add("project-heading");
  projectHeading.textContent = project.getTitle();

  main.appendChild(projectHeading);
}

export { clearMainPage, renderProjectPage };
