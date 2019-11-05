import Layout from "../../components/CarpoLayout";
import Head from "next/head";

const ProductDetail = ({ url: { query: { id } } }) => (
  <Layout>
    <Head>
      <title>Product Detail Page</title>
      <link rel="stylesheet" href="/css/product-detail.css" />
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
          <a href="./shop-list.html">
            <span>Sản phẩm</span>
          </a>
          <span>
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span>
          <a href="./product-detail.html">
            <span>Áo thun cổ trơn túi ngực {id}</span>
          </a>
        </div>
      </section>
      <section className="main-container col1-layout">
        <div className="container">
          <div className="row">
            <div className="product-view">
              <div className="product-essential">
                <form action="#" method="post" id="product_addtocart_form">
                  <div className="product-img-box col-lg-4 col-sm-5 col-xs-12">
                    <div className="product-image">
                      <div className="product-full">
                        <img
                          id="product-zoom"
                          src="./images/7.png"
                          data-zoom-image="./images/17.jpg"
                          alt="product-image"
                        />
                      </div>
                    </div>
                    {/* end: more-images */}
                  </div>
                  <div className="product-shop col-lg-8 col-sm-7 col-xs-12">
                    <div className="product-name">
                      <h1>Áo thun cổ trơn túi ngực {id}</h1>
                    </div>
                    <div className="rating">
                      {" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" />{" "}
                      <i className="fa fa-star-o" />{" "}
                      <i className="fa fa-star-o" />{" "}
                    </div>
                    <div className="price-block">
                      <div className="price-box">
                        <p className="special-price">
                          {" "}
                          <span className="price-label">Giá khuyến mại</span>
                          <span className="price"> 230.000đ </span>
                        </p>
                        <p className="old-price">
                          {" "}
                          <span className="price-label">Giá:</span>
                          <span className="price" />
                          470.000đ{" "}
                        </p>
                        <p className="availability in-stock">
                          <span>Còn hàng</span>
                        </p>
                      </div>
                    </div>
                    <div className="short-description">
                      <h2>Mô tả</h2>
                      <p>
                        Áo phông Cotton US, in dưới túi. Phom Regular, cổ tròn,
                        ngắn tay. Phong cách năng động, khỏe khoăn. Phù hợp với
                        quần short và jeans
                      </p>
                      <br />
                      <p>
                        {" "}
                        Áo thun trắng luôn là sự lựa chọn hàng đầu của các chàng
                        trai bởi sự đơn giản, dễ phối đồ và mang lại phtong cách
                        tươi mới, trẻ trung, hiện đại cho người mặc.
                      </p>
                    </div>
                    <div className="add-to-box">
                      <div className="add-to-cart">
                        <div className="pull-left">
                          <div className="custom pull-left">
                            <label>Số lượng:</label>
                            <button
                              type="button"
                              className="increase items-count"
                            >
                              <i className="fa fa-minus">&nbsp;</i>
                            </button>
                            <input
                              type="text"
                              className="input-text qty"
                              title="Qty"
                              defaultValue={1}
                              maxLength={12}
                              id="qty"
                              name="qty"
                            />
                            <button
                              className="increase items-count"
                              type="button"
                            >
                              <i className="fa fa-plus">&nbsp;</i>
                            </button>
                          </div>
                        </div>
                        <button
                          className="button btn-cart"
                          title="Add to Cart"
                          type="button"
                        >
                          <i className="fa fa-shopping-cart" /> Thêm vào giỏ
                          hàng
                        </button>
                      </div>
                    </div>
                    <div className="social">
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
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="product-collateral col-lg-12 col-sm-12 col-xs-12">
              <ul id="product-detail-tab" className="nav nav-tabs product-tabs">
                <li className="active">
                  {" "}
                  <a href="#product_tabs_description" data-toggle="tab">
                    {" "}
                    Chi tiết sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#reviews_tabs" data-toggle="tab">
                    Đánh giá sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#product_tabs_custom" data-toggle="tab">
                    Hướng dẫn mua hàng
                  </a>
                </li>
              </ul>
              <div id="productTabContent" className="tab-content">
                <div
                  className="tab-pane fade in active"
                  id="product_tabs_description"
                >
                  <div className="std">
                    <p>
                      Có nguồn gốc từ loại áo chống rét của người Eskimo, áo
                      parka rất được ưu ái trong những ngày đại hàn bởi khả năng
                      giữ ấm tuyệt vời. Đặc điểm của chiếc áo khoác này tại H2T
                      là được cắt may rộng rãi, có thể có mũ và lớp lót lông bên
                      trong, thường gắn liền với các gam màu trầm, quân đội như
                      xanh khaki, nâu, đen... Item này rất được ưa chuộng ở các
                      nước xứ lạnh bởi ngoài khả năng giữ ấm tương đối tốt, nó
                      còn mang lại nét phóng khoáng, thoải mái cho người mặc..
                    </p>
                    <p>
                      {" "}
                      Nếu có một lời khuyên dành cho bạn ngay khi tiết trời đang
                      sang thu vào đông này thì đó là: Đừng ngại chi tiền cho
                      những chiếc áo khoác chất lượng! Có thể nói không một món
                      đồ nào quan trọng và đáng đầu tư hơn một chiếc áo khoác ấm
                      khi trời chuyển lạnh. Để chọn được chiếc áo khoác tốt và
                      phù hợp nhất bạn nên ưu tiên 3 tiêu chí: chất liệu, kiểu
                      dáng và sự tiện dụng. Vì sao chất liệu cần được đặt lên
                      hàng đầu? Bởi một chiếc áo khoác có chất liệu tốt sẽ thể
                      hiện khả năng giữ ấm tuyệt vời của nó. Mà trời lạnh thì
                      không gì quý giá hơn sự ấm áp phải không?.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="reviews_tabs">
                  <div
                    className="box-collateral box-reviews"
                    id="customer-reviews"
                  >
                    <div className="box-reviews1">
                      <div className="form-add">
                        <form
                          id="review-form"
                          method="post"
                          action="http://www.jtvcommerce.com/review/product/post/id/176/"
                        >
                          <h3>Viết đánh giá của bạn</h3>
                          <fieldset>
                            <h4>
                              Làm thế nào để bạn đánh giá sản phẩm này?{" "}
                              <em className="required">*</em>
                            </h4>
                            <span id="input-message-box" />
                            <table
                              id="product-review-table"
                              className="data-table"
                            >
                              <thead>
                                <tr className="first last">
                                  <th>&nbsp;</th>
                                  <th>
                                    <span className="nobr">1 *</span>
                                  </th>
                                  <th>
                                    <span className="nobr">2 *</span>
                                  </th>
                                  <th>
                                    <span className="nobr">3 *</span>
                                  </th>
                                  <th>
                                    <span className="nobr">4 *</span>
                                  </th>
                                  <th>
                                    <span className="nobr">5 *</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="first odd">
                                  <th>Giá bán</th>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={11}
                                      id="Price_1"
                                      name="ratings[3]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={12}
                                      id="Price_2"
                                      name="ratings[3]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={13}
                                      id="Price_3"
                                      name="ratings[3]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={14}
                                      id="Price_4"
                                      name="ratings[3]"
                                    />
                                  </td>
                                  <td className="value last">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={15}
                                      id="Price_5"
                                      name="ratings[3]"
                                    />
                                  </td>
                                </tr>
                                <tr className="even">
                                  <th>Giá trị</th>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={6}
                                      id="Value_1"
                                      name="ratings[2]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={7}
                                      id="Value_2"
                                      name="ratings[2]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={8}
                                      id="Value_3"
                                      name="ratings[2]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={9}
                                      id="Value_4"
                                      name="ratings[2]"
                                    />
                                  </td>
                                  <td className="value last">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={10}
                                      id="Value_5"
                                      name="ratings[2]"
                                    />
                                  </td>
                                </tr>
                                <tr className="last odd">
                                  <th>Chất lượng</th>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={1}
                                      id="Quality_1"
                                      name="ratings[1]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={2}
                                      id="Quality_2"
                                      name="ratings[1]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={3}
                                      id="Quality_3"
                                      name="ratings[1]"
                                    />
                                  </td>
                                  <td className="value">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={4}
                                      id="Quality_4"
                                      name="ratings[1]"
                                    />
                                  </td>
                                  <td className="value last">
                                    <input
                                      type="radio"
                                      className="radio"
                                      defaultValue={5}
                                      id="Quality_5"
                                      name="ratings[1]"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <input
                              type="hidden"
                              defaultValue
                              className="validate-rating"
                              name="validate_rating"
                            />
                            <div className="review1">
                              <ul className="form-list">
                                <li>
                                  <label
                                    className="required"
                                    htmlFor="nickname_field"
                                  >
                                    Họ tên<em>*</em>
                                  </label>
                                  <div className="input-box">
                                    <input
                                      type="text"
                                      className="input-text"
                                      id="nickname_field"
                                      name="nickname"
                                    />
                                  </div>
                                </li>
                                <li>
                                  <label
                                    className="required"
                                    htmlFor="summary_field"
                                  >
                                    Tóm tắt<em>*</em>
                                  </label>
                                  <div className="input-box">
                                    <input
                                      type="text"
                                      className="input-text"
                                      id="summary_field"
                                      name="title"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="review2">
                              <ul>
                                <li>
                                  <label
                                    className="required "
                                    htmlFor="review_field"
                                  >
                                    Đánh giá<em>*</em>
                                  </label>
                                  <div className="input-box">
                                    <textarea
                                      rows={3}
                                      cols={5}
                                      id="review_field"
                                      name="detail"
                                      defaultValue={""}
                                    />
                                  </div>
                                </li>
                              </ul>
                              <div className="buttons-set">
                                <button
                                  className="button submit"
                                  title="Submit Review"
                                  type="submit"
                                >
                                  <span>Gửi đánh giá</span>
                                </button>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="product_tabs_custom">
                  <div className="product-tabs-content-inner clearfix">
                    <p>
                      <b>
                        1. Khu vực Hà Nội: (Ship hàng vào 16h chiều hàng ngày)
                      </b>
                    </p>
                    <p>
                      <i>
                        * Với các bạn ở HN có thể đến trực tiếp cửa hàng 146 Xã
                        Đàn, 51 Xuân Thủy, 390 Quang Trung, 491A Nguyễn Văn Cừ
                        (mở cửa từ 8:00 am- 22:00 pm) để giao dịch trực tiếp.
                      </i>
                    </p>
                    <p>
                      <i>
                        * Các bạn ở HN nhưng không có có điều kiện qua xem trực
                        tiếp có thể liên hệ với bên mình để đc vận chuyển và
                        thanh toán trực tiếp tại nhà bằng cách inbox trực tiếp
                        fb hoặc chat trực tiếp trên website Shop:
                        https://h2tstore.vn
                      </i>
                    </p>
                    <p>
                      <i>
                        (Địa chỉ vs số đt người nhận + Mẫu áo +Mầu áo+ size hoặc
                        chiều cao cân nặng --&gt;inbox tại
                        https://www.facebook.com/shopH2T hoặc gửi đơn hàng trên
                        web )
                      </i>
                    </p>
                    <p>
                      <i>
                        (Giá trị thanh toán = giá trị hàng + 30K tiền phí ship
                        ko kể số lượng)
                      </i>
                    </p>
                    <p>
                      <b>
                        <i>Khi chuyển đến sẽ gọi điện cho bạn trước 30 phút!</i>
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Container */}
      <section className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              {/* Sản phẩm hot slider */}
              <div className="jtv-trending-products">
                <div className="slider-items-products">
                  <div className="jtv-new-title">
                    <h2>Sản phẩm tương tự</h2>
                  </div>
                  <div
                    id="trending-slider"
                    className="product-flexslider hidden-buttons"
                  >
                    <div className="slider-items slider-width-col4 products-grid">
                      <div className="item">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info">
                              <a
                                className="product-image"
                                title="Product tilte is here"
                                href="./blog-detail.html"
                              >
                                {" "}
                                <img
                                  alt="Product tilte is here"
                                  src="./images/at12.png"
                                />{" "}
                              </a>
                              <div className="new-label new-top-left">new</div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="quick-view.html"
                              >
                                <span>Xem nhanh</span>
                              </a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                {" "}
                                <a
                                  title="Product tilte is here"
                                  href="./product-detail.html"
                                >
                                  Áo thun da trơn túi ngực{" "}
                                </a>
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  {" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    {" "}
                                    <span className="regular-price">
                                      {" "}
                                      <span className="price">320.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <button
                                      className="button btn-cart"
                                      type="button"
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart" />{" "}
                                        Thêm vào giỏ hàng
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info">
                              <a
                                className="product-image"
                                title="Product tilte is here"
                                href="./product-detail.html"
                              >
                                {" "}
                                <img
                                  alt="Product tilte is here"
                                  src="./images/at13.png"
                                />{" "}
                              </a>
                              <div className="sale-label sale-top-right">
                                Sale
                              </div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="quick-view.html"
                              >
                                <span>Xem nhanh</span>
                              </a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                {" "}
                                <a
                                  title="Product tilte is here"
                                  href="./product-detail.html"
                                >
                                  Áo wash in hình{" "}
                                </a>{" "}
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  {" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    {" "}
                                    <span className="regular-price">
                                      {" "}
                                      <span className="price">530.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <button
                                      className="button btn-cart"
                                      type="button"
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart" />{" "}
                                        Thêm vào giỏ hàng
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info">
                              <a
                                className="product-image"
                                title="Product tilte is here"
                                href="./product-detail.html"
                              >
                                {" "}
                                <img
                                  alt="Product tilte is here"
                                  src="./images/at14.png"
                                />{" "}
                              </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="quick-view.html"
                              >
                                <span>Xem nhanh</span>
                              </a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                {" "}
                                <a
                                  title="Product tilte is here"
                                  href="./product-detail.html"
                                >
                                  Áo thun thể thao{" "}
                                </a>{" "}
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  {" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    {" "}
                                    <span className="regular-price">
                                      {" "}
                                      <span className="price">720.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <button
                                      className="button btn-cart"
                                      type="button"
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart" />{" "}
                                        Thêm vào giỏ hàng
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info">
                              <a
                                className="product-image"
                                title="Product tilte is here"
                                href="./product-detail.html"
                              >
                                {" "}
                                <img
                                  alt="Product tilte is here"
                                  src="./images/aothun4.png"
                                />{" "}
                              </a>
                              <div className="sale-label sale-top-right">
                                Sale
                              </div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="quick-view.html"
                              >
                                <span>Xem nhanh</span>
                              </a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                {" "}
                                <a
                                  title="Product tilte is here"
                                  href="./product-detail.html"
                                >
                                  Áo len cộc tay mùa hè{" "}
                                </a>{" "}
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  {" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    {" "}
                                    <span className="regular-price">
                                      {" "}
                                      <span className="price">640.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <button
                                      className="button btn-cart"
                                      type="button"
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart" />{" "}
                                        Thêm vào giỏ hàng
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info">
                              <a
                                className="product-image"
                                title="Product tilte is here"
                                href="./product-detail.html"
                              >
                                {" "}
                                <img
                                  alt="Product tilte is here"
                                  src="./images/at1.png"
                                />{" "}
                              </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="quick-view.html"
                              >
                                <span>Xem nhanh</span>
                              </a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                {" "}
                                <a
                                  title="Product tilte is here"
                                  href="./product-detail.html"
                                >
                                  Áo thun cổ tròn miix{" "}
                                </a>{" "}
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  {" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    {" "}
                                    <span className="regular-price">
                                      {" "}
                                      <span className="price">870.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <button
                                      className="button btn-cart"
                                      type="button"
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart" />{" "}
                                        Thêm vào giỏ hàng
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info">
                              <a
                                className="product-image"
                                title="Product tilte is here"
                                href="./product-detail.html"
                              >
                                {" "}
                                <img
                                  alt="Product tilte is here"
                                  src="./images/at10.png"
                                />{" "}
                              </a>
                              <div className="sale-label sale-top-left">
                                Sale
                              </div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="quick-view.html"
                              >
                                <span>Xem nhanh</span>
                              </a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                {" "}
                                <a
                                  title="Product tilte is here"
                                  href="./product-detail.html"
                                >
                                  Áo thun 3 lỗ{" "}
                                </a>{" "}
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  {" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    {" "}
                                    <span className="regular-price">
                                      {" "}
                                      <span className="price">440.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <button
                                      className="button btn-cart"
                                      type="button"
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart" />{" "}
                                        Thêm vào giỏ hàng
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info">
                              <a
                                className="product-image"
                                title="Product tilte is here"
                                href="./product-detail.html"
                              >
                                {" "}
                                <img
                                  alt="Product tilte is here"
                                  src="./images/at11.png"
                                />{" "}
                              </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="quick-view.html"
                              >
                                <span>Xem nhanh</span>
                              </a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                {" "}
                                <a
                                  title="Product tilte is here"
                                  href="./product-detail.html"
                                >
                                  Áo phông cổ tròn cao cấp{" "}
                                </a>{" "}
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  {" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />{" "}
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    {" "}
                                    <span className="regular-price">
                                      {" "}
                                      <span className="price">760.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <button
                                      className="button btn-cart"
                                      type="button"
                                    >
                                      <span>
                                        <i className="fa fa-shopping-cart" />{" "}
                                        Thêm vào giỏ hàng
                                      </span>
                                    </button>
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
              {/* End Sản phẩm hot slider */}
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default ProductDetail;
