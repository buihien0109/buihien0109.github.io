# 1. vue template
### - Sử dụng cú pháp {{ variable }}
Hình thức ràng buộc dữ liệu cơ bản nhất là nội suy văn bản (text interpolation) sử dụng cú pháp “mustache” (“ria mép” – hai dấu ngoặc nhọn):

```
<span>Thông điệp: {{ msg }}</span>
```

# 2. reder ra mã HTML
Cú pháp mustache sẽ thông dịch dữ liệu ra thành văn bản thuần túy (plain text), nghĩa là các kí tự HTML đặc biệt như <>&"' sẽ được mã hóa. Để xuất ra HTML thuần túy, bạn sẽ cần đến directive v-html.

### - Cú pháp v-html
```
<p>Sử dụng cú pháp mustache: {{ rawHtml }}</p>
<p>Sử dụng directive v-html: <span v-html="rawHtml"></span></p>
```


# 3. v-once
Bạn cũng có thể thực hiện các phép nội suy một lần (không cập nhật lại khi dữ liệu thay đổi) bằng cách sử dụng directive v-once, nhưng nhớ là làm như vậy sẽ ảnh hưởng đến tất cả các ràng buộc khác trên cùng một node:
```
<span v-once>Thông điệp này sẽ không bao giờ thay đổi: {{ msg }}</span>
```