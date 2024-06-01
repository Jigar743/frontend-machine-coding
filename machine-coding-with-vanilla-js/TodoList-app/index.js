import { editTodoPair } from "./EditTodoPair.js";

class Todo {
  constructor() {
    this.input = document.getElementById("input");
    this.button = document.getElementById("addTodo-btn");
    this.todosList = document.getElementById("todoLists");
    this.todos = [];
    this.isTodoEditing = false;
    this.editingTodoPair = null;
  }

  addTodo() {
    const inputValue = this.input.value.trim();
    console.log({ inputValue });
    if (inputValue === "") return;

    if (this.isTodoEditing) {
      this.todos[this.editingTodoPair.idx] = inputValue;
      this.isTodoEditing = false;
      this.renderTodos(this.todos);
      this.input.value = "";
      return;
    }

    this.todos.push(inputValue);
    this.renderTodos(this.todos);
    this.input.value = "";
  }

  renderTodos(todos) {
    const editTododFxn = this.editTodo.bind(this);
    const deleteTododFxn = this.deleteTodo.bind(this);

    // console.log({ todos: this.todos });

    todos.forEach((todo, index) => {
      const todoElement = document.createElement("div");
      todoElement.classList.add("todo__item");

      const todoText = document.createElement("span");
      todoText.classList.add("todo__text");
      todoText.innerText = todo;

      const todoDelete = document.createElement("button");
      todoDelete.classList.add("todo__delete");
      todoDelete.innerText = "Delete";
      todoDelete.addEventListener("click", () => {
        deleteTododFxn(index);
      });

      const todoEdit = document.createElement("button");
      todoEdit.classList.add("todo__edit");
      todoEdit.innerText = "Edit";
      todoEdit.addEventListener("click", () => {
        editTododFxn(index);
      });

      const todoActions = document.createElement("div");
      todoActions.classList.add("todo__actions");

      todoActions.appendChild(todoDelete);
      todoActions.appendChild(todoEdit);

      todoElement.appendChild(todoText);
      todoElement.appendChild(todoActions);

      this.todosList.appendChild(todoElement);
    });
  }

  deleteTodo(idx) {
    console.log({ idx });
    this.todos = this.todos.filter((_, index) => index !== idx);
    this.renderTodos(this.todos);
  }

  editTodo(idx) {
    console.log({ idx });
    this.input.value = this.todos[idx];
    this.isTodoEditing = true;
    this.editingTodoPair = new editTodoPair(this.todos[idx], idx);
  }
}

const todos = new Todo();

document.getElementById("addTodo-btn").addEventListener("click", () => {
  todos.addTodo();
});
