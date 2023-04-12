import addingNewTask from '../src/modules/addingNewTask.js';
import deletingTask from '../src/modules/deletingTask.js';

describe('Checking Adding and Deleting task', () => {
  const tasks = [];
  test('Check adding new task function', () => {
    expect(addingNewTask(tasks, 'This is the task one!', false, 0)).toEqual([
      {
        description: 'This is the task one!',
        completed: false,
        index: 0,
      },
    ]);
  });
});
