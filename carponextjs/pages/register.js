import Layout from '../components/CarpoLayout'

const Register = () => (
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
        <a href="./register.html">
          <span>Đăng ký</span>
        </a>
      </div>
    </section>
    <section id="register">
      <div className="container">
        <div className="register-form">
          <form>
            <h2>Tạo tài khoản khách hàng cá nhân</h2>
            <div className="group-input">
              <span>
                Email đăng ký <em className="text-danger">*</em>
              </span>
              <input type="text" required />
            </div>
            <div className="group-input">
              <span>
                Tên <em className="text-danger">*</em>
              </span>
              <input type="text" required />
            </div>
            <div className="group-input">
              <span>
                Số điện thoại <em className="text-danger">*</em>
              </span>
              <input type="text" required />
            </div>
            <div className="group-input">
              <span>
                Mật khẩu <em className="text-danger">*</em>
              </span>
              <input type="text" required />
            </div>
            <div className="group-input">
              <span>
                Nhập lại mật khẩu <em className="text-danger">*</em>
              </span>
              <input type="text" required />
            </div>
            <button
              type="submit"
              className="btn-hover btn-register-form text-uppercase text-white bg-main"
            >
              Đăng ký
            </button>
          </form>
        </div>
        <div className="clear" />
      </div>
    </section>
  </div>
  </Layout>
);

export default Register;
