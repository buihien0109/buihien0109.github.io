// Bài 1. Viết hàm để lấy danh sách các key của object
// let user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => "name,age,email"
function getKeys(obj) {
    return Object.keys(obj).join(",");
}

let user = {
    name: "Trương Minh Thúy",
    age: 25,
    email: "support@techmaster.vn",
};

console.log("========== Bài 1 ==========");
console.log(getKeys(user));

// Bài 2. Viết hàm để lấy danh sách các value của object
// let user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// => "Trương Minh Thúy,25,support@techmaster.vn"
function getValues(obj) {
    return Object.values(obj).join(",");
}

console.log("========== Bài 2 ==========");
console.log(getValues(user));

// Bài 3. Viết hàm kiểm tra key có tồn tại trong object không
// let user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// Ví dụ: checkKey(user, 'name') => true
// Ví dụ: checkKey(user, 'study') => false
function checkKey(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log("========== Bài 3 ==========");
console.log(checkKey(user, "name"));
console.log(checkKey(user, "study"));

// Bài 4. Viết hàm kiểm tra Object có độ dài bao nhiêu
// let user = {
//     name : "Trương Minh Thúy",
//     age : 25,
//     email : 'support@techmaster.vn'
// };
// Ví dụ: getLengthObject(user) => 3
function getLengthObject(obj) {
    return Object.keys(obj).length;
}
console.log("========== Bài 4 ==========");
console.log(getLengthObject(user));

// Bài 5. Cho mảng các user. Mỗi object có cấu trúc như sau
// user = {
//     name : string,
//     age : number,
//     isStatus : bool
// }
// Viết function lấy ra những user có age > 25 và isStatus = true
function filterUser(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const u = arr[i];
        if (u.age > 25 && u.isStatus == true) {
            newArr.push(u);
        }
    }
    return newArr;
}

let users = [{
        name: "Trương Minh Thúy",
        age: 26,
        isStatus: true,
    },
    {
        name: "Bùi Văn Hiên",
        age: 24,
        isStatus: false,
    },
    {
        name: "Trịnh Minh Cường",
        age: 46,
        isStatus: true,
    },
    {
        name: "Nguyễn Hàn Duy",
        age: 29,
        isStatus: false,
    },
];
console.log("========== Bài 5 ==========");
console.log(filterUser(users));

// Bài 6. Tương tự bài 10
// Viết function sắp xếp các user theo tuổi tăng dần
function sortUser(arr) {
    return arr.sort(function (a, b) {
        return a.age - b.age;
    });
}
console.log("========== Bài 6 ==========");
console.log(sortUser(users));