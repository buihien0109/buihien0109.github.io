import Layout from '../components/CarpoLayout'

const FollowOrder = () => (
  <Layout>
  <div>
    <section id="duong-dan">
      <div className="container">
        <a href="./index.html">
          <span>Trang chủ</span>
        </a>
        <span>
          <i className="fa fa-angle-right" aria-hidden="true" />
        </span>
        <a href="./theodoidonhang.html" className="duong-dan-active">
          <span>Theo dõi đơn hàng</span>
        </a>
      </div>
    </section>
    <div className="main-container col1-layout">
      <div className="container">
        <div className="row">
          <section className="col-sm-12 col-xs-12">
            <div className="cart-page-area">
              <h2>Đơn hàng của bạn</h2>
              <form>
                <div className="table-responsive">
                  <table className="shop-cart-table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail ">Mã đơn hàng</th>
                        <th className="product-name ">Tên sản phẩm</th>
                        <th className="product-price ">Ngày mua</th>
                        <th className="product-subtotal ">Tổng tiền</th>
                        <th className="product-quantity">
                          Trạng thái đơn hàng
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="item-img">
                          <a href="./chitietdonhang.html">2342819831</a>
                        </td>
                        <td className="item-title">
                          <a href="#">Áo thun basic dáng xuông </a>
                        </td>
                        <td className="item-price"> 19/08/2019 </td>
                        <td className="item-qty"> 230.000đ </td>
                        <td className="total-price text-success">
                          Đã giao hàng
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="item-img">
                          <a href="./chitietdonhang.html">3131453522</a>
                        </td>
                        <td className="item-title">
                          <a href="#">Áo thun basic sọc caro </a>
                        </td>
                        <td className="item-price"> 21/09/2019 </td>
                        <td className="item-qty"> 560.000đ </td>
                        <td className="total-price text-danger">
                          Đang vận chuyển
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <a href="./shop-list.html">
              <button className="btn-continue-shopping">
                Tiếp tục mua hàng
              </button>
            </a>
          </section>
        </div>
      </div>
    </div>
  </div>
  </Layout>
);

export default FollowOrder;
