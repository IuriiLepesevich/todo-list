const ProjectList = (() => {
  const projects = [];

  const getList = () => projects;

  const addProject = (project) => {
    if (!projects.some((elem) => elem.getTitle() === project.getTitle()))
      projects.push(project);
  };

  const removeByName = (projectName) => {
    const neededProject = projects.filter(
      (project) => project.getTitle() === projectName
    )[0];
    const index = projects.indexOf(neededProject);
    projects.splice(index, 1);
  };

  return {
    getList,
    addProject,
    removeByName,
  };
})();

export default ProjectList;
