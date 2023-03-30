export default function TaskList() {
  const taskList = [];

  const getList = () => taskList;

  const getTaskByName = (taskname) =>
    taskList.filter((task) => task.getTitle() === taskname)[0];

  const addTask = (task) => {
    if (!getTaskByName(task.getTitle())) taskList.push(task);
  };

  const setTaskTitle = (task, title) => {
    if (!getTaskByName(title)) task.setTitle(title);
  };

  const removeByName = (taskName) => {
    const neededTask = getTaskByName(taskName);
    const index = taskList.indexOf(neededTask);
    taskList.splice(index, 1);
  };

  return {
    getList,
    addTask,
    removeByName,
    getTaskByName,
    setTaskTitle,
  };
}
