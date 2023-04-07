// Deleting from List
const deletingTask = (itemIndex, arrayOfObject) => {
  arrayOfObject.splice(itemIndex, 1);
  return arrayOfObject;
};

export default deletingTask;