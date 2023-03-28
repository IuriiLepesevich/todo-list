export default function Project(title) {
  const projectTitle = title;
  const todo = [];

  const getTitle = () => projectTitle;

  const getTodo = () => todo;

  const addTask = (task) => todo.push(task);

  const removeTask = (task) => {
    const index = todo.indexOf(task);
    todo.splice(index, 1);
  };

  return {
    getTitle,
    getTodo,
    addTask,
    removeTask,
  };
}
