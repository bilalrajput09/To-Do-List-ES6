import addingNewTask from "../src/modules/addingNewTask.js";
import deletingTask from "../src/modules/deletingTask.js";

describe("Checking Adding and Deleting task", () => {
  let tasks = [];
  test("Check adding new task function", () => {
    expect(addingNewTask(tasks, "This is the task one!", false, 0)).toEqual([
      {
        description: "This is the task one!",
        completed: false,
        index: 0,
      },
    ]);
  });

  test("Check deleting the task function", () => {
    expect(deletingTask(0, tasks)).toEqual([]);
  });
});
