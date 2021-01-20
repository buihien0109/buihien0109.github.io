// Bài 1. Viết function kiểm tra 1 giá trị có nằm trong mảng hay không
// Ví dụ: checkElementExist([1,2,3,4], 4) => true
// Ví dụ: checkElementExist([1,2,3,4], 5) => false
function checkElementExist(arr, ele) {
    if (arr.indexOf(ele) != -1) {
        return true;
    } else {
        return false;
    }
}
console.log("=========== Bài 1 ===========");
console.log(checkElementExist([1, 2, 3, 4], 4));
console.log(checkElementExist([1, 2, 3, 4], 5));

// Bài 2. Viết function tìm ra số lớn thứ nhì trong mảng các số.
// Ví dụ: max2Numbers([2, 1, 3, 4]) => 3
function findMaxNumberArr(arr) {
    let maxNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

function max2Numbers(arr) {
    // Tìm số lớn nhất
    let maxNumber = findMaxNumberArr(arr);
    // Xóa số lớn nhất
    let newNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != maxNumber) {
            newNumber.push(arr[i]);
        }
    }
    // Tìm số lớn nhất trong mảng newNumber => là số lớn thứ 2 trong mảng arr
    let max2 = findMaxNumberArr(newNumber);
    return max2;
}
console.log("=========== Bài 2 ===========");
console.log(max2Numbers([2, 1, 4, 4, 3, 4]));

// Bài 3. Viết function để lấy một phần tử ngẫu nhiên từ một mảng
// Ví dụ: randomElement([3, 7, 9, 11]) => 3
// Ví dụ: randomElement([3, 7, 9, 11]) => 9
function randomElement(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log("=========== Bài 3 ===========");
console.log(randomElement([3, 7, 9, 11]));
console.log(randomElement([3, 7, 9, 11]));

// Bài 4. Cho 1 mảng các chuỗi. Viết function lọc ra các phần tử có độ dài lớn nhất.
// Ví dụ: findMaxLengthElement(["aba", "aa", "ad", "c", "vcd"]) => ["aba", "vcd"]
function findMaxLengthElement(arr) {
    let maxLength = arr[0].length;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == maxLength) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("=========== Bài 4 ===========");
console.log(findMaxLengthElement(["aba", "aa", "ad", "c", "vcd"]));

// Bài 5. Viết function để lấy một mảng bao gồm các phần tử xuất hiện trong cả hai mảng
// Ví dụ: similarity([1, 2, 3], [1, 2, 4]) => [1,2]
function similarity(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) != -1) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}
console.log("=========== Bài 5 ===========");
console.log(similarity([1, 2, 3], [1, 2, 4]));

// Bài 6. Viết function remove những phần tử bị trùng nhau trong mảng
// Ví dụ: removeDuplicates([1,2,5,2,6,2,5]) => [1,2,5,6]
function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("=========== Bài 6 ===========");
console.log(removeDuplicates([1, 2, 5, 2, 6, 2, 5]));

// Bài 7. Viết function để tạo mã màu HEX ngẫu nhiên.
// Ví dụ: randomHexCode() => #2ecc71
// Ví dụ: randomHexCode() => #8e44ad
function randomCharacters() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function randomHexCode() {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += randomCharacters();
    }
    return hexCode;
}
console.log("=========== Bài 7 ===========");
console.log(randomHexCode());

// Bài 8. Viết function để tạo mã màu RGB ngẫu nhiên.
// Ví dụ: randomRgbCode() => rgb(46, 204, 113)
// Ví dụ: randomRgbCode() => rgb(142, 68, 173)
function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomRgbCode() {
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();
    return `rgb(${r},${g},${b})`;
}
console.log("=========== Bài 8 ===========");
console.log(randomRgbCode());
