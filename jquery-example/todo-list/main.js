const todos = [
    { id: 1, title: "Di da bong", status: false },
    { id: 2, title: "Lam bai tap", status: true },
    { id: 3, title: "Nau com", status: true },
];

// Generate Id
const nextId = () => {
    if (todos.length === 0) {
        return 1
    }

    return todos[todos.length - 1].id + 1;
}

// Render todo
const renderTodos = todos => {
    $("#list").html("");

    let html = "";
    todos.forEach(t => {
        html += `
            <li>
                <span class="${t.status ? "active" : ""}">${t.title}</span>
                <button onclick="editTodo(${t.id})">Edit</button>
                <button onclick="deleteTodo(${t.id})">Delete</button>
            </li>
        `
    });

    $("#list").html(html);
}

// Handle add todo
$("#btn-add").click(() => {
    addTodo();
})

$("#todo-input").keydown((e) => {
    if (e.key === "Enter") {
        addTodo();
    }
})

const addTodo = () => {
    const title = $("#todo-input").val();
    if (!title) {
        alert("title can't not empty");
        return;
    }

    const newTodo = {
        id: nextId(),
        title,
        status: false
    }

    todos.push(newTodo);
    renderTodos(todos);

    $("#todo-input").val("")
    alert("Add todo successfully")
}

// Handle edit todo
const editTodo = id => {
    let currentTodo = todos.find(todo => todo.id === id);
    const title = window.prompt("Edit title", currentTodo.title);

    if (title === null) return;
    if (!title) {
        alert("title can't not empty");
        return;
    }

    currentTodo.title = title;
    renderTodos(todos);

    alert("Edit todo successfully")
}

// Handle delete todo
const deleteTodo = id => {
    const isDelete = window.confirm("You are delete");
    if (isDelete) {
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        renderTodos(todos);

        alert("Delete todo successfully")
    }
}



renderTodos(todos);