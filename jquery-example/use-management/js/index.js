const users = getDataFromLocalStorage("users") ?? [];
// const users = [
//     { id: 1, name: "Bui Hien", email: "hien@gmail.com", phone: "0987654333" },
//     { id: 2, name: "Thu Hang", email: "hang@gmail.com", phone: "0987654222" },
//     { id: 3, name: "Minh Duy", email: "duy@gmail.com", phone: "0987654111" }
// ]

const renderUsers = (arr) => {
    $("tbody").html("");

    let html = "";
    arr.forEach(u => {
        html += `
            <tr>
                <td>${u.id}</td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.phone}</td>
                <td>
                    <a
                        href="./detail.html?id=${u.id}"
                        class="btn btn-success"
                        >Xem chi tiết</a
                    >
                    <button class="btn btn-danger">
                        Xóa
                    </button>
                </td>
            </tr>
        `
    });

    $("tbody").html(html);
}

renderUsers(users);