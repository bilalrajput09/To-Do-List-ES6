import addingNewTask from '../src/modules/addingNewTask.js';
import deletingTask from '../src/modules/deletingTask.js';

describe('Checking Adding and Deleting task', () => {

  test('Check adding new task function', () => {

    const tasksArr = [{ description: "task1", completed: false, index: 0 },];
    const expected = [
      { description: "task1", completed: false, index: 0 },
      { description: "task2", completed: false, index: 1 }
    ];


    expect(addingNewTask(tasksArr, 'task2', false, 1)).toEqual(expected);
  });


});
