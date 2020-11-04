const todo_list = document.querySelector(".todo-list");
const todo_input = document.querySelector("#todo-input");
const btn_add = document.querySelector("#btn-add");

let todo_option_item = document.querySelectorAll(".todo-option-item input");
let todo_checkbox_item = document.querySelectorAll(".todo-item-title input");

let idUpdate = "";
let isUpdate = false;


// Tự động render ID của công việc ngẫu nhiên không trùng nhau
function create_UUID() {
    let uuid = Math.floor(Math.random() * 10000);
    return uuid;
}

// Danh sách công việc // Được fix cứng ban đầu
// TODO : Danh sách công việc sau này được lưu vào local storage trong máy người dùng
let todos = [{
        id: create_UUID(),
        title: "Đi ăn tối với bạn",
        status: true,
    },
    {
        id: create_UUID(),
        title: "Làm bài tập về nhà",
        status: false,
    },
    {
        id: create_UUID(),
        title: "Học lập trình Game",
        status: true,
    },
];


// Thêm công việc
btn_add.addEventListener('click', function() {
    
    let todoTitle = todo_input.value;
    if(todoTitle == "") {
        alert("Nội dung không được để trống");
        return
    }

    if(isUpdate) {
        // update
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idUpdate) {
                todos[i].title = todoTitle;
            }
        }

        btn_add.innerText = "Thêm";
        isUpdate = false;
        idUpdate = "";

    } else {
        let newTodo = {
            id : create_UUID(),
            title : todoTitle,
            status : false
        }
    
        todos.push(newTodo);
    }

    renderUI(todos);
    todo_input.value = "";
})

// Render Todo
function renderUI(arr) {
    todo_list.innerHTML = "";

    // Kiểm tra nếu người dùng lựa chọn
    // 1 - Xem tất cả các công việc
    // 2 - Những công việc chưa hoàn thành
    // 3 - Những công việc đã hoàn thành
    let optionSelected = getOptionSelected();
    let newTodos;
    switch (optionSelected) {
        case 1:
            newTodos = [...arr];
            break;
        case 2:
            newTodos = arr.filter((todo) => todo.status === false);
            break;
        case 3:
            newTodos = arr.filter((todo) => todo.status === true);
            break;
        default:
            newTodos = [...arr];
            break;
    }

    // Kiểm tra khi trong danh sách không còn công việc nào cả
    if (newTodos.length == 0) {
        todo_list.innerHTML = `<p class="todos-empty">Không có công việc nào trong danh sách</p>`;
        return;
    }

    // Duyệt danh sách công việc cần làm và render ra ngoài màn hình
    for (let i = 0; i < newTodos.length; i++) {
        const t = newTodos[i];
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


// Kiểm tra khi có sự thay đổi trong nút xem công việc thì render lại UI
todo_option_item.forEach((btn) => {
    btn.addEventListener("change", function () {
        renderUI(todos);
    });
});

// Lấy giá trị trong 1 ô radio
function getOptionSelected() {
    for (let i = 0; i < todo_option_item.length; i++) {
        if (todo_option_item[i].checked) {
            return parseInt(todo_option_item[i].value);
        }
    }
}

function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status;
        }
    }
    renderUI(todos);
}

function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i,1)
        }
    }
    renderUI(todos);
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




function init() {
    renderUI(todos);
}

window.onload = init;