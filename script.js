const main = document.querySelector('.main')
const input = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')

main.addEventListener('click', (e) => {
    
    let target = e.target

    if (target.type === 'submit') {
        e.preventDefault()
        createTodoItem(input, todoList)
        
    }
    
    
})

const createTodoItem = (input, list) => {

    const todoDiv = document.createElement('div')
    todoDiv.classList = 'todo'

    const todoItem = document.createElement('li')
    todoItem.innerText = input.value
    todoItem.classList = 'todo-item'
    todoDiv.append(todoItem)

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '&#9745;'
    completedButton.classList = 'completed-button'
    todoDiv.append(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '&#10006;'
    trashButton.classList = 'trash-button'
    todoDiv.append(trashButton)

    list.append(todoDiv)
    input.value = ' '
}