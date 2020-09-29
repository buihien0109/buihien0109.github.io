// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Thêm 3 job bổ sung vào phần 'job' của trang bằng cách sao chép 'job-card' ban đầu.
const job1 = document.querySelector(".jobs .job-card");
const job2 = job1.cloneNode(true);
const job3 = job1.cloneNode(true);
const job4 = job1.cloneNode(true);

job1.insertAdjacentElement("afterEnd", job2);
job1.insertAdjacentElement("afterEnd", job3);
job1.insertAdjacentElement("afterEnd", job4);


// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
job2.querySelector("h3").innerText = "Python Developer";
job3.querySelector("h3").innerText = "Java Developer";
job4.querySelector("h3").innerText = "JavaScript Developer";


// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const jobs = document.querySelectorAll(".jobs .job-card");
document.querySelector("#jobs-listed span").innerText = jobs.length;


// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
document.querySelector("#search")
	.addEventListener("keyup", function (event) {
		const ele = event.target;
		Array.from(document.querySelectorAll(".jobs .job-card")).forEach((job) => {
			const jobTitle = job.querySelector("h3").innerText;
			if (!jobTitle.toLowerCase().includes(ele.value.toLowerCase())) {
				job.style.display = "none";
			} else {
				job.style.display = "block";
			}
		});
	});


// 5. Bấm vào Nút "All jobs" để reset ô tìm kiếm và hiển thị ra tất cả các công việc
document.querySelector('#show-all')
	.addEventListener('click', function() {
		Array.from(document.querySelectorAll(".jobs .job-card")).forEach(job => {
			job.style.display = 'block'
		})
	})