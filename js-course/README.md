## Lộ trình học Javascript cơ bản (6 buổi)

### Buổi 1

- Giới thiệu Javascript
- Viết chương trình đầu tiên
- Nơi đặt mã Javascript
- Variable
- Scope
- String
- Number - Math Object
- Function
- Thực hành

### Bài tập về nhà

Viết function cho các bài tập sau:
1. Viết chương trình tính chu vi của hình tròn

2. Viết chương trình tính diện tích hình tròn

3. Viết chương trình có chức năng quy đổi từ cm => m

4. Viết chương trình có chức năng quy đổi từ phút => giờ

5. Viết chương trình trả về nghiệm của phương trình bậc nhất (Ax + b = c)

6. Viết chương trình đổi từ độ C => độ F

7. Viết chương trình tính chỉ số BMI của 1 người (BMI là gì? công thức như nào? học viên tự tham khảo trên mạng)

8. Viết chương trình random 1 số trong khoảng min - max (min, max là 2 số nguyên dương tùy ý)

------------
### Buổi 2

- Chữa bài về nhà
- Boolean
- if/else - switch/case
- Loop (for, while, do/while, forEach, ...)
- Array
- Method Array (push, pop, shift, unshift, splice)
- Thực hành

### Bài tập về nhà

1. Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng tăng dần hay không
- Ví dụ: checkAscArr(1,2,3,4) => true
- Ví du: checkAscArr(1,2,4,3) => false

2. Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng giảm dần hay không

3. Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số chẵn tăng dần hay không

4. Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số lẻ giảm dần hay không

5. Viết function truyền vào 1 mảng. Tìm số lớn nhất trong mảng
- Ví dụ : findMaxNumberArr([1,2,3,4]) => 4

6. Viết function truyền vào 1 mảng. Tìm số nhỏ nhất trong mảng
- Ví dụ : findMinNumberArr([1,2,3,4]) => 1

7. Viết function truyền vào 1 mảng, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
- Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

8. Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần
- Ví dụ: repeatString('a') => 'aaaaaaaaaa'

9. Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang
- Ví dụ: repeatString('a') => 'a-a-a-a-a-a-a-a-a-a'

------------
### Buổi 3

- Chữa bài về nhà
- Method Array (slice, indexOf, lastIndexOf, includes, concat, split, reverse, ...)
- Thực hành

### Bài tập về nhà

1. Viết function kiểm tra 1 giá trị có nằm trong mảng hay không

- Ví dụ: checkElementExist([1,2,3,4], 4) => true
- Ví dụ: checkElementExist([1,2,3,4], 5) => false

2. Viết function tìm ra số lớn thứ nhì trong mảng các số. 

- Ví dụ: max2Numbers([2, 1, 3, 4]) => 3

3. Viết function để lấy một phần tử ngẫu nhiên từ một mảng

- Ví dụ: randomElement([3, 7, 9, 11]) => 3
- Ví dụ: randomElement([3, 7, 9, 11]) => 9

4. Cho 1 mảng các chuỗi. Viết function lọc ra các phần tử có độ dài lớn nhất. 
- Ví dụ: findMaxLengthElement["aba", "aa", "ad", "c", "vcd"] => ["aba", "vcd"]

5. Viết function để lấy một mảng bao gồm các phần tử xuất hiện trong cả hai mảng
- Ví dụ: similarity([1, 2, 3], [1, 2, 4]) => [1,2]

6. Viết function remove những phần tử bị trùng nhau trong mảng
- Ví dụ: removeDuplicates([1,2,5,2,6,2,5]) => [1,2,5,6]

7. Viết function để tạo mã màu HEX ngẫu nhiên.
- Ví dụ: randomHexCode() => #2ecc71
- Ví dụ: randomHexCode() => #8e44ad

8. Viết function để tạo mã màu RGB ngẫu nhiên.
- Ví dụ: randomRgbCode() => rgb(46, 204, 113)
- Ví dụ: randomRgbCode() => rgb(142, 68, 173)

------------
### Buổi 4

- Chữa bài về nhà
- Method String
- Thực hành

### Bài tập về nhà

1. Viết function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không

- Ví dụ: checkStringExist("i love you", "you") => true
- Ví dụ: checkStringExist("i love you", "hate") => false

2. Viết function rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi.

- Ví dụ: shortenString('Xin chào các bạn') => 'Xin chào...'
- Ví dụ: shortenString('Hello') => 'Hello'

3. Viết function có tác dụng biến 1 chuỗi thành chuỗi chỉ viết hoa từ đầu tiên.

- Ví dụ: capitalizeString('chÀo MừnG đẾn với techMaster') => 'Chào Mừng Đến Với Techmaster'

4. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết function có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

- Ví dụ: repeatString('a', 5) => 'a-a-a-a-a'

5. Viết function với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó

- Ví dụ: reverseString('Hello') => 'olleH'

6. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường),

- Ví dụ: checkSymmetricString("Race car") => true
- Ví dụ: checkSymmetricString("hello world") => false

7. Viết một function nhận vào string, trả về số lượng nguyên âm có trong string

- Nguyên âm:  a, o, e, u, i.
- Ví dụ: countNumberVowels("hello") => 2
- Ví dụ: countNumberVowels("hello hien") => 4

8. Viết function kiểm tra xem một chuỗi có kết thúc bằng chuỗi khác hay không.

- Ví dụ : confirmEnding("hello", "lo") => true
- Ví dụ : confirmEnding("hello", "ll") => false

9. Viết function lấy ra những chữ cái đầu của từng từ trong chuỗi, các chữ cái đầu được phân tách với nhau bằng dấu cách

- Ví dụ : getFirstLetter("xin chào các bạn") => "x c c b"
- Ví dụ : getFirstLetter("hello world") => "h c"

10. Viết function nhập vào 1 chuỗi bất kỳ. Sắp xếp các ký tự trong chuỗi theo chiều tăng dần của bảng chữ cái (có phân biệt chữ hoa, chữ thường). Yêu cầu loại bỏ khoảng trắng trong chuỗi trước khi sắp xếp

- Ví dụ : sortLetters("hello world") => "dehllloorw"
- Ví dụ : sortLetters("HellO WorLd") => "HLOWdellor"

11. Viết function nhập vào 1 chuỗi bất kỳ. Tìm ra ký tự không bị lặp lại trong chuỗi (không tính khoảng trắng)

- Ví dụ : getLetterNoRepeat("abc abce") => "e";
- Ví dụ : getLetterNoRepeat("abce abcdf") => "e,d,f";
- Ví dụ : getLetterNoRepeat("abab") => "";

------------
### Buổi 5

- Chữa bài về nhà
- Quiz
- Number
- Object
- Thực hành

### Bài tập về nhà

