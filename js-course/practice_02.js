// Bài 1.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng tăng dần hay không
// Ví dụ: checkAscArr([1,2,3,4]) => true
// Ví dụ: checkAscArr([1,2,4,3]) => false
function checkAscArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log("=========== Bài 1 ===========");
console.log(checkAscArr([1, 2, 3, 4]));
console.log(checkAscArr([1, 2, 4, 3]));

// Bài 2.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng giảm dần hay không
function checkDescArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log("=========== Bài 2 ===========");
console.log(checkDescArr([4, 3, 2, 1]));
console.log(checkDescArr([4, 3, 1, 2]));

// Bài 3.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số chẵn tăng dần hay không
function checkAscEvenArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 == 1 || arr[i + 1] % 2 == 1) {
            return false;
        }
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log("=========== Bài 3 ===========");
console.log(checkAscEvenArr([2, 4, 6, 7]));
console.log(checkAscEvenArr([2, 4, 7, 10]));

// Bài 4.Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số lẻ giảm dần hay không
function checkAscOddArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 == 0 || arr[i + 1] % 2 == 0) {
            return false;
        }
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log("=========== Bài 4 ===========");
console.log(checkAscOddArr([7, 5, 3, 1]));
console.log(checkAscOddArr([11, 7, 5, 1]));

// Bài 5.Viết function truyền vào 1 mảng. Tìm số lớn nhất trong mảng
// Ví dụ : findMaxNumberArr([1,2,3,4]) => 4
function findMaxNumberArr(arr) {
    let maxNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}
console.log("=========== Bài 5 ===========");
console.log(findMaxNumberArr([1, 2, 3, 4]));

// Bài 6.Viết function truyền vào 1 mảng. Tìm số nhỏ nhất trong mảng
// Ví dụ : findMinNumberArr([1,2,3,4]) => 1
function findMinNumberArr(arr) {
    let minNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }
    return minNumber;
}
console.log("=========== Bài 6 ===========");
console.log(findMinNumberArr([1, 2, 3, 4]));

// Bài 7.Viết function truyền vào 1 mảng, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function calculateModulo(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] % 2);
    }
    return newArr;
}
console.log("=========== Bài 7 ===========");
console.log(calculateModulo([4, 2, 5, 6, 2, 7]));

// Bài 8.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần
// Ví dụ: repeatString('a') => Kết quả trả về là 'aaaaaaaaaa'
function repeatString(str) {
    let newStr = "";
    for (let i = 0; i < 10; i++) {
        newStr += str;
    }
    return newStr;
}
console.log("=========== Bài 8 ===========");
console.log(repeatString("a"));

// Bài 9.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
function repeatString_1(str) {
    let newStr = str;
    for (let i = 0; i < 9; i++) {
        newStr += `-${str}`;
    }
    return newStr;
}
console.log("=========== Bài 9 ===========");
console.log(repeatString_1("a"));
