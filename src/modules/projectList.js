const ProjectList = (function () {
  const projects = [];

  const getList = () => projects;

  const addProject = (project) => projects.push(project);

  const removeByName = (projectName) => {
    const neededProject = projects.filter(
      (project) => project.getTitle() === projectName
    );
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
