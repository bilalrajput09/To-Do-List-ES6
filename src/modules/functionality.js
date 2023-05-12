export const rearrangeIndex = (arrayOfObject) => {
  arrayOfObject.map((task, i) => {
    task.index = i + 1;
    return arrayOfObject;
  });
};

export const checkboxfun = (checkbox, arrayOfObject) => {
  checkbox.forEach((check, i) => {
    check.addEventListener('change', (e) => {
      if (e.target.checked) {
        e.target.closest('li').classList.add('checked');
      } else {
        e.target.closest('li').classList.remove('checked');
      }
      if (check.checked) arrayOfObject[i].completed = true;
      else arrayOfObject[i].completed = false;
    });
  });
};

const checkboxfunCompleted = (checkbox, arrayOfObject) => {
  checkbox.forEach((check, i) => {
    if (check.checked) arrayOfObject[i].completed = true;
    else arrayOfObject[i].completed = false;
  });
  return arrayOfObject;
};

export default checkboxfunCompleted;