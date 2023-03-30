const ProjectList = (() => {
  const projects = [];

  const getList = () => projects;

  const getProjectByName = (projectname) =>
    projects.filter((project) => project.getTitle() === projectname)[0];

  const addProject = (project) => {
    if (!getProjectByName(project.getTitle())) projects.push(project);
  };

  const removeByName = (projectName) => {
    const neededProject = getProjectByName(projectName);
    const index = projects.indexOf(neededProject);
    projects.splice(index, 1);
  };

  const setProjectTitle = (project, title) => {
    if (!getProjectByName(title)) project.setTitle(title);
  };

  return {
    getList,
    addProject,
    removeByName,
    getProjectByName,
    setProjectTitle,
  };
})();

export default ProjectList;
