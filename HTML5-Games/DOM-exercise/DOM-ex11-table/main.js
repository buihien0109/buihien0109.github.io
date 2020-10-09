// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Thêm class "table-bordered" cho <table>
const table = document.querySelector(".table");
table.classList.add("table-bordered");

// 2. Thêm class "bg-dark" cho <tr> đầu tiên
const tableHeading = document.querySelector(".table tr:first-child");
tableHeading.classList.add("bg-dark");

// 3. Thêm 1 hàng mới trong table với nội dung như sau : 'Nguyễn Ngọc' (@nhngoc97)
const newRow = document.createElement("tr");
["6", "Nguyễn", "Ngọc", "@nhngoc97"].forEach((textCol) => {
    const col = document.createElement("td");
    col.innerText = textCol;
    newRow.appendChild(col);
});
document.querySelector("table").appendChild(newRow);

// 4. Cập nhật "@hoang92" thành "@hoang1992" (hàng 3 - cột Nickname)
document.querySelector("table tr:nth-child(4) td:nth-child(4)")
    .innerText = "@hoang1992";
// 5. Di chuyển "Ngô Minh" lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.

const rosa = document.querySelector("table tr:nth-child(5)");
document.querySelector("table tr:nth-child(1)")
    .insertAdjacentElement("afterEnd", rosa);

Array.from(document.querySelectorAll("table tr td:nth-child(1")).forEach(
    (col, index) => (col.innerText = index + 1)
);

// 6. Đổi chỗ 2 cột "First" và "Nickname" cho nhau
Array.from(document.querySelectorAll("table tr")).forEach((row) => {
    const nickNameCol = row.querySelector("td:nth-child(4), th:nth-child(4)");
    const lastCol = row.querySelector("td:nth-child(3), th:nth-child(3)");
    const firstCol = row.querySelector("td:nth-child(2), th:nth-child(2)");

    lastCol.insertAdjacentElement("afterEnd", firstCol);
    lastCol.insertAdjacentElement("beforeBegin", nickNameCol);
});
// 7. Các row có index là số lẻ ( trừ hàng tiêu đề cột )thì có background = "#d8d8d8"
Array.from(document.querySelectorAll("table tr")).forEach(
    (row, index) => {
        if ((index + 1) % 2 === 0) {
            row.style.backgroundColor = "#d8d8d8";
        }
    }
);