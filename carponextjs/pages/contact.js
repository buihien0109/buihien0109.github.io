import Layout from "components/CarpoLayout";
import Head from "next/head";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      content: ""
    };
  }

  getInfoContact = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name] : value
    })
  };
  //TODO : Them thong bao nua la xong
  handleSumitFormContact = async (e) => {
    e.preventDefault()
    const { name, phone, email, content} = this.state
    fetch('https://carpo.herokuapp.com/contacts', {
      method: 'POST',
      body: JSON.stringify({
        name : name,
        phone : phone,
        email : email,
        content : content
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      response.status
      return response.text()
    }, function(error) {
      error.message
    })
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Contact Page</title>
          <link rel="stylesheet" href="css/contact.css" />
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
              <a href="./contact.html" className="duong-dan-active">
                <span>Liên hệ</span>
              </a>
            </div>
          </section>
          <section id="contact">
            <div className="container">
              <div className="shop-decript">
                <div className="shop shop-info">
                  <h2 className="text-uppercase">Cửa hàng</h2>
                  <div className="box-info address">
                    <span className="text-uppercase">Địa chỉ</span>
                    <p>
                      <b>Cơ sở 1: </b>123 Nguyễn Trãi, Thanh Xuân, Hà Nội
                    </p>
                    <p>
                      <b>Cơ sở 2: </b>349 Nguyễn Văn Cừ, Long Biên, Hà Nội
                    </p>
                  </div>
                  <div className="box-info hotline">
                    <span className="text-uppercase">Hotline</span>
                    <p>0123456789</p>
                  </div>
                  <div className="box-info fax">
                    <span className="text-uppercase">Fax</span>
                    <p>0123456789</p>
                  </div>
                  <div className="box-info link-shop">
                    <span className="text-uppercase">Liên kết</span>
                    <div className="icon-shop-follow">
                      <span className="facebook">
                        <i
                          className="fa fa-facebook-official"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="youtube">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </span>
                      <span className="twitter">
                        <i
                          className="fa fa-twitter-square"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="shop shop-contact">
                  <h2 className="text-uppercase">Liên hệ</h2>
                  <form onSubmit={this.handleSumitFormContact}>
                    <div className="group-input div-2">
                      <input
                        type="text"
                        placeholder="Tên"
                        name="name"
                        onChange={this.getInfoContact}
                      />
                      <input
                        type="text"
                        placeholder="Số điện thoai"
                        name="phone"
                        onChange={this.getInfoContact}
                      />
                    </div>
                    <div className="group-input">
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={this.getInfoContact}
                      />
                    </div>
                    <div className="group-input">
                      <textarea
                        className="text-area"
                        placeholder="Nội dung"
                        defaultValue={""}
                        name="content"
                        onChange={this.getInfoContact}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-hover btn-form-contact"
                      onClick={this.handleSumitFormContact}
                    >
                      Liên hệ
                    </button>
                  </form>
                </div>
                <div className="clear" />
              </div>
            </div>
          </section>
          <section id="shop-map">
            <div className="container">
              <h2 className="text-uppercase">Bản đồ</h2>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=123%20nguy%E1%BB%85n%20tr%C3%A3i&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Contact;
