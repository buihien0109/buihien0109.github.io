const blogListEl = document.querySelector(".blog-list");
const blogItemEl = document.querySelector(".blog-item");

const blogRecent = document.querySelector(".recent-blog");
const blogRecentItem = document.querySelector(".recent-blog-item");

const blogHot = document.querySelector(".hot-blog");
const blogHotItem = document.querySelector(".hot-blog-item");

const copyBlog = (number) => {
    blogListEl.innerHTML = "";

    for (let i = 0; i < number; i++) {
        const blogItemCopy = blogItemEl.cloneNode(true);
        blogListEl.appendChild(blogItemCopy);
    }
}

const copyBlogRecent = (number) => {
    blogRecent.innerHTML = "";

    for (let i = 0; i < number; i++) {
        const blogRecentItemCopy = blogRecentItem.cloneNode(true);
        blogRecent.appendChild(blogRecentItemCopy);
    }
}

const copyBlogHot = (number) => {
    blogHot.innerHTML = "";

    for (let i = 0; i < number; i++) {
        const blogHotItemCopy = blogHotItem.cloneNode(true);
        blogHot.appendChild(blogHotItemCopy);
    }
}

copyBlog(10);
copyBlogRecent(3);
copyBlogHot(3);