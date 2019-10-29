import Layout from '../components/CarpoLayout'

const ShoppingCart = () => (
  <Layout>
    <div>
        <section id="duong-dan">
          <div className="container">
            <a href="index.html">
              <span>Trang chủ</span>
            </a>
            <span>
              <i className="fa fa-angle-right" aria-hidden="true" />
            </span>
            <a href="shopping-card.html">
              <span>Giỏ hàng</span>
            </a>
          </div>
        </section>
        <section className="main-container col1-layout">
          <div className="main container">
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                <div className="product-area">
                  <div className="title-tab-product-category">
                    <div className="text-center">
                      <ul className="nav jtv-heading-style" role="tablist">
                        <li role="presentation" className="active"><a href="#cart" aria-controls="cart" role="tab" data-toggle="tab">1 Giỏ hàng của bạn</a></li>
                        <li role="presentation" className><a href="#checkout" aria-controls="checkout" role="tab" data-toggle="tab">2 Hoàn tất thông tin</a></li>
                        <li role="presentation" className><a href="#complete-order" aria-controls="complete-order" role="tab" data-toggle="tab">3 Tiến hành đặt hàng</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-tab-product-category">
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade in active" id="cart">
                        {/* cart are start*/}
                        <div className="cart-page-area">
                          <form method="post" action="#">
                            <div className="table-responsive">
                              <table className="shop-cart-table">
                                <thead>
                                  <tr>
                                    <th className="product-thumbnail ">Ảnh</th>
                                    <th className="product-name ">Tên sản phẩm</th>
                                    <th className="product-price ">Giá</th>
                                    <th className="product-quantity">Số lương</th>
                                    <th className="product-subtotal ">Tổng tiền</th>
                                    <th className="product-remove">Xóa</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="cart_item">
                                    <td className="item-img"><a href="#"><img src="./images/14.jpg" alt="Product tilte is here " />
                                      </a></td>
                                    <td className="item-title"><a href="#">Áo thun dáng xuông </a></td>
                                    <td className="item-price"> 230.000đ </td>
                                    <td className="item-qty">
                                      <div className="cart-quantity">
                                        <div className="product-qty">
                                          <div className="cart-quantity">
                                            <div className="cart-plus-minus">
                                              <div className="dec qtybutton">-</div>
                                              <input defaultValue={2} name="qtybutton" className="cart-plus-minus-box" type="text" />
                                              <div className="inc qtybutton">+</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="total-price"><strong> 460.000đ</strong></td>
                                    <td className="remove-item"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                  </tr>
                                  <tr className="cart_item">
                                    <td className="item-img"><a href="#"><img src="./images/15.png" alt="Product tilte is here " />
                                      </a></td>
                                    <td className="item-title"><a href="#">Áo thun caro </a></td>
                                    <td className="item-price"> 420.000đ </td>
                                    <td className="item-qty">
                                      <div className="cart-quantity">
                                        <div className="product-qty">
                                          <div className="cart-quantity">
                                            <div className="cart-plus-minus">
                                              <div className="dec qtybutton">-</div>
                                              <input defaultValue={1} name="qtybutton" className="cart-plus-minus-box" type="text" />
                                              <div className="inc qtybutton">+</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="total-price"><strong> 420.000đ</strong></td>
                                    <td className="remove-item"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                  </tr>
                                  <tr className="cart_item">
                                    <td className="item-img"><a href="#"><img src="./images/16.jpg" alt="Product tilte is here " />
                                      </a></td>
                                    <td className="item-title"><a href="#">Áo polo cổ tròn</a></td>
                                    <td className="item-price"> 560.000đ</td>
                                    <td className="item-qty">
                                      <div className="cart-quantity">
                                        <div className="product-qty">
                                          <div className="cart-quantity">
                                            <div className="cart-plus-minus">
                                              <div className="dec qtybutton">-</div>
                                              <input defaultValue={1} name="qtybutton" className="cart-plus-minus-box" type="text" />
                                              <div className="inc qtybutton">+</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="total-price"><strong> 560.000đ</strong></td>
                                    <td className="remove-item"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                  </tr>
                                  <tr className="cart_item">
                                    <td className="item-img"><a href="#"><img src="./images/17.jpg" alt="Product tilte is here " />
                                      </a></td>
                                    <td className="item-title"><a href="#">Áo in hình </a></td>
                                    <td className="item-price"> 360.000đ </td>
                                    <td className="item-qty">
                                      <div className="cart-quantity">
                                        <div className="product-qty">
                                          <div className="cart-quantity">
                                            <div className="cart-plus-minus">
                                              <div className="dec qtybutton">-</div>
                                              <input defaultValue={1} name="qtybutton" className="cart-plus-minus-box" type="text" />
                                              <div className="inc qtybutton">+</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="total-price"><strong> 360.000đ</strong></td>
                                    <td className="remove-item"><a href="#"><i className="fa fa-trash-o" /></a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="cart-bottom-area">
                              <div className="row">
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                  <div className="update-coupne-area">
                                    <div className="update-continue-btn text-right">
                                      <button className="button btn-continue" title="Continue Shopping" type="button"><span>Tiếp
                                          tục mua hàng</span></button>
                                      <button className="button btn-empty" title="Clear Cart" value="empty_cart" name="update_cart_action" type="submit"><span>Xóa giỏ hàng</span></button>
                                      <button className="button btn-update" title="Update Cart" value="update_qty" name="update_cart_action" type="submit"><span>Cập nhật giỏ hàng</span></button>
                                    </div>
                                    <div className="coupn-area">
                                      <div className="discount">
                                        <h3>Mã giảm giá</h3>
                                        <label htmlFor="coupon_code">Bạn có mã giảm giá không?</label>
                                        <input type="hidden" defaultValue={0} id="remove-coupone" name="remove" />
                                        <input type="text" defaultValue name="coupon_code" id="coupon_code" className="input-text fullwidth" />
                                        <button value="Apply Coupon" onclick="discountForm.submit(false)" className="button coupon " title="Apply Coupon" type="button"><span>Áp
                                            dụng</span></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-5 col-xs-12">
                                  <div className="cart-total-area">
                                    <div className="catagory-title cat-tit-5 text-right">
                                      <h3>Tổng tiền</h3>
                                    </div>
                                    <div className="sub-shipping">
                                      <p>Tổng tiền <span>1.200.000đ</span></p>
                                      <p>Ship <span>15.000đ</span></p>
                                    </div>
                                    <div className="process-cart-total">
                                      <p>Tổng cổng <span>1.215.000đ</span></p>
                                    </div>
                                    <div className="process-checkout-btn text-right">
                                      <button className="button btn-proceed-checkout" title="Proceed to Checkout" type="button"><span>Xử lý checkout</span></button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* cart are end*/}
                      </div>
                      <div role="tabpanel" className="tab-pane  fade in " id="checkout">
                        {/* Checkout are start*/}
                        <div className="checkout-area">
                          <div className>
                            <div className="row">
                              <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="coupne-customer-area mb50">
                                  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-checkout">
                                      <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title"> <img src="images/acc.jpg" alt="" /> Bạn có tài khoản chưa? <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Click vào
                                            để đăng nhập </a> </h4>
                                      </div>
                                      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="panel-body">
                                          <div className="sm-des"> Nếu bạn đã mua sắm với chúng tôi trước đây, vui lòng nhập thông
                                            tin của bạn vào các ô bên dưới. Nếu bạn là khách hàng mới, vui lòng tiếp tục với
                                            phần Thanh toán &amp; Giao hàng.. </div>
                                          <br />
                                          <div className="first-last-area">
                                            <div className="input-box">
                                              <label>Tên đăng nhập</label>
                                              <input type="email" className="info" name="email" />
                                            </div>
                                            <div className="input-box">
                                              <label>Mật khẩu</label>
                                              <input type="password" className="info" name="padd" />
                                            </div>
                                            <div className="frm-action cc-area">
                                              <div className="input-box tci-box"> <a href="#" className="btn-def btn2">Đăng nhập</a>
                                              </div>
                                              <span>
                                                <input type="checkbox" className="remr" />
                                                Nhớ mật khẩu </span> <a className="forgotten forg" href="#">Quên mật khẩu</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel panel-checkout">
                                      <div className="panel-heading" role="tab" id="headingThree">
                                        <h4 className="panel-title"> <img src="images/acc.jpg" alt="" /> Bạn có mã giảm giá không?
                                          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Nhập mã
                                            giảm giá tại đây </a> </h4>
                                      </div>
                                      <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panel-body coupon-body">
                                          <div className="first-last-area">
                                            <div className="input-box">
                                              <input type="text" placeholder="Mã giảm giá" className="info" name="code" />
                                            </div>
                                            <div className="frm-action">
                                              <div className="input-box tci-box"> <a href="#" className="btn-def btn2">Áp dụng</a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6 col-xs-12">
                                    <div className="billing-details">
                                      <div className="contact-text right-side">
                                        <h2>Chi tiết đơn hàng</h2>
                                        <form action="#">
                                          <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                              <div className="input-box">
                                                <label>Họ <em>*</em></label>
                                                <input type="text" name="namm" className="info" />
                                              </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                              <div className="input-box">
                                                <label>Tên<em>*</em></label>
                                                <input type="text" name="namm" className="info" />
                                              </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                              <div className="input-box">
                                                <label>Tên công ty</label>
                                                <input type="text" name="cpany" className="info" />
                                              </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                              <div className="input-box">
                                                <label>Email<em>*</em></label>
                                                <input type="email" name="email" className="info" />
                                              </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                              <div className="input-box">
                                                <label>Số điện thoại<em>*</em></label>
                                                <input type="text" name="phone" className="info" />
                                              </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                              <div className="input-box">
                                                <label>Thành phố <em>*</em></label>
                                                <select className="selectpicker select-custom" data-live-search="true">
                                                  <option data-tokens="Hà Nội">--Chọn thành phố--</option>
                                                  <option data-tokens="Hà Nội">Hà Nội</option>
                                                  <option data-tokens="Hải Phòng">Hải Phòng</option>
                                                  <option data-tokens="Sài Gòn">Sài Gòn</option>
                                                  <option data-tokens="Thái Bình">Thái Bình</option>
                                                  <option data-tokens="Quảng Ninh">Quảng Ninh</option>
                                                  <option data-tokens="Đà Nẵng">Đà Nẵng</option>
                                                </select>
                                              </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                              <div className="input-box">
                                                <label>Địa chỉ <em>*</em></label>
                                                <input type="text" name="add1" className="info mb-10" />
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-xs-12">
                                    <div className="billing-details">
                                      <div className="right-side">
                                        <div className="form">
                                          <div className="input-box">
                                            <label>Ghi chú đặt hàng</label>
                                            <textarea className="area-tex" defaultValue={""} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Checkout are end*/}
                      </div>
                      <div role="tabpanel" className="tab-pane  fade in" id="complete-order">
                        <div className="row">
                          <div className="col-xs-12">
                            <div className="checkout-payment-area">
                              <div className="checkout-total">
                                <h3>Đơn hàng của bạn</h3>
                                <form action="#" method="post">
                                  <div className="table-responsive">
                                    <table className="checkout-area table">
                                      <thead>
                                        <tr className="cart_item check-heading">
                                          <td className="ctg-type"> Sản phẩm</td>
                                          <td className="cgt-des"> Số tiền</td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="cart_item check-item prd-name">
                                          <td className="ctg-type"> Áo thun dáng xuông × <span>1</span></td>
                                          <td className="cgt-des"> 230.000đ</td>
                                        </tr>
                                        <tr className="cart_item check-item prd-name">
                                          <td className="ctg-type"> Áo kẻ care × <span>1</span></td>
                                          <td className="cgt-des"> 450.000</td>
                                        </tr>
                                        <tr className="cart_item">
                                          <td className="ctg-type"> Tổng tiền</td>
                                          <td className="cgt-des">680.000đ</td>
                                        </tr>
                                        <tr className="cart_item">
                                          <td className="ctg-type">Phí ship</td>
                                          <td className="cgt-des ship-opt">
                                            <div className="shipp">
                                              <input type="radio" id="pay-toggle" name="ship" />
                                              <label htmlFor="pay-toggle">Ship COD: <span>30.000đ</span></label>
                                            </div>
                                            <div className="shipp">
                                              <input type="radio" id="pay-toggle2" name="ship" />
                                              <label htmlFor="pay-toggle2">Free ship</label>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr className="cart_item">
                                          <td className="ctg-type crt-total"> Tổng cộng</td>
                                          <td className="cgt-des prc-total"> 710.000đ </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </form>
                              </div>
                              <div className="payment-section">
                                <div className="pay-toggle">
                                  <form action="#">
                                    <div className="pay-type-total">
                                      <div className="pay-type">
                                        <input type="radio" id="pay-toggle01" name="pay" />
                                        <label htmlFor="pay-toggle01">Chuyển tiền trực tuyến</label>
                                      </div>
                                      <div className="pay-type">
                                        <input type="radio" id="pay-toggle02" name="pay" />
                                        <label htmlFor="pay-toggle02">Thanh toán khi nhận hàng</label>
                                      </div>
                                      <div className="pay-type">
                                        <input type="radio" id="pay-toggle03" name="pay" />
                                        <label htmlFor="pay-toggle03">Thanh toán qua thẻ tín dụng</label>
                                      </div>
                                    </div>
                                    <div className="input-box"> <a className="btn-def btn2" href="#">Đặt hàng</a> </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </Layout>
  );
  
  export default ShoppingCart;