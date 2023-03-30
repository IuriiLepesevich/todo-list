import ProjectList from "./projectList";

export default function getCurrentProject() {
  const currentProjectName =
    document.querySelector(".project-name").textContent;
  const currentProject = ProjectList.getProjectByName(currentProjectName);
  return currentProject;
}
