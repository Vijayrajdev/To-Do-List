const taskInput = document.querySelector('.input-text');
const addButton = document.querySelector('.add-button');
const taskListConatiner = document.querySelector('.task-list-container');


const list = () => {
    return (
        `<div class="checkmark-container">
                  <input class="checkmark" type="checkbox" unchecked />
                  <span class="checkmark"></span>
                </div>`
    )
};


addButton.addEventListener('click', () => {
    let inputValue = taskInput.value;
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    taskListConatiner.appendChild(element)
})

