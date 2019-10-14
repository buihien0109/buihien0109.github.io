class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      code: ""
    };
    this.getPromoCodeList = this.getPromoCodeList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  getPromoCodeList() {
    this.setState({
      code: this.state.value
    });
  }

  render() {
    //Format lại giá tiền
    function convertMoney(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(price);
    }

    // Nhận danh sách sản phẩm bằng props từ App truyền sang
    const products = this.props.products;
    const promoCodeList = this.props.promoCodeList;

    let totalPrice
    let checkout
    let subtotal = 0;
    
    //Tính tổng tiền
    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      subtotal += p.price * p.quantity;
    }
    //Tính Thuế VAT (10%)
    let VAT = subtotal * 0.1;

    //Tính giảm giá
    let discountPrice = subtotal * promoCodeList[this.state.code]

    if (promoCodeList.hasOwnProperty(this.state.code)) {
      totalPrice = (
        <div>
          <li>
            Giảm giá <span>{convertMoney(discountPrice)}</span>
          </li>
          <li className="total">
            Tổng tiền <span>{convertMoney(subtotal + VAT - discountPrice)}</span>
          </li>
        </div>
      );
    } else {
      totalPrice = (
        <li className="total">
          Total <span>{convertMoney(subtotal + VAT)}</span>
        </li>
      );
    }

    let result = ""
    const inValidCode = () => {
      if(!promoCodeList.hasOwnProperty(this.state.code)) {
        result = <div className="err-code">Mã giảm giá không chính xác!</div>
        return result
      }
    }
    
    if(products.length == 0) {
      checkout = (
        <div className="continue-shopping">
          <p className="message">Không có sản phẩm nào trong giỏ hàng</p>
          <div className="">
            <button type="button" className="btn-shopping">Tiếp tục mua hàng</button>
          </div>
        </div>
      )
    } else {
      checkout = (
        <section className="container">
          <div className="promotion">
            <label htmlFor="promo-code">Bạn có mã giảm giá?</label>
            <input type="text" id="promo-code" onChange={this.handleChange} />
            <button type="button" onClick={this.getPromoCodeList} />
            {result}
          </div>
          <div className="summary">
            <ul>
              <li>
                Tạm tính <span>{convertMoney(subtotal)}</span>
              </li>
              <li>
                Thuế VAT(10%) <span>{convertMoney(VAT)}</span>
              </li>
              {totalPrice}
            </ul>
          </div>
          <div className="checkout">
            <button type="button">Check Out</button>
          </div>
        </section>
      );
    }
    
    return checkout;
  }
}
