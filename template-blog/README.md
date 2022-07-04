## Query

1.Lấy thông tin của blog đã được public sắp xếp theo ngày tạo giảm dần

```json
[
    {
        "id" : 1,
        "title" : "Donec tincidunt leo",
        "slug" : "donec-tincidunt-leo",
        "description" : "Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend",
        "thumbnail" : "assets/images/blog-thumb-02.jpg",
        "publish_at" : "01/07/2022",
        "count_comment" : 10,
        "author" : {
            "id" : 1,
            "name" : "Nguyễn Văn A"
        }
    },
    ...
]
```

1.Lấy thông tin của blog đã được public sắp xếp theo ngày tạo giảm dần (có phần trang (page + limit))

2.Lấy danh sách 3 bài viết có lượng comment lớn nhất

```json
[
    {
        "id" : 1,
        "title" : "Donec tincidunt leo",
        "slug" : "donec-tincidunt-leo",
        "publish_at" : "01/07/2022",
    },
    ...
]
```

3.Lấy danh sách 5 category được áp dụng nhiều nhất

```json
[
    {
        "id" : 1,
        "name" : "Donec tincidunt leo",
    },
    ...
]
```

4.Lấy thông tin bài viết dựa theo category id (Kết quả trả về giống câu 1)

```json
[
    {
        "id" : 1,
        "title" : "Donec tincidunt leo",
        "slug" : "donec-tincidunt-leo",
        "description" : "Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend",
        "thumbnail" : "assets/images/blog-thumb-02.jpg",
        "publish_at" : "01/07/2022",
        "count_comment" : 10,
        "author" : {
            "id" : 1,
            "name" : "Nguyễn Văn A"
        }
    },
    ...
]
```

5.Lấy thông tin về tác giả của 1 bài viết cụ thể

```json
{
    "id": 1,
    "name": "Nguyễn Văn A"
}
```

6.Lấy thông tin của tất cả bài viết theo tác giả (user_id) (Kết quả trả về giống câu 1)

```json
[
    {
        "id" : 1,
        "title" : "Donec tincidunt leo",
        "slug" : "donec-tincidunt-leo",
        "description" : "Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend",
        "thumbnail" : "assets/images/blog-thumb-02.jpg",
        "publish_at" : "01/07/2022",
        "count_comment" : 10,
        "author" : {
            "id" : 1,
            "name" : "Nguyễn Văn A"
        }
    },
    ...
]
```

7.Lấy danh sách comment của 1 bài viết cụ thể (theo id) (sắp xếp theo ngày tạo comment giảm dần)

```json
[
    {
        "id": 1,
        "name": "Nguyễn Văn A",
        "avatar": "assets/images/blog-thumb-02.jpg",
        "created_at": "01/07/2022",
        "content": "Bài viết hay quá"
    }
]
```

8.Lấy thông tin của bài viết theo id

```json
[
    {
        "id" : 1,
        "title" : "Donec tincidunt leo",
        "slug" : "donec-tincidunt-leo",
        "description" : "Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend",
        "content" : "Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend",
        "thumbnail" : "assets/images/blog-thumb-02.jpg",
        "publish_at" : "01/07/2022",
        "author" : {
            "id" : 1,
            "name" : "Nguyễn Văn A"
        }
    },
    ...
]
```

9.Tổng hợp câu 7 + 8 : Lấy thông tin của bài viết kèm theo thông tin tác giả và thông tin comment của bài viết đó

```json
[
    {
        "id" : 1,
        "title" : "Donec tincidunt leo",
        "slug" : "donec-tincidunt-leo",
        "description" : "Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend",
        "content" : "Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend",
        "thumbnail" : "assets/images/blog-thumb-02.jpg",
        "publish_at" : "01/07/2022",
        "author" : {
            "id" : 1,
            "name" : "Nguyễn Văn A"
        },
        "comments" : [
            {
                "id" : 1,
                "name" : "Trần Văn B",
                "avatar" : "assets/images/blog-thumb-02.jpg",
                "created_at" : "01/07/2022",
                "content" : "Bài viết hay quá"
            },
            {
                "id" : 2,
                "name" : "Ngô Thị C",
                "avatar" : "assets/images/blog-thumb-02.jpg",
                "created_at" : "03/07/2022",
                "content" : "Cảm ơn tác giả"
            },
            ...
        ]
    },
    ...
]
```
