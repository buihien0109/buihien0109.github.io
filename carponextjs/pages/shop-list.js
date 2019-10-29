import Layout from '../components/CarpoLayout'

const ShopList = () => (
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
            <a href="./shop-list.html" className="duong-dan-active">
              <span>Sản phẩm</span>
            </a>
          </div>
        </section>
        <div className="main-container col2-left-layout">
          <div className="container">
            <div className="row">
              <div className="col-sm-9 col-sm-push-3 main-inner">
                <div className="category-description std">
                  <div className="slider-items-products">
                    <div id="category-desc-slider" className="product-flexslider hidden-buttons">
                      <div className="slider-items slider-width-col1 owl-carousel owl-theme">
                        <div className="item"> <a href="#"><img alt="New Special Collection" src="./images/new-fashion.jpg" /></a>
                          <div className="cat-img-title cat-bg cat-box">
                            <h2 className="cat-heading">Bắt trọn thu vàng - Sale up đến 50%
                            </h2>
                            <p>Để viết thêm thông tin về chương trình. Vui lòng truy cập Carpo.vn </p>
                          </div>
                        </div>
                        <div className="item"> <a href="#"><img alt="New Fashion" src="./images/new-special.jpg" /></a>
                          <div className="cat-img-title cat-bg cat-box">
                            <h2 className="cat-heading">Thời trang thu đông</h2>
                            <p>Tưng bừng lựa chọn - Thỏa thích mua sắm. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <article className="col-main">
                  <div className="page-title">
                    <h2>Danh mục sản phẩm</h2>
                  </div>
                  <div className="toolbar">
                    <div id="sort-by">
                      <label className="left">Sắp xếp: </label>
                      <ul>
                        <li><a href="#">Tùy chọn<span className="right-arrow" /></a>
                          <ul>
                            <li><a href="#">Giảm giá nhiều nhất</a></li>
                            <li><a href="#">Từ cao đến thấp</a></li>
                            <li><a href="#">Đánh giá cao nhất</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="pager">
                      <div id="limiter">
                        <label>View: </label>
                        <ul>
                          <li><a href="#">12<span className="right-arrow" /></a>
                            <ul>
                              <li><a href="#">15</a></li>
                              <li><a href="#">20</a></li>
                              <li><a href="#">35</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="category-products">
                    <ul className="products-grid">
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at1.png" /> </a>
                              <div className="new-label new-top-left">new</div>
                              <div className="sale-label sale-top-right">sale</div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo thun thể thao </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">140.000đ</span></span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at3.png" /> </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo thun basic cổ tròn </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">230.000đ</span></span></div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at4.png" /> </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo phông polo Justmen </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">199.000đ</span></span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at5.png" /> </a>
                              <div className="sale-label sale-top-left">sale</div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo len cộc tay mùa hè </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">$55.00</span></span></div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at6.png" /> </a>
                              <div className="new-label new-top-left">new</div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo phông polo nam </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">350.000đ</span></span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at8.png" /> </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo thun in hình </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">530.000đ</span></span></div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at9.png" /> </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo wash in hình </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">380.000đ</span></span>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at10.png" /> </a>
                              <div className="new-label new-top-left">new</div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo thun vải wash in hình </a>
                              </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">420.000đ</span></span></div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at11.png" /> </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo thun Sogoku </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">260.000đ</span></span></div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at12.png" /> </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo thun cổ tròn miix </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">1195.000đ</span></span></div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at13.png" /> </a>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo thun trơn basic </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">650.000đ</span></span></div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6">
                        <div className="item-inner">
                          <div className="item-img">
                            <div className="item-img-info"><a className="product-image" title="Product tilte is here" href="./product-detail.html"> <img alt="Product tilte is here" src="./images/at14.png" /> </a>
                              <div className="new-label new-top-left">new</div>
                              <div className="mask-shop-white" />
                              <div className="new-label new-top-left">new</div>
                              <a className="quickview-btn" href="./product-detail.html"><span>Xem
                                  nhanh</span></a>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title"> <a title="Product tilte is here" href="./product-detail.html">Áo thun basic đi biển </a> </div>
                              <div className="item-content">
                                <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                </div>
                                <div className="item-price">
                                  <div className="price-box"> <span className="regular-price"> <span className="price">350.000đ</span></span></div>
                                </div>
                                <div className="actions">
                                  <div className="add_cart">
                                    <a href="./shopping-card.html">
                                      <button className="button btn-cart" type="button"><span><i className="fa fa-shopping-cart" /> Thêm vào
                                          giỏ hàng</span></button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="toolbar bottom">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 text-left">
                        <div className="pages">
                          <ul className="pagination">
                            <li><a href="#">«</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">»</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 text-right">Hiển thị 1 - 15 của 25 (2 trang)</div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="sidebar col-sm-3 col-xs-12 col-sm-pull-9">
                <aside className="sidebar">
                  <div className="block block-layered-nav">
                    <div className="block-title">
                      <h3>Tìm kiếm sản phẩm</h3>
                    </div>
                    <div className="block-content">
                      <dl id="narrow-by-list">
                        <dt className="even">Thương hiệu</dt>
                        <dd className="even">
                          <ol>
                            <li><a href="#">Louis Vuitton</a> (20) </li>
                            <li><a href="#">Chanel</a> (25) </li>
                            <li><a href="#">Prada</a> (8) </li>
                            <li><a href="#">Dior</a> (5) </li>
                            <li><a href="#">Hermes </a> (2) </li>
                          </ol>
                        </dd>
                        <dt className="odd">Chất liệu</dt>
                        <dd className="odd">
                          <ol className="bag-material">
                            <li>
                              <div className="pretty p-icon p-smooth">
                                <input type="checkbox" name="Material" defaultValue="Cotton" id="Cotton" />
                                <label htmlFor="Cotton">Cotton</label>
                              </div>
                            </li>
                            <li>
                              <div className="pretty p-icon p-smooth">
                                <input type="checkbox" name="Material" defaultValue="Kaki" id="Kaki" />
                                <label htmlFor="Kaki">Kaki</label>
                              </div>
                            </li>
                            <li>
                              <div className="pretty p-icon p-smooth">
                                <input type="checkbox" name="Material" defaultValue="Jeans" id="Jeans" />
                                <label htmlFor="Jeans">Jeans</label>
                              </div>
                            </li>
                            <li>
                              <div className="pretty p-icon p-smooth">
                                <input type="checkbox" name="Material" defaultValue="Ni" id="ni" />
                                <label htmlFor="ni">Nỉ</label>
                              </div>
                            </li>
                            <li>
                              <div className="pretty p-icon p-smooth">
                                <input type="checkbox" name="Material" defaultValue="Lanh" id="Lanh" />
                                <label htmlFor="Lanh">Lanh</label>
                              </div>
                            </li>
                            <li>
                              <div className="pretty p-icon p-smooth">
                                <input type="checkbox" name="Material" defaultValue="Lua" id="lua" />
                                <label htmlFor="lua">Lụa tự nhiên</label>
                              </div>
                            </li>
                            <li>
                              <div className="pretty p-icon p-smooth">
                                <input type="checkbox" name="Material" defaultValue="Ren" id="Ren" />
                                <label htmlFor="Ren">Ren</label>
                              </div>
                            </li>
                          </ol>
                        </dd>
                        <dt className="odd">Kích thước</dt>
                        <div className="size-area">
                          <div className="size">
                            <ul>
                              <li><a href="#">S</a></li>
                              <li><a href="#">L</a></li>
                              <li><a href="#">M</a></li>
                              <li><a href="#">XL</a></li>
                              <li><a href="#">XXL</a></li>
                            </ul>
                          </div>
                        </div>
                        <dt className="odd">Màu sắc</dt>
                        <dd className="odd">
                          <ol>
                            <li><a href="#">Xanh lá cây</a> (1) </li>
                            <li><a href="#">Trắng</a> (5) </li>
                            <li><a href="#">Đen</a> (5) </li>
                            <li><a href="#">Xám</a> (4) </li>
                            <li><a href="#">Xám đen</a> (3) </li>
                            <li><a href="#">Xanh da trời</a> (1) </li>
                          </ol>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="block product-price-range ">
                    <div className="block-title">
                      <h3>Giá</h3>
                    </div>
                    <div className="block-content">
                      <div className="slider-range">
                        <ul className="check-box-list">
                          <li>
                            <div className="pretty p-icon p-smooth">
                              <input type="checkbox" name="cc" defaultValue="p1" id="p1" />
                              <label htmlFor="p1">
                                &lt; 200.000đ<span className="count">(5)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="pretty p-icon p-smooth">
                              <input type="checkbox" name="cc" defaultValue="p2" id="p2" />
                              <label htmlFor="p2"> 200.000 - 500.000<span className="count">(12)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="pretty p-icon p-smooth">
                              <input type="checkbox" name="cc" defaultValue="p3" id="p3" />
                              <label htmlFor="p3"> 500.000 - 1.000.000<span className="count">(15)</span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
  
  export default ShopList;