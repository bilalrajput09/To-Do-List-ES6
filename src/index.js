import './style.css';

const toDoTasks = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete the To-Do-List project',
    completed: false,
    index: 1,
  },
];
const listContainer = document.querySelector('.items_list');

const renderList = () => {
  let html = '';
  toDoTasks.forEach((task, i) => {
    html = `<div class="items">
        <li>
          <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
          ${task.description}
        </li>
        <i class="fas fa-trash-alt hidden"></i>
        <i class="fas fa-ellipsis-v"></i>
      </div>`;
    listContainer.insertAdjacentHTML('beforebegin', html);
  });
};
renderList();
