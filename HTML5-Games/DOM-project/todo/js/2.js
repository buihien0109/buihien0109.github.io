const todo_list = document.querySelector(".todo-list");


// Tự động render ID của công việc ngẫu nhiên không trùng nhau
function create_UUID() {
    let uuid = Math.floor(Math.random() * 10000);
    return uuid;
}

// Danh sách công việc // Được fix cứng ban đầu
// TODO : Danh sách công việc sau này được lưu vào local storage trong máy người dùng
let todos = [{
        id: create_UUID(),
        title: "Đi sang nhà chị rồi đi thăm người ốm",
        status: true,
    },
    {
        id: create_UUID(),
        title: "Làm bài tập Javascript (Phần Array +  String)",
        status: false,
    },
    {
        id: create_UUID(),
        title: "Dạy Javascript cho lớp Foundation Programming 4",
        status: true,
    },
];


// Render Todo
function renderUI(arr) {
    todo_list.innerHTML = "";

    if(arr.length == 0) {
        todo_list.innerHTML = '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
        return
    } 

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        todo_list.innerHTML += `
            <div class="todo-item ${t.status ? `active-todo` : ``}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.status ? `checked` : ``}>
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                </div>
            </div>
        `;
    }
}


function init() {
    renderUI(todos);
}

window.onload = init;