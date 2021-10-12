const addButton = document.querySelector('.add-button');
const deleteButton = document.querySelector('.delete-button');
const taskInput = document.querySelector('.input-text');
const taskArea = document.querySelector('.task-list-container');


addButton.addEventListener('click', () => {
    let input = taskInput.value;
    let template = `<div class="checkmark-container">
                  <input class="checkmark" type="checkbox" unchecked />
                  <span class="checkmark"></span>
                </div>
                <div class="content-container">
                  <p>${input}</p>
                  <ion-icon
                    class="delete-button"
                    name="close-outline"
                  ></ion-icon>`
    let element = document.createElement('li');
    element.innerHTML = template;
    taskArea.appendChild(element);
})

deleteButton.addEventListener('click', (e) => {
    taskArea.removeChild
})