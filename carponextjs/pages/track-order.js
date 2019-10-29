import Layout from "../components/CarpoLayout";

const TrackOrder = () => (
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
          <a href="./track-order.html" className="duong-dan-active">
            <span>Kiểm tra đơn hàng</span>
          </a>
        </div>
      </section>
      <section className="main-container col1-layout">
        <div className="main container">
          <div id="order-tracking">
            <h2>Theo dõi đơn hàng của bạn</h2>
            <p>
              Vui lòng nhập ID đơn hàng của bạn vào ô bên dưới và nhấn Enter.
            </p>
            <form className="order-tracking-form">
              <ul>
                <li>
                  <label htmlFor="track_order_number">Mã đơn hàng</label>
                  <input
                    type="text"
                    name="track_order_number"
                    maxLength={100}
                    required
                  />
                </li>
                <li>
                  <label htmlFor="track_email">Email xác nhận</label>
                  <input
                    type="email"
                    name="track_email"
                    maxLength={100}
                    required
                  />
                </li>
                <li>
                  <a href="./theodoidonhang.html">Kiểm tra</a>
                </li>
              </ul>
            </form>
            <div className="order-tracking-details">
              <p>
                Bạn có thể theo dõi trạng thái đơn đặt hàng của bạn 24 giờ sau
                khi được đặt..
              </p>
              <p>
                Nếu bạn không thể tìm thấy số đơn đặt hàng của bạn, xin vui lòng
                liên hệ với chúng tôi theo số 01 123 456 789.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default TrackOrder;
