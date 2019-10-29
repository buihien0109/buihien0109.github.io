import Layout from '../components/CarpoLayout'

const DetailOrder = () => (
  <Layout>
  <div className="main-container col1-layout">
    <div className="container">
      <div className="row">
        <section className="col-sm-12 col-xs-12">
          <div className="cart-page-area">
            <h2 className="detail-bill">Chi tiết đơn hàng</h2>
            <div className="customer-detail">
              <div className="id-detail">
                <p>
                  <b>Mã đơn hàng: </b>
                  238491031
                </p>
                <p>
                  <b>Ngày đặt hàng: </b>
                  31/08/2019
                </p>
              </div>
              <div className="customer-info">
                <div className="customer-address">
                  <h2 className="text-uppercase">Địa chỉ người nhận</h2>
                  <div className="box-detail">
                    <h2 className="text-uppercase">Bùi Văn Hiên</h2>
                    <p>Số nhà 2, An Đào, Trâu Quỳ, Gia Lâm, Hà Nội</p>
                    <p>SĐT: 0344005816</p>
                  </div>
                </div>
                <div className="customer-address">
                  <h2 className="text-uppercase">Hình thức giao hàng</h2>
                  <div className="box-detail">
                    <p>Vận chuyển miễn phí</p>
                  </div>
                </div>
                <div className="customer-address">
                  <h2 className="text-uppercase">Hình thức thanh toán</h2>
                  <div className="box-detail">
                    <p>Thanh toán tiền mặt khi nhận hàng</p>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <div className="table-responsive">
                <table className="shop-cart-table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail ">Sản phẩm</th>
                      <th className="product-name ">Số lượng</th>
                      <th className="product-price ">Giá tiền</th>
                      <th className="product-subtotal ">Giảm giá</th>
                      <th className="product-quantity">Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="cart_item">
                      <td className="item-img">
                        <div className="card-product1">
                          <div className="card-img1">
                            <img
                              src="./images/chitietdonhang-anh1.png"
                              alt=""
                            />
                          </div>
                          <div className="card-detail1">
                            <p>Áo polo dáng xuông</p>
                            <p>SKU : PL01002</p>
                          </div>
                        </div>
                      </td>
                      <td className="item-title">1</td>
                      <td className="item-price"> 450.000đ </td>
                      <td className="item-qty"> 200.000đ </td>
                      <td className="total-price">250.000đ</td>
                    </tr>
                    <tr className="cart_item">
                      <td className="item-img">
                        <div className="card-product1">
                          <div className="card-img1">
                            <img
                              src="./images/chitietdonhang-anh2.png"
                              alt=""
                            />
                          </div>
                          <div className="card-detail1">
                            <p>Áo thun cổ tròn</p>
                            <p>SKU : CT03402</p>
                          </div>
                        </div>
                      </td>
                      <td className="item-title">2</td>
                      <td className="item-price"> 10000.000đ </td>
                      <td className="item-qty"> 100.000đ </td>
                      <td className="total-price">900.000đ</td>
                    </tr>
                    <tr className="cart_item">
                      <td className="item-img">
                        <div className="card-product1">
                          <div className="card-img1">
                            <img
                              src="./images/chitietdonhang-anh3.png"
                              alt=""
                            />
                          </div>
                          <div className="card-detail1">
                            <p>Áo thun in hình</p>
                            <p>SKU : IH03401</p>
                          </div>
                        </div>
                      </td>
                      <td className="item-title">1</td>
                      <td className="item-price"> 550.000đ </td>
                      <td className="item-qty"> 0đ </td>
                      <td className="total-price">550.000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <a href="./shop-list.html">
            <button className="btn-continue-shopping">Tiếp tục mua hàng</button>
          </a>
        </section>
      </div>
    </div>
  </div>
  </Layout>
);

export default DetailOrder;
