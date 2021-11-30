const main = document.querySelector(".main");
const input = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".todo-form");

const regEx = /^[a-zA-Z0-9 ]{2,15}$/;

main.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;

  if (target.type === "submit" || target.type === "input") {
    if (valid(input, regEx)) {
      createTodoItem(input, todoList);
      return;
    } else {
      inValid(input, regEx);
      return
    }
  }
});

input.addEventListener("input", () => {
  if (valid(input, regEx)) {
    return;
  } else {
    inValid(input, regEx);
    return
  }
});

const valid = (props, reg) => {
  if (reg.test(props.value)) {
    props.style.color = "green";
    props.style.border = "2px solid green";
    return true;
  }
};

const inValid = (props, reg) => {
  if (!reg.test(props.value)) {
    props.style.color = "red";
    props.style.border = "2px solid red";
    return false;
  }
};

const createTodoItem = (input, list) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList = "todo";

  const todoItem = document.createElement("li");
  todoItem.innerText = input.value;
  todoItem.classList = "todo-item";
  todoDiv.append(todoItem);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "&#9745;";
  completedButton.classList = "completed-button";
  todoDiv.append(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "&#10006;";
  trashButton.classList = "trash-button";
  todoDiv.append(trashButton);

  list.append(todoDiv);
  input.value = "";
};

todoList.addEventListener("click", (e) => {
  let target = e.target;

  if (target.classList[0] === "completed-button") {
    setStateTodos(target);
  } else if (target.classList[0] === "trash-button") {
    trashTodo(target);
  }
});

const setStateTodos = (target) => {
  const parent = target.parentElement;
  if (parent) {
    parent.classList.toggle("green");
  }
};

const trashTodo = (target) => {
  const parent = target.parentElement;
  parent.remove();
};
