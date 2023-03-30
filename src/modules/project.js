import TaskList from "./taskList";

export default function Project(title) {
  let projectTitle = title;
  const taskList = TaskList();

  const getTitle = () => projectTitle;

  const getTaskList = () => taskList;

  const setTitle = (value) => {
    projectTitle = value;
  };

  return {
    getTitle,
    getTaskList,
    setTitle,
  };
}
