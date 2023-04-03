export default function Task(title, description, dueDate, priority) {
  const priorities = ["Low", "Medium", "High"];

  let taskTitle = title;
  let taskDescription = description;
  let taskDueDate = dueDate;
  let taskPriority = priority;
  let isChecked = false;

  const getTitle = () => taskTitle;
  const getDescription = () => taskDescription;
  const getDueDate = () => taskDueDate;
  const getNumberedPriority = () => taskPriority;
  const getPriority = () => priorities[taskPriority];
  const getIsChecked = () => isChecked;

  const setTitle = (value) => {
    taskTitle = value;
  };
  const setDescription = (value) => {
    taskDescription = value;
  };
  const setDueDate = (value) => {
    taskDueDate = value;
  };
  const setPriority = (value) => {
    taskPriority = value;
  };
  const setIsChecked = (value) => {
    isChecked = value;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNumberedPriority,
    getIsChecked,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setIsChecked,
  };
}
