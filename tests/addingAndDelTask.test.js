/** @jest-environment jsdom */
import addingNewTask from '../src/modules/addingNewTask.js';
import deletingTask from '../src/modules/deletingTask.js';
import checkboxfunCompleted from '../src/modules/functionality.js';
import filterCompletedTasks from '../src/modules/filterCompletedTasks.js';

describe('Checking Adding and Deleting task', () => {
  test('Check adding new task function', () => {
    const tasksArr = [{ description: 'task1', completed: false, index: 0 }];
    const expected = [
      { description: 'task1', completed: false, index: 0 },
      { description: 'task2', completed: false, index: 1 },
    ];

    expect(addingNewTask(tasksArr, 'task2', false, 1)).toEqual(expected);
  });

  test('Should delete one object from arr', () => {
    const tasksArr = [
      { description: 'task1', completed: false, index: 0 },
      { description: 'task2', completed: false, index: 1 },
    ];
    const expected = [{ description: 'task1', completed: false, index: 0 }];
    // deleting task function will take parameters:  index and array-of-object
    expect(deletingTask(1, tasksArr)).toEqual(expected);
  });
});

describe("a function for updating an item's 'completed' status.", () => {
  test('Checking the updating item status', () => {
    const tasksArr = [
      { description: 'task1', completed: false, index: 1 },
      { description: 'task2', completed: false, index: 2 },
    ];
    const expected = [
      { description: 'task1', completed: true, index: 1 },
      { description: 'task2', completed: false, index: 2 },
    ];

    document.body.innerHTML = `<ul class="items_list">
  <div class="items" id="0">
        <li class="checked">
          <input type="checkbox" class="checkbox" checked>
          task1
        </li>
      </div><div class="items" id="1">
        <li>
          <input type="checkbox" class="checkbox">
          task2
        </li>
    </div>
  </ul>`;

    const checkbox = document.querySelectorAll('.checkbox');
    const result = checkboxfunCompleted(checkbox, tasksArr);

    expect(result).toEqual(expected);
  });
});

describe('the Clear all completed function.', () => {
  test('Should filter the uncompleted objects and update the list', () => {
    const tasksArr = [
      { description: 'task1', completed: false, index: 1 },
      { description: 'task2', completed: true, index: 2 },
    ];
    const expected = [
      { description: 'task1', completed: false, index: 1 },
    ];

    const result = filterCompletedTasks(tasksArr);

    expect(result).toEqual(expected);
  });
});

describe('a function for editing the task description.', () => {
  test('editing tasks', () => {
    const html = `<div class="items" id = "1">
        <li class = "inputText1">
          <input type="checkbox" class="checkbox">
          task1
        </li>
        <div class="icons">
        <i id="edit" class="fas fa-edit hidden"></i>
        </div>
      </div>`;

    document.body.innerHTML = html;

    const edit = document.querySelector('#edit');

    const inputText = document.querySelector('.inputText1');

    const newText = 'Task1 New';

    inputText.textContent = newText;

    edit.click();

    expect(inputText.textContent).toBe(newText);
  });
});
