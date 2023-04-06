import './style.css';
import { rearrangeIndex, checkboxfun } from './modules/functionality.js';
import addingNewTask from './modules/addingNewTask.js';
import deletingTask from './modules/deletingTask.js';

const listContainer = document.querySelector('.items_list');
const inputText = document.querySelector('#input_text');
const addBtn = document.querySelector('.submit_btn');
const clearAllBtn = document.querySelector('.completed_all');

// Adding new task;

let tasks = [];

if (localStorage.getItem('to-do') === null) {
  tasks = [];
} else {
  tasks = JSON.parse(localStorage.getItem('to-do'));
}
const setLocalStorage = () => {
  localStorage.setItem('to-do', JSON.stringify(tasks));
};
const renderList = () => {
  listContainer.innerHTML = '';
  let html = '';
  tasks.forEach((task, i) => {
    html += `<div class="items" id = "${i}">
        <li>
          <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
          ${task.description}
        </li>
        <div class="icons">
        <i id="edit${i}" class="fas fa-edit hidden"></i>
        <i  id = "trash${i}" class="fas fa-trash-alt hidden"></i>
        <i id = "ellipsis" class="fas fa-ellipsis-v"></i>
        </div>
      </div>`;
    listContainer.innerHTML = html;
  });
};
renderList();
rearrangeIndex(tasks);

const items = document.querySelectorAll('.items');
const itemsDelAndEdit = () => {
  items.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      document.querySelector(`#trash${i}`).classList.toggle('hidden');
      document.querySelector(`#edit${i}`).classList.toggle('hidden');

      if (e.target.closest('.fa-trash-alt')) {
        const index = e.target.closest('.fa-trash-alt').parentNode.parentNode.id;

        deletingTask(index, tasks);
        setLocalStorage(tasks);
        document.location.reload();
      }
      if (e.target.closest('.fa-edit')) {
        const li = e.target.closest('.fa-edit').parentNode.previousElementSibling;
        inputText.value = li.textContent.trim();
        const index = li.parentNode.id;
        deletingTask(index, tasks);
      }
    });
  });
};
itemsDelAndEdit();
// Add items to list,
const checkbox = document.querySelectorAll('.checkbox');
checkboxfun(checkbox, tasks);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addingNewTask(tasks, inputText.value, false);
  rearrangeIndex(tasks);
  renderList();
  setLocalStorage();
  checkboxfun(checkbox, tasks);
  inputText.value = '';
  document.location.reload();
});

const filteredTasks = () => {
  tasks = tasks.filter((task, i) => task.completed === false);
  rearrangeIndex(tasks);
  setLocalStorage();
  renderList();
};
clearAllBtn.addEventListener('click', () => {
  filteredTasks();
  document.location.reload();
});