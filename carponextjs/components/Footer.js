const Footer = () => (
  <footer>
    <div className="footer-inner">
      <div className="news-letter">
        <div className="container">
          <div className="heading text-center">
            <h2>ĐĂNG KÝ NHẬN THÔNG BÁO</h2>
            <span>
              Đăng ký nhận thông tin khuyến mãi và cập nhật sản phẩm mới nhất từ
              Carpo.
            </span>
          </div>
          <form>
            <input
              type="email"
              placeholder="Nhập địa chỉ Email của bạn"
              required
            />
            <button type="submit">Đăng ký</button>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <h4>Carpo</h4>
            <div className="contacts-info">
              <p>Cửa hàng thời trang nam mang phong cách mới lạ </p>
              <address>
                <i className="fa fa-location-arrow" />{" "}
                <span>123 Nguyễn Trãi, Thanh Xuân, Hà Nội</span>
              </address>
              <div className="phone-footer">
                <i className="fa fa-phone" /> +0 123 456 98765
              </div>
              <div className="email-footer">
                <i className="fa fa-envelope" />{" "}
                <a href="mailto:support@example.com">Carpo@gmail.com</a>{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <h4>Về chúng tôi</h4>
            <ul className="links">
              <li>
                <a href="#">Thông tin về Carpo</a>
              </li>
              <li>
                <a href="#">Quá trình phát triển</a>
              </li>
              <li>
                <a href="#">Hệ thông cửa hàng</a>
              </li>
              <li>
                <a href="#">Tuyển dụng</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <h4>HỖ TRỢ MUA HÀNG</h4>
            <ul className="links">
              <li>
                <a href="#">Hướng dẫn mua hàng</a>
              </li>
              <li>
                <a href="#">Hướng dẫn thanh toán</a>
              </li>
              <li>
                <a href="#">Phương thức vận chuyển</a>
              </li>
              <li>
                <a href="#">Tra cứu đơn hàng</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-lg-3 col-md-6 col-sm-6">
            <div className="social">
              <h4>Theo dõi chúng tôi</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 coppyright text-center">
            © 2019 CarpoShop.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
