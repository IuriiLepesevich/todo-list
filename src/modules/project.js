import TaskList from "./taskList";

export default function Project(title) {
  const projectTitle = title;
  const taskList = TaskList();

  const getTitle = () => projectTitle;

  const getTaskList = () => taskList;

  return {
    getTitle,
    getTaskList,
  };
}
