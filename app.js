const addButton = document.querySelector('.add-button');
const taskInput = document.querySelector('.input-text');
const taskArea = document.querySelector('.task-list-container');

let chores = [];

addButton.addEventListener('click', () => {
  let input = taskInput.value;

  if (chores.includes(input)) {
    console.log('Already existed');
  } else {
    chores.push(input)
    let template = `<div class="checkmark-container">
                  <input class="checkmark" type="checkbox" unchecked />
                  <span class="checkmark"></span>
                </div>
                <div class="content-container">
                  <p>${input}</p>
                  <ion-icon
                    class="delete"
                    name="close-outline"
                  ></ion-icon>`
    let element = document.createElement('li');
    element.innerHTML = template;
    taskArea.appendChild(element);
  }
  const deleteButton = document.querySelector('.delete')
  console.log(deleteButton);
  deleteButton.addEventListener('click', (e) => {
   
  })
})

