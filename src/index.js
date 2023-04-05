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
          <i class="far fa-square"></i>
          <i class="fas fa-check-circle hidden"></i>
          ${task.description}
        </li>
        <i class="fas fa-trash-alt hidden"></i>
        <i class="fas fa-ellipsis-v"></i>
      </div>`;
    listContainer.insertAdjacentHTML('beforebegin', html);
  });
};
renderList();
