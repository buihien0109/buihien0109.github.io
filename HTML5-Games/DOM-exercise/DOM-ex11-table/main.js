// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Thêm class "table-bordered" cho <table>
const table = document.querySelector('.table')
table.classList.add('table-bordered')

// 2. Thêm class "thead-dark" cho <thead>
const tableHeading = document.querySelector('.table tr:first-child')
tableHeading.classList.add('bg-dark')

// 3. Thêm 1 hàng mới trong table với nội dung như sau : 'Sean Reyes' (@sreyes)
const newRow = document.createElement('tr');
['6', 'Sean', 'Reyes', '@sreyes'].forEach(textCol => {
    const col = document.createElement('td');
    col.innerText = textCol;
    newRow.appendChild(col);
});
document.querySelector('table').appendChild(newRow);

// 4. Cập nhật "Leona Dixon's handle" thành "@dixonl" (hàng 3 - cột Handle)
document.querySelector('table tr:nth-child(4) td:nth-child(4)').innerText = "@dixonl"

// 5. Di chuyển "Rosa Reed" lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.
const rosa = document.querySelector('table tr:nth-child(5)');
document.querySelector('table tr:nth-child(1)').insertAdjacentElement('afterEnd', rosa)
Array.from(document.querySelectorAll('table tr td:nth-child(1')).forEach((col, index) => col.innerText = index + 1)

// 6. Đổi chỗ 2 "First" và "Handle" cho nhau
Array.from(document.querySelectorAll('table tr')).forEach(row => {
    const handleCol = row.querySelector('td:nth-child(4), th:nth-child(4)')
    const indexCol = row.querySelector('td:nth-child(1), th:nth-child(1)')
    indexCol.insertAdjacentElement('afterEnd', handleCol)
})

// 7. Các hàng có index là số lẻ thì có background = "#f2f2f2"
Array.from(document.querySelectorAll('table tr')).forEach((row, index) => {
    if((index + 1) % 2 === 0) {
        row.style.backgroundColor = '#f2f2f2'
    }
})