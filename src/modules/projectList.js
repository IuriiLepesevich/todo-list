const ProjectList = (() => {
  const projects = [];

  const getList = () => projects;

  const addProject = (project) => {
    if (!projects.some((elem) => elem.getTitle() === project.getTitle()))
      projects.push(project);
  };

  const getProjectByName = (projectname) =>
    projects.filter((project) => project.getTitle() === projectname)[0];

  const removeByName = (projectName) => {
    const neededProject = getProjectByName(projectName);
    const index = projects.indexOf(neededProject);
    projects.splice(index, 1);
  };

  return {
    getList,
    addProject,
    removeByName,
    getProjectByName,
  };
})();

export default ProjectList;
