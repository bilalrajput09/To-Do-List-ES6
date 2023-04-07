// Adding in to list,
const addingNewTask = (array, description, completed = false, index) => {
  const newTask = {
    description,
    completed,
    index,
  };
  array.push(newTask);
  return array;
};
export default addingNewTask;
