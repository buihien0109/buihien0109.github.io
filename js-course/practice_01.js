// 1. Viết chương trình tính chu vi của hình tròn
function calculatePerimeterCircle(radius) {
    return Math.PI * 2 * radius;
}
console.log("=========== Bài 1 ===========");
console.log(calculatePerimeterCircle(3));

// 2. Viết chương trình tính diện tích hình tròn
function calculateAreaCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
console.log("=========== Bài 2 ===========");
console.log(calculateAreaCircle(2));

// 3. Viết chương trình có chức năng quy đổi từ cm => m
function convertCmtoM(cm) {
    return cm / 100;
}
console.log("=========== Bài 3 ===========");
console.log(convertCmtoM(123));

// 4. Viết chương trình có chức năng quy đổi từ phút => giờ
function convertMinuteToHour(minute) {
    let hour = Math.floor(minute / 60);
    let extraMinute = minute % 60;
    return `${hour}:${extraMinute}`;
}
console.log("=========== Bài 4 ===========");
console.log(convertMinuteToHour(70));

// 5. Viết chương trình trả về nghiệm của phương trình bậc nhất (ax + b = c)
function solveQuation(a, b, c) {
    if (a == 0) {
        if (b == c) {
            return "Phương trình vô số nghiệm";
        } else {
            return "Phương trình vô nghiệm";
        }
    } else {
        return (c - b) / a;
    }
}
console.log("=========== Bài 5 ===========");
console.log(solveQuation(1, 2, 3));

// 6. Viết chương trình đổi từ độ C => độ F
function convertCtoF(c) {
    return (c * 9) / 5 + 32;
}
console.log("=========== Bài 6 ===========");
console.log(convertCtoF(40));

// 7. Viết chương trình tính chỉ số BMI của 1 người (BMI là gì? công thức như nào? học viên tự tham khảo trên mạng)
function calculateBMI(weight, height) {
    return weight / Math.pow(height, 2);
}
console.log("=========== Bài 7 ===========");
console.log(calculateBMI(60, 1.65));

// 8. Viết chương trình random 1 số trong khoảng min - max (min, max là 2 số nguyên dương tùy ý)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("=========== Bài 8 ===========");
console.log(randomNumber(1, 5));
