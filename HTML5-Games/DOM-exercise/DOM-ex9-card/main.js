
// 1. Một tính năng mới  vào gói Pro: '24/7 Phone support'
document.querySelector('#pro-plan ul')
    .insertAdjacentHTML('beforeEnd', '<li>24/7 Phone Support</li>')

// 2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)
const basic = document.querySelector('#basic-plan')
const pro = document.querySelector('#pro-plan')
const parent = basic.parentNode;
parent.insertBefore(basic, pro)
// document.querySelector('.row').classList.add('flex-row-reverse')

// 3. Trong gói Pro hãy cập nhật nút 'Get Started' hiện tại thành màu xanh có màu background: #82DACA, có chữ màu #fff và có dòng chữ 'Buy Now'
const proBtn = document.querySelector('#pro-plan button')
proBtn.style.backgroundColor = '#82DACA'
proBtn.style.color = '#fff'
proBtn.innerText = 'Buy Now'

// 4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
const basicPlanStorage = document.querySelector('#basic-plan .storage-amount')
const proPlanStorage = document.querySelector('#pro-plan .storage-amount')

basicPlanStorage.innerText = basicPlanStorage.innerText * 1.5
proPlanStorage.innerText = proPlanStorage.innerText * 1.25