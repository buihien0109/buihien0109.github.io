const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

let isDraw = false;
let color = 'black'
let size = 1
let x,y

let btnColors = document.querySelectorAll(".color_btn")
let btnSizes = document.querySelectorAll(".size_btn")
let btnReset = document.querySelector('.btn_reset')
let btnEraser = document.querySelector('.btn_eraser')

btnColors.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let colorValue = this.getAttribute('color')
        color = colorValue
    })
})

btnSizes.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let sizeValue = this.getAttribute('size')
        size = Number(sizeValue)
    })
})

btnReset.addEventListener('click', function() {
    c.clearRect(0,0, canvas.width, canvas.height)
})

btnEraser.addEventListener('click', function() {
    color = "white";
    size = 100;
})

canvas.onmousedown = (event) => {
    isDraw = true;
    x = event.offsetX;
    y = event.offsetY;
    c.strokeStyle = color;
    c.lineWidth = size;
  }

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

canvas.onmouseup = () => {
    isDraw = false;
}