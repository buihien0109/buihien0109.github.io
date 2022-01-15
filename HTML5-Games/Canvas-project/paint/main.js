const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

let isDraw = false; // Dùng để kiểm tra xem khi nào được vẽ
let color = 'black' // Màu vẽ mặc định là 'black'
let size = 2 // Kích thước mặc định của nét vẽ = 1
let x,y // Giá trị x,y để lưu vị trí con trỏ chuột

let btnColors = document.querySelectorAll(".color_btn")
let btnSizes = document.querySelectorAll(".size_btn")
let btnReset = document.querySelector('.btn_reset')
let btnEraser = document.querySelector('.btn_eraser')

// function có tác dụng remove class trong 1 danh sách node
const removeClass = (arr, className) => {
    arr.map(ele => ele.classList.remove(className))
}

// Duyệt qua tất cả các 'color_btn' để lắng nghe sự kiện Click
btnColors.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // remove tất cả class 'color_btn_active' trong color_btn
        removeClass(Array.from(btnColors),'color_btn_active')
        // add class 'color_btn_active' đến phần tử hiện tại được click
        this.classList.add('color_btn_active')
        // Lấy thuộc tính 'color' trong phần tử được click
        let colorValue = this.getAttribute('color')
        // Gán giá trị cho biến 'color' để thay đổi màu sắc
        color = colorValue
    })
})

// Tương tự với phần thay đổi thuộc tính kích thước của bút
btnSizes.forEach(function(btn) {
    btn.addEventListener('click', function() {
        removeClass(Array.from(btnSizes),'size_btn_active')
        this.classList.add('size_btn_active')
        let sizeValue = this.getAttribute('size')
        size = Number(sizeValue)
    })
})

// btn-reset lắng nghe sự kiện để xóa toàn bộ canvas
// Sử dụng hàm clearRect
btnReset.addEventListener('click', function() {
    c.clearRect(0,0, canvas.width, canvas.height)
})

// btn-eraser lắng nghe sự kiện để xóa nét vẽ
// Thực chất việc xóa là việc vẽ nét màu trắng đè lên các màu khác
// Tăng size của nét vẽ để xóa nhanh hơn
btnEraser.addEventListener('click', function() {
    color = "white";
    size = 100;
})


// offset: Khi click inside 1 thẻ div và output là tọa độ của điểm được click, nó có quan hệ với div được click
// onmousedown là sự kiện click chuột trên 1 phần tử

// Khi click vào canvas cần lấy vị trí của điểm được click dựa vào offsetX, offsetY
// đó là điểm đầu tiên mà mình cần vẽ
// Lưu tọa độ của điểm đó
canvas.onmousedown = (event) => {
    isDraw = true;
    x = event.offsetX;
    y = event.offsetY;
    c.strokeStyle = color;
    c.lineWidth = size;
}

// onmousemove là sự kiện di chuyển chuột
// vẽ từ điểm đầu tiên được click => điểm được di chuyển tới
// Sau đó lại cập nhật vị trí x,y của con trỏ chuột đang di chuyển tới, đồng thời vẽ lại đường
canvas.onmousemove = (event) => {
    if (isDraw) {
        c.beginPath();
        c.moveTo(x, y);
        c.lineCap = 'round';
        c.lineTo(event.offsetX, event.offsetY);
        c.stroke();

        x = event.offsetX;
        y = event.offsetY;
    }
}

// onmousemove là sự kiện nhả chuột ra
canvas.onmouseup = () => {
    isDraw = false;
}