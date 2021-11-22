const main = document.querySelector('.main')
const input = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')

main.addEventListener('click', (e) => {
    
    let target = e.target

    if (target.type === 'submit') {
        e.preventDefault()
        if(input.value.length === 0) {
            input.value = 'Empty'
        } else {
            createTodoItem(input, todoList)
        }

        
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
    input.value = ''
}

todoList.addEventListener('click', (e) => {
    let target = e.target
    

    if(target.classList[0] === 'completed-button') {
        setStateTodos(target)
    } else if (target.classList[0] === 'trash-button') {
        trashTodo(target)
    }
    
})

const setStateTodos = (target) => {

    const parent = target.parentElement
    if(parent) {
        parent.classList.add('green')
    } 
    target.addEventListener('click', () => {
        parent.style.background = 'rgb(243, 227, 4)'
    })
}

const trashTodo = (target) => {
    const parent = target.parentElement
    const timeout = 800

    parent.classList = 'fall'

    setTimeout(() => {
        parent.remove()
    }, timeout)
}