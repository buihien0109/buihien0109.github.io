import Layout from "../components/CarpoLayout";
import Link from "next/link";
import Head from "next/head"

const Login = () => (
  <Layout>
    <Head>
      <title>Login Page</title>
      <link rel="stylesheet" href="css/login.css" />
    </Head>
    <div>
      <section id="duong-dan">
        <div className="container">
          <a href="./index.html">
            <span>Trang chủ</span>
          </a>
          <span>
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span>
          <a href="./login.html" className="duong-dan-active">
            <span>Đăng nhập</span>
          </a>
        </div>
      </section>
      <section id="login-register">
        <div className="container">
          <div className="login-form">
            <h2 className="text-uppercase text-center">Đăng nhập tài khoản</h2>
            <div className="form-login-floating">
              <div className="floating-form">
                <div className="floating-label">
                  <input
                    className="floating-input"
                    type="text"
                    placeholder=" "
                  />
                  <span className="highlight" />
                  <label>Tài khoản</label>
                </div>
                <div className="floating-label">
                  <input
                    className="floating-input"
                    type="password"
                    placeholder=" "
                  />
                  <span className="highlight" />
                  <label>Mật khẩu</label>
                </div>
              </div>
              <div className="list-checkbox">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlValidation3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlValidation3"
                  >
                    Nhớ mật khẩu
                  </label>
                </div>
              </div>
              <button className="btn-login-form text-uppercase btn-hover">
                Đăng nhập
              </button>
              <a href="#" className="forget-password">
                Quên mật khẩu
              </a>
            </div>
          </div>
          <div className="register-form">
            <img src="./images/dangky-bg.png" alt="" />
            <div className="box-register">
              <h2 className="text-uppercase">Nếu bạn chưa có tài khoản</h2>
              <p>Hãy bấm vào Đăng ký</p>
              <Link href="/register">
                <a href="./register.html">
                  <button className="btn-register-account text-uppercase">
                    Đăng ký tài khoản
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="clear" />
        </div>
      </section>
    </div>
  </Layout>
);

export default Login;
