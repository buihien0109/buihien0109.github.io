import Layout from "../components/CarpoLayout";
import Head from 'next/head'

const Index = () => (
  
  <Layout>
    <Head>
        <title>Home page</title>
    </Head>
    <div>
      <div className="container jtv-home-revslider">
        <div className="row">
          <div className="col-lg-9 col-sm-9 col-xs-12 jtv-main-home-slider">
            <div className="banner-block">
              {" "}
              <a href="#">
                {" "}
                <img src="./images/l-post8.jpg" alt="" />{" "}
              </a>
              <div className="text-des-container pad-zero">
                <div className="text-des">
                  <p>Bộ sưu tập</p>
                  <h2>Thu - Đông 2019</h2>
                  <p className="text-danger">
                    Tham gia để nhận cơ hội giảm giá lên đến 50%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="banner-block">
              {" "}
              <a href="#">
                {" "}
                <img src="./images/l-post5.jpg" alt="" />{" "}
              </a>
              <div className="text-des-container pad-zero">
                <div className="text-des">
                  <p>Phong cách mới lạ</p>
                  <h2>Phụ kiện nam</h2>
                </div>
              </div>
            </div>
            <div className="banner-block">
              {" "}
              <a href="#">
                {" "}
                <img src="./images/l-post6.jpg" alt="" />{" "}
              </a>
              <div className="text-des-container">
                <div className="text-des">
                  <p>Xu hướng 2019</p>
                  <h2>Bộ sưu tập</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Support Policy Box */}
      <div className="container">
        <div className="support-policy-box">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="support-policy">
                {" "}
                <i className="fa fa-truck" />
                <div className="content">Miễn phí đơn hàng trên 500.000</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="support-policy">
                {" "}
                <i className="fa fa-phone" />
                <div className="content">Hỗ trợ +1 123 456 7890</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="support-policy">
                {" "}
                <i className="fa fa-refresh" />
                <div className="content">30 ngày đổi trả</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sản phẩm mới */}
      <section className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              {/* Sản phẩm hot slider */}
              <div className="jtv-trending-products">
                <div className="slider-items-products">
                  <div className="jtv-new-title">
                    <h2>Sản phẩm mới nhất</h2>
                  </div>
                  <div
                    id="latest-slider"
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
                                href="./product-detail.html"
                              >
                                {" "}
                                <img
                                  alt="Product tilte is here"
                                  src="./images/at2.png"
                                />{" "}
                              </a>
                              <div className="new-label new-top-left">new</div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="./product-detail.html"
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
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                  src="./images/at3.png"
                                />{" "}
                              </a>
                              <div className="sale-label sale-top-right">
                                Sale
                              </div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="./product-detail.html"
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
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                  src="./images/at4.png"
                                />{" "}
                              </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="./product-detail.html"
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
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                  src="./images/at5.png"
                                />{" "}
                              </a>
                              <div className="sale-label sale-top-right">
                                Sale
                              </div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="./product-detail.html"
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
                                      <span className="price">640.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                  src="./images/at6.png"
                                />{" "}
                              </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="./product-detail.html"
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
                                      <span className="price">870.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                  src="./images/at8.png"
                                />{" "}
                              </a>
                              <div className="sale-label sale-top-left">
                                Sale
                              </div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="./product-detail.html"
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
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                  src="./images/at9.png"
                                />{" "}
                              </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a
                                className="quickview-btn"
                                href="./product-detail.html"
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
                                      <span className="price">760.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
      {/* Sản phẩm bán chạy */}
      <section className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              {/* Sản phẩm hot slider */}
              <div className="jtv-trending-products">
                <div className="slider-items-products">
                  <div className="jtv-new-title">
                    <h2>Sản phẩm bán chạy</h2>
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
                                href="./product-detail.html"
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
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                href="./product-detail.html"
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
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                href="./product-detail.html"
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
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                href="./product-detail.html"
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
                                      <span className="price">640.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                href="./product-detail.html"
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
                                      <span className="price">870.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                href="./product-detail.html"
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
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
                                href="./product-detail.html"
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
                                      <span className="price">760.000đ</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button
                                        className="button btn-cart"
                                        type="button"
                                      >
                                        <span>
                                          <i className="fa fa-shopping-cart" />{" "}
                                          Thêm vào giỏ hàng
                                        </span>
                                      </button>
                                    </a>
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
              {/* Bài viết mới nhất */}
              <div className="jtv-latest-blog">
                <div className="jtv-new-title">
                  <h2>Tin tức mới nhất</h2>
                </div>
                <div className="row">
                  <div className="blog-outer-container">
                    <div className="blog-inner">
                      <div className="col-xs-12 col-sm-6 col-md-4 blog-preview_item">
                        <div className="entry-thumb jtv-blog-img-hover">
                          {" "}
                          <a href="./blog-detail.html">
                            <img alt="Blog" src="./images/l-post1.jpg" />{" "}
                          </a>{" "}
                        </div>
                        <h4 className="blog-preview_title">
                          <a href="./blog-detail.html">
                            3 Kiểu Quần Jeans nam “không thể thiếu” trong tủ đồ
                            một chàng trai Hiện Đại
                          </a>
                        </h4>
                        <div className="blog-preview_info">
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-user" />
                              By <a href="#">Admin</a>
                            </li>
                            <li>
                              <i className="fa fa-comments" />
                              <a href="#">8 Bình luận</a>
                            </li>
                            <li>
                              <i className="fa fa-clock-o" />
                              <span className="day">12</span>
                              <span className="month">Feb</span>
                            </li>
                          </ul>
                          <div className="blog-preview_desc">
                            Bất chấp mọi xu hướng thời trang, Quần Jean Nam kể
                            từ khi ra đời hơn 1 thế kỷ trước đến nay vẫn là món
                            đồ yêu thích.
                            <a className="read_btn" href="./blog-detail.html">
                              Xem thêm
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4 blog-preview_item">
                        <div className="entry-thumb jtv-blog-img-hover">
                          {" "}
                          <a href="./blog-detail.html">
                            <img alt="Blog" src="./images/l-post2.jpg" />{" "}
                          </a>{" "}
                        </div>
                        <h4 className="blog-preview_title">
                          <a href="./blog-detail.html">
                            Cách giữ trang phục bền đẹp theo từng loại vải
                          </a>
                        </h4>
                        <div className="blog-preview_info">
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-user" />
                              By <a href="#">Admin</a>
                            </li>
                            <li>
                              <i className="fa fa-comments" />
                              <a href="#">20 Bình luận</a>
                            </li>
                            <li>
                              <i className="fa fa-clock-o" />
                              <span className="day">25</span>
                              <span className="month">May</span>
                            </li>
                          </ul>
                          <div className="blog-preview_desc">
                            Khi cất giữ vải lụa, bạn nên treo chúng phẳng phiu
                            cẩn thận ở nơi tránh ánh nắng trực tiếp. Không dùng
                            hộp nhựa để đựng bởi lụa là loại sợi vải tự nhiên và
                            chúng cần được 'thở.{" "}
                            <a className="read_btn" href="./blog-detail.html">
                              Xem thêm
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4 blog-preview_item">
                        <div className="entry-thumb jtv-blog-img-hover">
                          {" "}
                          <a href="./blog-detail.html">
                            <img alt="Blog" src="./images/l-post3.jpg" />{" "}
                          </a>{" "}
                        </div>
                        <h4 className="blog-preview_title">
                          <a href="./blog-detail.html">
                            5 cách phối đồ nam cho ngày hè sôi động
                          </a>
                        </h4>
                        <div className="blog-preview_info">
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-user" />
                              By <a href="#">Admin</a>
                            </li>
                            <li>
                              <i className="fa fa-comments" />
                              <a href="#">3 Bình luận</a>
                            </li>
                            <li>
                              <i className="fa fa-clock-o" />
                              <span className="day">15</span>
                              <span className="month">Sep</span>
                            </li>
                          </ul>
                          <div className="blog-preview_desc">
                            Chúng ta chắc chắn ai cũng đã từng rơi vào tình
                            huống sau: tắt đồng hồ báo thức, ngủ tiếp, thức dậy
                            trễ, chỉ còn đúng vài phút để bước chân ra khỏi nhà
                            và hoàn toàn.{" "}
                            <a className="read_btn" href="./blog-detail.html">
                              Xem thêm
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Tin tức mới nhất */}
            </div>
          </div>
        </div>
      </section>
      {/* Thư viện ảnh */}
      <section className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              {/* Sản phẩm hot slider */}
              <div className="jtv-trending-products">
                <div className="slider-items-products">
                  <div className="jtv-new-title">
                    <h2>Thư viện ảnh</h2>
                  </div>
                  <div className="gallery-image">
                    <div className="row">
                      <div className=" col-xs-12 col-sm-12 col-md-8">
                        <div className="img-container">
                          <div className="img-info">
                            <h3 className="text-uppercase">
                              Bộ sưu tập tháng&nbsp;10
                            </h3>
                            <p>Mới lạ - phong cách</p>
                          </div>
                          <span className="top-left" />
                          <span className="right-bottom" />
                          <img src="./images/l-post1.jpg" alt="" />
                        </div>
                      </div>
                      <div className=" col-xs-12 col-sm-12 col-md-4">
                        <div className="img-container">
                          <div className="img-info">
                            <h3 className="text-uppercase">Xu hướng</h3>
                            <p>Thời trang và cuộc sống</p>
                          </div>
                          <span className="top-left" />
                          <span className="right-bottom" />
                          <img src="./images/l-post4.jpg" alt="" />
                        </div>
                      </div>
                      <div className=" col-xs-12 col-sm-12 col-md-4">
                        <div className="img-container">
                          <div className="img-info">
                            <h3 className="text-uppercase">instagram</h3>
                            <p>Trẻ trung - độc đáo</p>
                          </div>
                          <span className="top-left" />
                          <span className="right-bottom" />
                          <img src="./images/l-post9.jpg" alt="" />
                        </div>
                      </div>
                      <div className=" col-xs-12 col-sm-12 col-md-8">
                        <div className="img-container">
                          <div className="img-info">
                            <h3 className="text-uppercase">
                              BTS Thu&nbsp;Đông - 2019
                            </h3>
                            <p>Phong cách đến từ sự sáng tạo</p>
                          </div>
                          <span className="top-left" />
                          <span className="right-bottom" />
                          <img src="./images/l-post8.jpg" alt="" />
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

export default Index;
