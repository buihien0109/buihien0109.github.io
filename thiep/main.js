var person = {
    firstName: "Anh",
    lastName: "Tranngoc",
    showFullName: function() {
        // "Ngữ cảnh"
        console.log(this.firstName + " " + this.lastName);
    }
}

// "Ngữ cảnh", khi chúng ta gọi showFullName là đối tượng person, khi
// chúng ta gọi showFullName cho đối tượng này.  Và "this" trong
// phương thức này sẽ có giá trị của đối tượng person.
person.showFullName(); // Anh Tranngoc

//  Nếu chúng ta gọi showFullName với đối tượng khác:
var anotherPerson = {
    firstName: "VietPhuong",
    lastName: "Doan"
};

// Chúng ta có thể sử dụng phương thức apply để gán giá trị "this" một
// cách rõ ràng hơn trong phương thức apply.  "this" sẽ có giá trị của
// bất cứ thứ gì gọi hàm this.  Vì thế:
person.showFullName.apply(anotherPerson); // VietPhuong Doan

// Ngữ cảnh ở đây đã thay đổi thành anotherPerson bởi vì đây là đối
// tượng gọi phương thức person.showFullName() thông qua phương thức
// apply()