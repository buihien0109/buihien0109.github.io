import Layout from "../components/CarpoLayout";
import Link from "next/link";
import Head from "next/head"

const Blog = () => (
  <Layout>
    <Head>
      <title>Blog Page</title>
      <link rel="stylesheet" href="css/blog.css" />
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
          <a href="./blog.html" className="duong-dan-active">
            <span>Bài viết</span>
          </a>
        </div>
      </section>
      <section className="blog_post">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-9" id="center_column">
              <div className="center_column">
                <div className="page-title">
                  <h2>Bài viết</h2>
                </div>
                <ul className="blog-posts">
                  <li className="post-item">
                    <article className="entry">
                      <div className="row">
                        <div className="col-sm-5">
                          <div className="entry-thumb">
                            <Link href="/blog-detail">
                              <a href="./blog-detail.html">
                                <figure>
                                  <img src="./images/11.jpg" alt="Blog" />
                                </figure>
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="col-sm-7">
                          <h3 className="entry-title">
                            <Link href="/blog-detail">
                              <a href="./blog-detail.html">
                                Sợi Bamboo là gì? Tại sao Áo Sơ Mi sợi Bamboo
                                lại được ưa chuộng như vậy
                              </a>
                            </Link>
                          </h3>
                          <div className="entry-meta-data">
                            {" "}
                            <span className="author">
                              {" "}
                              <i className="fa fa-user" />
                              &nbsp; by: <a href="#">Admin</a>
                            </span>
                            <span className="cat">
                              {" "}
                              <i className="fa fa-folder" />
                              &nbsp; <a href="#">Tin tức</a>{" "}
                            </span>{" "}
                            <span className="comment-count">
                              <i className="fa fa-comment" />
                              &nbsp; 3{" "}
                            </span>{" "}
                            <span className="date">
                              <i className="fa fa-calendar" />
                              &nbsp; 2018-08-05
                            </span>{" "}
                          </div>
                          <div className="rating">
                            {" "}
                            <i className="fa fa-star" />{" "}
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />{" "}
                            <i className="fa fa-star-o" />{" "}
                            <i className="fa fa-star-o" />
                            &nbsp; <span>(5 votes)</span>
                          </div>
                          <div className="entry-excerpt">
                            Sợi bamboo hay còn gọi là sợi tre,có thành phần chủ
                            yếu từ cây tre, tre được biết đến là loại cây dễ
                            trồng, sinh trưởng nhanh, đặc biệt không cần phun
                            thuốc hoá học khi trồng nên khi được sử dụng làm sợi
                            thì loại sợi này được coi là sợi tương đối an toàn!
                          </div>
                          <Link href="/blog-detail">
                            <a href="./blog-detail.html" className="read-more">
                              Xem thêm&nbsp;{" "}
                              <i className="fa fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
                <div className="sortPagiBar">
                  <div className="pagination-area">
                    <ul className="pagination">
                      <li>
                        <a href="#">«</a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">»</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Right colunm */}
            <aside className="sidebar col-xs-12 col-sm-3">
              <div className="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Tìm kiếm"
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
              {/* Blog category */}
              <div className="block blog-module">
                <div className="block-title">
                  <h3>Danh mục</h3>
                </div>
                <div className="block_content">
                  <div className="layered layered-category">
                    <div className="layered-content">
                      <ul className="tree-menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-angle-right" />
                            &nbsp; Xu hướng
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-angle-right" />
                          &nbsp; <a href="#">Thời trang thế giới</a>
                        </li>
                        <li>
                          <i className="fa fa-angle-right" />
                          &nbsp; <a href="#">Thẩm mỹ</a>
                        </li>
                        <li>
                          <i className="fa fa-angle-right" />
                          &nbsp; <a href="#">Phối đồ</a>
                        </li>
                        <li>
                          <i className="fa fa-angle-right" />
                          &nbsp; <a href="#">Phong cách</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Popular Posts */}
              <div className="block blog-module">
                <div className="block-title">
                  <h3>Bài viết phổ biến</h3>
                </div>
                <div className="block_content">
                  <div className="layered">
                    <div className="layered-content">
                      <ul className="blog-list-sidebar">
                        <li>
                          <div className="post-thumb">
                            {" "}
                            <a href="#">
                              <img src="./images/8.png" alt="Blog" />
                            </a>{" "}
                          </div>
                          <div className="post-info">
                            <h5 className="entry_title">
                              <a href="#">
                                Mẹo xử lí vết bẩn cứng đầu dính trên áo khoác
                                gió
                              </a>
                            </h5>
                            <div className="post-meta">
                              {" "}
                              <span className="date">
                                <i className="fa fa-calendar" /> 2019-01-03
                              </span>{" "}
                              <span className="comment-count">
                                {" "}
                                <i className="fa fa-comment-o" /> 3{" "}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            {" "}
                            <a href="#">
                              <img src="./images/ao thun 1.png" alt="Blog" />
                            </a>{" "}
                          </div>
                          <div className="post-info">
                            <h5 className="entry_title">
                              <a href="#">
                                Sợi Modal là gì? Tại sao nên mua áo sợi Modal
                              </a>
                            </h5>
                            <div className="post-meta">
                              {" "}
                              <span className="date">
                                <i className="fa fa-calendar" /> 2019-02-02
                              </span>{" "}
                              <span className="comment-count">
                                {" "}
                                <i className="fa fa-comment-o" /> 6{" "}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            {" "}
                            <a href="#">
                              <img src="./images/at3.png" alt="Blog" />
                            </a>{" "}
                          </div>
                          <div className="post-info">
                            <h5 className="entry_title">
                              <a href="#">
                                TOP 99 Mẫu Áo Khoác Jeans nam mới nhất 2019 cho
                                các chàng Trai Thời Thượng
                              </a>
                            </h5>
                            <div className="post-meta">
                              {" "}
                              <span className="date">
                                <i className="fa fa-calendar" /> 2019-09-08
                              </span>{" "}
                              <span className="comment-count">
                                {" "}
                                <i className="fa fa-comment-o" /> 10
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Recent Comments */}
              <div className="block blog-module">
                <div className="block-title">
                  <h3>Bình luận gần đây</h3>
                </div>
                <div className="block_content">
                  <div className="layered">
                    <div className="layered-content">
                      <ul className="recent-comment-list">
                        <li>
                          <h5>
                            <a href="#">
                              <b>
                                Áo Khoác Parka thường được gọi với cái tên “bình
                                dân”
                              </b>
                            </a>
                          </h5>
                          <div className="comment">
                            {" "}
                            "Áo được làm từ các loại vải không thấm nước và có
                            độ dài dao động trong khoảng từ thắt lưng tới đầu
                            gối, thiết kế hơi rộng..."{" "}
                          </div>
                          <div className="author">
                            Đăng bởi <a href="#">Admin</a>
                          </div>
                        </li>
                        <li>
                          <h5>
                            <a href="#">
                              <b>
                                Vải jeans được mệnh danh chất liệu sở hữu sự trẻ
                                trung
                              </b>
                            </a>
                          </h5>
                          <div className="comment">
                            {" "}
                            " Áo khoác jeans nam chính vì vậy nên được yêu
                            chuộng và trở thành item phải có đối với các tín đồ
                            thời trang...."{" "}
                          </div>
                          <div className="author">
                            Đăng bởi <a href="#">Admin</a>
                          </div>
                        </li>
                        <li>
                          <h5>
                            <a href="#">
                              <b>
                                Đối với những chàng trai theo phong cách bụi bặm
                              </b>
                            </a>
                          </h5>
                          <div className="comment">
                            {" "}
                            " Hãy sở hữu 1 trong các mẫu áo khoác bò nam mới
                            nhất 2019 của H2T và học lỏm bí quyết và công thức
                            mix áo bò của các chàng trai..."{" "}
                          </div>
                          <div className="author">
                            Đăng bởi <a href="#">Admin</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* tags */}
              <div className="block block-tags">
                <div className="block-title">
                  <h3>Từ khóa phổ biến</h3>
                </div>
                <div className="block-content">
                  <div className="tags-list">
                    {" "}
                    <a href="#">Xu hướng</a> <a href="#">Nam</a>{" "}
                    <a href="#">Quần áo</a>
                    <a href="#">Mix đồ</a> <a href="#">Nữ</a>{" "}
                    <a href="#">Làm đẹp</a> <a href="#">Thời trang</a>{" "}
                  </div>
                </div>
              </div>
              {/* ./Banner */}
            </aside>
            {/* ./right colunm */}
          </div>
          {/* ./row*/}
        </div>
      </section>
    </div>
  </Layout>
);

export default Blog;
