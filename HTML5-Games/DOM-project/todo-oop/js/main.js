const todo_list = document.querySelector('.todo-list')
const todo_input = document.querySelector("#todo-input");
const btn_add = document.querySelector("#btn-add");

class Todo {
    constructor(title, status) {
        this.id = this.createId();
        this.title = title;
        this.status = status;
    }
    createId() {
        return Math.floor(Math.random() * 100000);
    }
}

class Todos {
    constructor() {
        this.todos = [
            new Todo("Đi ăn tối", true),
            new Todo("Học lập trình Javascript", false),
            new Todo("Đi chơi", true)
        ]
    }
    render() {
        todo_list.innerHTML = "";

        if(this.todos.length == 0) {
            todo_list.innerHTML = '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
            return
        } 

        for (let i = 0; i < this.todos.length; i++) {
            const t = this.todos[i];
            todo_list.innerHTML += `
                <div class="todo-item ${t.status ? `active-todo` : ``}">
                    <div class="todo-item-title">
                        <input type="checkbox" ${t.status ? `checked` : ``} onclick="toggleStatus(${t.id})">
                        <p>${t.title}</p>
                    </div>
                    <div class="option">
                        <button class="btn btn-update" onclick="updateTodo(${t.id})">
                            <img src="./img/pencil.svg" alt="icon">
                        </button>
                        <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                            <img src="./img/remove.svg" alt="icon">
                        </button>
                    </div>
                </div>
            `;
        }
    }

    add(todo) {
        this.todos.push(todo)
        this.render()
    }

    delete(id) {
        for(let i = 0; i < this.todos.length; i++) {
            if(id == this.todos[i].id) {
                this.todos.splice(i, 1)
            }
        }
        this.render()
    }

    update(id, title) {
        if(this.isUpdate) {
            for(let i = 0; i < this.todos.length; i++) {
                if(id == this.todos[i].id) {
                    this.todos.title = title
                }
            }
            this.render()
        }
    }

    toggle(id) {
        for(let i = 0; i < this.todos.length; i++) {
            if(id == this.todos[i].id) {
                this.todos[i].status = !this.todos[i].status
            }
        }
        this.render()
    }
}

let todos = new Todos();
todos.render();

// Thêm công việc
btn_add.addEventListener('click', function() {
    
    let todoTitle = todo_input.value;
    if(todoTitle == "") {
        alert("Nội dung không được để trống");
        return
    }

    let newTodo = new Todo(todoTitle, false)

    todos.add(newTodo);
    todo_input.value = "";
})

function toggleStatus(id) {
    todos.toggle(id);
}

function deleteTodo(id) {
    todos.delete(id);
}

function updateTodo(id) {
    let title
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            title = todos[i].title;
        }
    }

    btn_add.innerText = "CẬP NHẬT";

    todo_input.value = title;
    todo_input.focus();

    idUpdate = id;
    isUpdate = true;
}