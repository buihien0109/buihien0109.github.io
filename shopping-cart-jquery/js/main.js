let products = [
    {
        id: 1,
        name: "Áo thun da trơn túi ngực",
        image: "./image/at1.png",
        description:
            "Kiểu áo thun dạng ôm được nhiều anh chàng ưa thích bởi sự thoải mái, phong cách và quan trọng là tôn dáng người mặc",
        price: 450000,
        quantity: 2,
        instock: 10
    },
    {
        id: 2,
        name: "Áo thun nam dáng xuông",
        image: "./image/at2.png",
        description:
            "Áo thun nam big size là kiểu áo  có form rộng thường xuất hiện trong trang phục đồng phục hoặc áo cho các bạn trẻ thích phong cách thoải mái và năng động.",
        price: 550000,
        quantity: 3,
        instock: 8
    }
]

const listPromoCode = {
    hien : 0.1,
    hang : 0.2,
    huyen : 0.3,
    phuong : 0.4
}

let promoCode = ""

function renderContent() {
    let listProduct = ""
    for (let i = 0; i < products.length; i++) {
        const p = products[i]
        listProduct += `
                        <li class="row">
                        <div class="col left">
                            <div class="thumbnail">
                                <a href="#">
                                <img src=${p.image} alt="" />
                                </a>
                            </div>
                            <div class="detail">
                                <div class="name"><a href="#">${p.name}</a></div>
                                <div class="description">
                                    ${p.description}
                                </div>
                                <div class="price">${convertMoney(p.price)}</div>
                            </div>
                        </div>

                        <div class="col right">
                            <div class="quantity">
                                <input type="number" class="quantity" step="1" value=${p.quantity} onchange="getNumberItem(${p.id})"/>
                            </div>

                            <div class="remove">
                                <svg
                                version="1.1"
                                class="close"
                                xmlns="//www.w3.org/2000/svg"
                                xmlns:xlink="//www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 60 60"
                                enable-background="new 0 0 60 60"
                                xml:space="preserve"

                                onclick="deleteProduct(${p.id},this)"
                                >
                                <polygon
                                    points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"
                                ></polygon>
                                </svg>
                            </div>
                        </div>
                    </li>
                    `
    }
    $('.products').html(listProduct)


    let numberItems = getNumberItems(products)
    $('.number-items').html(numberItems)

    let {subtotal,vat} = getTotalMoney(products)
    $('.subtotal').html(convertMoney(subtotal))
    $('.vat').html(convertMoney(vat))
    $('.total-money').html(convertMoney(subtotal + vat))
}

//Convert tiền theo chuẩn VND
function convertMoney(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND"
    }).format(price);
}

//Tính số lượng sản phẩm có trong giỏ hàng
function getNumberItems(products) {
    let sumProduct = 0
    for (let i = 0; i < products.length; i++) {
        sumProduct += products[i].quantity
    }
    return sumProduct
}

//Tính tổng tiền
function getTotalMoney(products) {
    let subtotal = 0 
    for (let i = 0; i < products.length; i++) {
        const p = products[i]
        subtotal += p.quantity * p.price
    }
    let vat = subtotal * 0.1
    return {subtotal,vat}
}

//Thay đổi số lượng sản phẩm
function getNumberItem(id) {
    let number = event.target.value
    for(let i = 0; i< products.length; i++) {
        const p = products[i]
        if(p.id == id) {
            p.quantity = Number(number)
        }
    }
    let numberItems = getNumberItems(products)
    $('.number-items').html(numberItems)

    let {subtotal,vat} = getTotalMoney(products)
    $('.subtotal').html(convertMoney(subtotal))
    $('.vat').html(convertMoney(vat))
    $('.total-money').html(convertMoney(subtotal + vat))
}

//Khi nhập mã giảm giá
function getPromoCode() {
    promoCode = event.target.value
}

//Kiểm tra mã giảm giá có hợp lệ không
function isValidPromaCode() {
    let newPromoCode = promoCode
    let totalContent = ''
    if(listPromoCode.hasOwnProperty(newPromoCode)) {
        totalContent = `
            <li>Subtotal <span class="subtotal"></span></li>
            <li>VAT(10%) <span class="vat"></span></li>
            <li>Discount <span class="discount"></span></li>
            <li class="total">Total <span class="total-money"></span></li>
        `
        $('.summary > ul').html(totalContent)

        let {subtotal,vat} = getTotalMoney(products)
        $('.subtotal').html(convertMoney(subtotal))
        $('.vat').html(convertMoney(vat))
        let discount = subtotal * listPromoCode[newPromoCode]
        $('.discount').html(convertMoney(discount))
        $('.total-money').html(convertMoney(subtotal + vat - discount))
    } else {
        totalContent = `
            <li>Subtotal <span class="subtotal"></span></li>
            <li>VAT(10%) <span class="vat"></span></li>
            <li class="total">Total <span class="total-money"></span></li>
        `
        $('.summary > ul').html(totalContent)

        let {subtotal,vat} = getTotalMoney(products)
        $('.subtotal').html(convertMoney(subtotal))
        $('.vat').html(convertMoney(vat))
        $('.total-money').html(convertMoney(subtotal + vat))

        setTimeout(function(){
            alert("Mã giảm giá của bạn không hợp lệ! Vui lòng nhập lại!")
        },100)
        
    }

}
//Khi xóa một sản phẩm
function deleteProduct(id, deleteButton) {
    if (confirm("Bạn có muốn xóa không?")) {

        //Tìm đên từng li và xóa
        $(deleteButton).parent().parent().parent().remove();

        //Tính số lượng sản phẩm trong giỏ hàng sau khi xóa---------------------
        //Cập nhật lại mảng các product sau khi xóa
        const newProduct = products.filter(product => {
            return product.id !== id;
        });
        //Gán mảng ban đầu thành mảng sau khi xóa
        [products] = [newProduct]

        //Hiển thị số lượng sản phẩm ra màn hình
        let newNnumberItems = getNumberItems(newProduct)
        $('.number-items').html(newNnumberItems)

         //Tính lại tổng tiền sau khi xóa----------------------------------------
        let {subtotal,vat} = getTotalMoney(newProduct)
        $('.subtotal').html(convertMoney(subtotal))
        $('.vat').html(convertMoney(vat))
        $('.total-money').html(convertMoney(subtotal + vat))

        //Khi không còn sản phẩm nào trong giỏ hàng thì hiển thi thông báo
        let listProduct = $('ul.products').find('li.row')
        let outOfStock = ""
        if (listProduct.length == 0) {
            $('.container-promo').remove()
            outOfStock = `
                        <div class="continue-shopping">
                            <p class="message">Không có sản phẩm nào trong giỏ hàng</p>
                            <div class="">
                                <button type="button" class="btn-shopping">Tiếp tục mua hàng</button>
                            </div>
                        </div>
                    `
            $('.products').html(outOfStock)
        }
    }
}

$(document).ready(function () {
    renderContent()
});