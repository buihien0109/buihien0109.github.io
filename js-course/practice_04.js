// Bài 1. Viết function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không
// Ví dụ: checkStringExist("i love you", "you") => true
// Ví dụ: checkStringExist("i love you", "hate") => false
function checkStringExist(strP, strC) {
	if (strP.indexOf(strC) != -1) {
		return true;
	} else {
		return false;
	}
}
console.log("=========== Bài 1 ===========");
console.log(checkStringExist("i love you", "you"));
console.log(checkStringExist("i love you", "hate"));

// Bài 2. Viết function rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi.
// Ví dụ: shortenString('Xin chào các bạn') => 'Xin chào...'
// Ví dụ: shortenString('Hello') => 'Hello'
function shortenString(str) {
	if (str.length <= 8) {
		return str;
	} else {
		return `${str.slice(0, 8)}...`;
	}
}
console.log("=========== Bài 2 ===========");
console.log(shortenString("Xin chào các bạn"));
console.log(shortenString("Hello"));

// Bài 3. Viết function có tác dụng biến 1 chuỗi thành chuỗi chỉ viết hoa từ đầu tiên.
// Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => 'Chào Mừng Đến Với Techmaster'
function capitalizeWord(word) {
	return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
}

function capitalizeString(str) {
	let arrStr = str.split(" ");
	for (let i = 0; i < arrStr.length; i++) {
		arrStr[i] = capitalizeWord(arrStr[i]);
	}
	return arrStr.join(" ");
}
console.log("=========== Bài 3 ===========");
console.log(capitalizeString("chÀo MừnG đẾn với techMaster"));

// Bài 4. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết function có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString('a', 5) => 'a-a-a-a-a'
function repeatString(str, n) {
	let newStr = str;
	for (let i = 0; i < n - 1; i++) {
		newStr += `-${str}`;
	}
	return newStr;
}
console.log("=========== Bài 4 ===========");
console.log(repeatString("a", 5));

// Bài 5. Viết function với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString('Hello') => 'olleH'
function reverseString(str) {
	return str.split("").reverse().join("");
}
console.log("=========== Bài 5 ===========");
console.log(reverseString("Hello"));

// Bài 6. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường),
// Ví dụ: checkSymmetricString("Race car") => true
// Ví dụ: checkSymmetricString("hello world") => false
function checkSymmetricString(str) {
	let newStr = str.toLowerCase().split(" ").join("");
	let reverseStr = reverseString(newStr);
	return newStr == reverseStr;
}
console.log("=========== Bài 6 ===========");
console.log(checkSymmetricString("Race car"));
console.log(checkSymmetricString("hello world"));

// Bài 7. Viết một function nhận vào string, trả về số lượng nguyên âm có trong string
// Nguyên âm:  a, o, e, u, i.
// Ví dụ: countNumberVowels("hello") => 2
// Ví dụ: countNumberVowels("hello hien") => 4
function countNumberVowels(str) {
	let vowels = ["a", "o", "e", "u", "i"];
	let arrStr = str.split("");
	let count = 0;
	for (let i = 0; i < arrStr.length; i++) {
		if (vowels.indexOf(arrStr[i]) != -1) {
			count++;
		}
	}
	return count;
}
console.log("=========== Bài 7 ===========");
console.log(countNumberVowels("hello"));
console.log(countNumberVowels("hello hien"));

// Bài 8 : Viết function kiểm tra xem một chuỗi có kết thúc bằng chuỗi khác hay không.
// Ví dụ : confirmEnding("hello", "lo") => true
// Ví dụ : confirmEnding("hello", "ll") => false
function confirmEnding(str1, str2) {
	return str1.endsWith(str2);
}
console.log("=========== Bài 8 ===========");
console.log(confirmEnding("hello", "lo"));
console.log(confirmEnding("hello", "ll"));

// Bài 9 : Viết function lấy ra những chữ cái đầu của từng từ trong chuỗi, các chữ cái đầu được phân tách với nhau bằng dấu cách
// Ví dụ : getFirstLetter("xin chào các bạn") => "x c c b"
// Ví dụ : getFirstLetter("hello world") => "h c"
function getFirstLetter(str) {
	let letters = [];
	let arrWords = str.split(" ");
	for (let i = 0; i < arrWords.length; i++) {
		letters.push(arrWords[i].slice(0, 1));
	}
	return letters.join(" ");
}
console.log("=========== Bài 9 ===========");
console.log(getFirstLetter("xin chào các bạn"));
console.log(getFirstLetter("hello world"));

// Bài 10 : Viết function nhập vào 1 chuỗi bất kỳ. Sắp xếp các ký tự trong chuỗi theo chiều tăng dần của bảng chữ cái (có phân biệt chữ hoa, chữ thường). Yêu cầu loại bỏ khoảng trắng trong chuỗi trước khi sắp xếp
// Ví dụ : sortLetters("hello world") => "dehllloorw"
// Ví dụ : sortLetters("HellO WorLd") => "HLOWdellor"
function sortLetters(str) {
	let newStr = str.split(" ").join("").trim();
	let arr = newStr.split("").sort();
	return arr.join("");
}
console.log("=========== Bài 10 ===========");
console.log(sortLetters("hello world"));
console.log(sortLetters("HellO WorLd"));

// Bài 11 : Viết function nhập vào 1 chuỗi bất kỳ. Tìm ra ký tự không bị lặp lại trong chuỗi (không tính khoảng trắng)
// Ví dụ : getLetterNoRepeat("abc abce") => "e";
// Ví dụ : getLetterNoRepeat("abce abcdf") => "e,d,f";
// Ví dụ : getLetterNoRepeat("abab") => "";
function getLetterNoRepeat(str) {
	let arr = [];
	let strRmSpace = str.split(" ").join("").trim();
	let arrLetters = strRmSpace.split("");
	for (let i = 0; i < arrLetters.length; i++) {
		let c = arrLetters[i];
		if (arrLetters.indexOf(c) == arrLetters.lastIndexOf(c)) {
			arr.push(c);
		}
	}
	return arr.join(",");
}
console.log("=========== Bài 11 ===========");
console.log(getLetterNoRepeat("abc abce"));
console.log(getLetterNoRepeat("abce abcdf"));
console.log(getLetterNoRepeat("abab"));