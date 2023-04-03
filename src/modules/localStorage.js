import ProjectList from "./projectList";
import Project from "./project";
import Task from "./task";

function addProjectListLocalStorage() {
  const projectListCopy = [];

  ProjectList.getList().forEach((project) => {
    const copyProject = {
      title: project.getTitle(),
      taskList: [],
    };
    project
      .getTaskList()
      .getList()
      .forEach((task) => {
        const copyTask = {
          title: task.getTitle(),
          description: task.getDescription(),
          dueDate: task.getDueDate(),
          priority: task.getNumberedPriority(),
          isChecked: task.getIsChecked(),
        };
        copyProject.taskList.push(copyTask);
      });
    projectListCopy.push(copyProject);
  });

  localStorage.setItem(
    `projectList`,
    JSON.stringify({
      list: projectListCopy,
    })
  );
}

function fillProjectListFromLocalStorage() {
  const savedProjectList = localStorage.getItem("projectList");
  if (!savedProjectList) return;
  JSON.parse(savedProjectList).list.forEach((project) => {
    const tempProject = Project(project.title);
    project.taskList.forEach((task) => {
      const tempTask = Task(
        task.title,
        task.description,
        task.dueDate,
        task.priority
      );
      tempTask.setIsChecked(task.isChecked);
      tempProject.getTaskList().addTask(tempTask);
    });
    ProjectList.addProject(tempProject);
  });
}

export { addProjectListLocalStorage, fillProjectListFromLocalStorage };
