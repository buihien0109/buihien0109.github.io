let todo_list = document.querySelector(".todo-list");
let input = document.getElementById("todo-input");
let btn_add = document.getElementById("btn-add");
let todo_option_item = document.querySelectorAll(".todo-option-item input");
let todo_checkbox_item = document.querySelectorAll(".todo-item-title input");

let isUpdate = false; // Kiểm tra xem khi nào công việc update
let idUpdate = ""; // ID của công việc đang thực hiện update là gì?

// Tự động render ID của công việc ngẫu nhiên không trùng nhau
function create_UUID() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
        c
    ) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}

// Danh sách công việc // Được fix cứng ban đầu
// TODO : Danh sách công việc sau này được lưu vào local storage trong máy người dùng
let todos = []
// let todos = [{
//         id: create_UUID(),
//         title: "Đi sang nhà chị rồi đi thăm người ốm",
//         status: true,
//     },
//     {
//         id: create_UUID(),
//         title: "Làm bài tập Javascript (Phần Array +  String)",
//         status: false,
//     },
//     {
//         id: create_UUID(),
//         title: "Dạy Javascript cho lớp Foundation Programming 4",
//         status: true,
//     },
// ];

btn_add.addEventListener("click", function () {
    let todo = input.value;
    if (todo == "") {
        toastr.warning("Công việc không được để trống!");
        return;
    }
    if (isUpdate) {
        // Update công việc
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == idUpdate) {
                todos[i].title = todo;
            }
        }

        btn_add.innerText = "Thêm";
        isUpdate = false;
        idUpdate = "";
    } else {
        // Thêm công viêc mới
        let newTodo = {
            id: create_UUID(),
            title: todo,
            status: false,
        };
        todos.push(newTodo);
    }

    input.value = "";
    // renderUI(todos);
    addToLocalStorage(todos)
});

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
        console.log('abc');
        todo_list.innerHTML = `<p class="todos-empty">Không có công việc nào trong danh sách</p>`;
        return;
    }

    // Duyệt danh sách công việc cần làm và render ra ngoài màn hình
    for (let i = 0; i < newTodos.length; i++) {
        todo_list.innerHTML += `
            <div class="todo-item ${newTodos[i].status ? "active-todo" : ""}">
                <div class="todo-item-title">
                    ${
                      newTodos[i].status
                        ? `<input type="checkbox" checked onclick="toggleStatusTodo('${newTodos[i].id}')"></input>`
                        : `<input type="checkbox" onclick="toggleStatusTodo('${newTodos[i].id}')"></input>`
                    }
                    <p>${newTodos[i].title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="updateTodo('${
                      newTodos[i].id
                    }')">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo('${
                      newTodos[i].id
                    }')">
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
        // renderUI(todos);
        addToLocalStorage(todos)
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

// Thay đổi status của 1 công việc thì render lại UI
function toggleStatusTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status;
        }
    }
    // renderUI(todos);
    addToLocalStorage(todos)
}

// Xóa công việc thì render lại UI
function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1);
        }
    }
    // renderUI(todos);
    addToLocalStorage(todos)
}

// Update công việc thì render lại UI
function updateTodo(id) {
    let title = "";
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            title = todos[i].title;
        }
    }

    btn_add.innerText = "Cập nhật";
    input.value = title;
    input.focus();

    isUpdate = true;
    idUpdate = id;
}

function init() {
    getFromLocalStorage()
    console.log(todos.length);
    // renderUI(todos);
}

function addToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
    renderUI(todos);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem("todos");
    if (reference) {
        todos = JSON.parse(reference);
        renderUI(todos);
    }
}

window.onload = init();