// Bài tập phần Array

// Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số. Ví dụ:
// minNumbers([2, 1, 3]) => Kết quả trả về là 1

// Cách 1
// Ý tưởng : Gán giá trị bé nhất cho phần tử đầu tiên ở mảng
// Sau đó duyệt mảng nếu min > arr[i] thì gán giá trị arr[i] cho min lúc này giá trị min = arr[i]
function minNumbers(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
}

// Cách 2: sử dụng spread operator trong es6
function minNumbers(arr) {
    return Math.min(...arr)
}

// Cách 3: Sắp xếp mảng theo chiều giảm dần sau đó lấy phần tử đầu tiên
function minNumbers(arr) {
    return arr.sort(function(a,b) {
        return a-b
    })[0]
}

// Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
// max2Numbers([2, 1, 3, 4]) => Kết quả trả về là 3

// Cách 1: Loại bỏ các giá trị trùng nhau
// function maxNumbers lấy ra phần tử lớn nhất trong mảng
function maxNumbers(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

function removeElementByIndex(arr, index) {
    return arr.splice(index, index + 1)
}

function max2Numbers(arr) {
    let maxNum = maxNumbers(arr)
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == maxNum) {
            removeElementByIndex(arr, i)
        }
    }
    return maxNumbers(arr)
}

// Cách 2: Loại bỏ các giá trị trùng nhau sử dụng filter
function max2Numbers(arr) {
    let distinctArr = arr.filter((el, index) => arr.indexOf(el) == index) // Cách 1
    return distinctArr.sort(function (a, b) {
        return b - a
    })[1]
}

// Cách 3: Loại bỏ các giá trị trùng nhau sử dụng Set
function max2Numbers(arr) {
    let distinctArr = [...new Set(arr)] // Cách 2
    return distinctArr.sort(function (a, b) {
        return b - a
    })[1]
}


// Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']

// Sử dụng sort() method của array để sắp xếp
// Trong sort truyền vào 1 hàm để so sánh
function sortStudents(arr) {
    return arr.sort((a, b) => b.localeCompare(a));
}

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function sum() {
    let result = 0
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            result += i
        }
    }
    return result
}

// Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Cách 1: Tạo 1 mảng rỗng
// Duyệt mảng, lấy từng phần tử % 2, sau đó push giá trị dư ấy vào mảng rỗng
function modulo2(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(i % 2)
    }
    return result
}

// Cách 2: Sử dụng map
let modulo2 = (arr) => {
    return arr.map(ele => ele % 2)
}

// Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số

// [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].

// Cách 1 :
// Function getMaxLength có tác dụng trả về độ dài lớn nhất của 1 mảng
function getMaxLength(arr) {
    let maxLength = arr[0].length
    for(let i=0; i<arr; i++) {
        if(maxLength < arr[i].length) {
            maxLength = arr[i].length
        }
    }
    return maxLength
}

// Function getMaxLength có tác dụng so sánh từng phần tử của mảng
// phần tử nào có length == maxLength thì push phần tử đó vào mảng mới
function maxLengthOfArr(arr) {
    let result = []
    let maxLength = getMaxLength(arr)
    for(let i=0; i<arr; i++) {
        if(arr[i].length == maxLength) {
            result.push(arr[i])
        }
    }
    return result
}

// Cách 2: sử dụng ES6
// Dòng 1 : Lấy ra mảng danh sách độ dài của mảng
// Dòng 2: Lấy ra độ dài lớn nhất
// Dòng 3: Trả về mảng các phần tử có độ dài == độ dài lớn nhất
function maxLengthOfArr(arr) {
    let arrLength = arr.map(ele => ele.length)
    let maxLength = Math.max(...arrLength)
    return arr.filter(ele => ele.length == maxLength)
}

