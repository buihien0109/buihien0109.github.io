import Layout from "../components/CarpoLayout";
import Head from "next/head"

const BlogDetail = () => (
  <Layout>
    <Head>
      <title>Blog Detail Page</title>
      <link rel="stylesheet" href="css/blog.css" />
    </Head>
    <div>
      <section id="duong-dan">
        <div className="container">
          <a href="index.html">
            <span>Trang chủ</span>
          </a>
          <span>
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span>
          <a href="blog.html">
            <span>Danh sách bài viết</span>
          </a>
          <span>
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span>
          <a href="./blog-detail.html" className="duong-dan-active">
            <span>Áo thun nam – phép màu cho những màu sắc mùa hè</span>
          </a>
        </div>
      </section>
      <section className="blog_post">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-9">
              <div className="entry-detail">
                <div className="entry-photo">
                  <figure>
                    <img src="./images/post1.png" alt="Blog" />
                  </figure>
                </div>
                <div className="entry-meta-data">
                  <div className="blog-top-desc">
                    <div className="blog-date"> 03 Sep 2018 </div>
                    <h1>Áo thun nam – phép màu cho những màu sắc mùa hè</h1>
                    <div className="jtv-entry-meta">
                      {" "}
                      <i className="fa fa-user-o" /> <strong>Admin</strong>{" "}
                      <a href="#">
                        <i className="fa fa-commenting-o" />{" "}
                        <strong>15 Bình luận</strong>
                      </a>
                      <div className="rating">
                        {" "}
                        <i className="fa fa-star" />{" "}
                        <i className="fa fa-star" />{" "}
                        <i className="fa fa-star" />{" "}
                        <i className="fa fa-star-o" />{" "}
                        <i className="fa fa-star-o" />
                        &nbsp; <span>(5 sao)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-text clearfix">
                  <p>
                    Áo thun nam ra đời được coi là một loại trang phục kết hợp
                    hài hòa được với rất nhiều các phụ kiện hay xu hướng thời
                    trang nam khác nhau. Với thời trang Hè 2017 này, bạn sẽ lựa
                    chọn màu sắc chiếc áo thun đa màu nào để tạo ra những phép
                    màu cho bảng màu của mùa Hè sôi động này?
                  </p>
                  <p>
                    Áo thun trắng luôn là sự lựa chọn hàng đầu của các chàng
                    trai bởi sự đơn giản, dễ phối đồ và mang lại phtong cách
                    tươi mới, trẻ trung, hiện đại cho người mặc.
                  </p>
                  <blockquote>
                    {" "}
                    Áo Khoác Parka thường được gọi với cái tên “bình dân” là áo
                    khoác Bắc Cực hay Anorak là trang phục tốt nhất để chống lại
                    cái rét buốt của khí hậu những ngày đại hàn. Áo được làm từ
                    các loại vải không thấm nước và có độ dài dao động trong
                    khoảng từ thắt lưng tới đầu gối. Những chiếc áo khoác Parka
                    của H2T được thiết kế hơi rộng, đem lại cảm giác thoải mái,
                    phóng khoáng và một chút “bụi phủi” mang đậm chất du mục cho
                    người mặc. Đừng tiếc chi mạnh tay cho 1 in 48 mẫu Áo Khoác
                    Parka "Cực" ấm Ưa Chuộng nhất mùa Lạnh này nhé bởi bạn sẽ
                    không bao giờ thất vọng đâu!{" "}
                  </blockquote>
                  <p>
                    Có nguồn gốc từ loại áo chống rét của người Eskimo, áo parka
                    rất được ưu ái trong những ngày đại hàn bởi khả năng giữ ấm
                    tuyệt vời. Đặc điểm của chiếc áo khoác này tại H2T là được
                    cắt may rộng rãi, có thể có mũ và lớp lót lông bên trong,
                    thường gắn liền với các gam màu trầm, quân đội như xanh
                    khaki, nâu, đen... Item này rất được ưa chuộng ở các nước xứ
                    lạnh bởi ngoài khả năng giữ ấm tương đối tốt, nó còn mang
                    lại nét phóng khoáng, thoải mái cho người mặc.{" "}
                  </p>
                  <p>
                    Để chống chọi hiệu quả với cái rét ẩm của miền Bắc, bạn nên
                    diện những chiếc áo dày dặn bên trong như len vặn thừng để
                    giữ ấm tuyệt đối cho cơ thể. Cũng nên chọn áo trong có gam
                    màu tương phản với áo parka để trang phục thêm nổi bật hơn
                    trong các mẫu dưới đây của H2T nhé.
                  </p>
                  <p>
                    Dáng áo parka này giữ ấm cực tốt. Kiểu dáng trẻ trung, tiện
                    lợi phù hợp với thời trang dạo phố thường ngày là điểm mạnh
                    của áo parka. Chất liệu gió bên ngoài cùng lớp lót ấm áp bên
                    trong giúp bạn có thể sống sót qua mùa đông khắc nghiệt
                    nhất.{" "}
                  </p>
                </div>
                <div className="entry-tags">
                  {" "}
                  <span>Từ khóa:</span> <a href="#">thời trang,</a>{" "}
                  <a href="#">áo thun,</a> <a href="#">làm đẹp</a>{" "}
                </div>
              </div>
              {/* Comment */}
              <div className="single-box">
                <div className="best-title text-left">
                  <h2>Bình luận</h2>
                </div>
                <div className="comment-list">
                  <ul>
                    <li>
                      <div className="avartar">
                        {" "}
                        <img src="./images/avatar.jpg" alt="Avatar" />{" "}
                      </div>
                      <div className="comment-body">
                        <div className="comment-meta">
                          {" "}
                          <span className="author">
                            <a href="#">bui_hien</a>
                          </span>
                          <span className="date">2018-04-01</span>{" "}
                        </div>
                        <div className="comment">
                          {" "}
                          Bai viết thật hay cung cấp nhiều kiến thức bổ ích,
                          giúp tôi rất nhiều trong thời trang{" "}
                        </div>
                      </div>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <div className="avartar">
                            {" "}
                            <img src="./images/nam2.jpg" alt="Avatar" />{" "}
                          </div>
                          <div className="comment-body">
                            <div className="comment-meta">
                              {" "}
                              <span className="author">
                                <a href="#">pham_phuong</a>
                              </span>{" "}
                              <span className="date">2018-04-03</span>{" "}
                            </div>
                            <div className="comment">
                              {" "}
                              Áo thường được đệm lớp bông dày, với mũ to bản có
                              viền lông, là vũ khí chống gió rét, mưa nhỏ rất
                              tốt. Parka xanh quân đội vẫn luôn là màu sắc được
                              phái mạnh ưa chộng nhất bên cạnh những màu sắc
                              khác cũng như xanh hải quân, đen, xám… Chúng dễ
                              kết hợp với các trang phục khác như áo bò, vest,
                              sơ mi, áo phông…{" "}
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="avartar">
                            {" "}
                            <img
                              src="./images/img-girl2.jpg"
                              alt="Avatar"
                            />{" "}
                          </div>
                          <div className="comment-body">
                            <div className="comment-meta">
                              {" "}
                              <span className="author">
                                <a href="#">Admin</a>
                              </span>{" "}
                              <span className="date">2018-04-05</span>{" "}
                            </div>
                            <div className="comment">
                              {" "}
                              Áo Parka nam thường được giới trẻ lựa chọn cho
                              mình vào mùa đông. Nếu bạn là tín đồ thời trang
                              thì chắc chắn không thể thiếu áo Parka gió nam
                              AP-0527 này trong tủ đồ của bạn.{" "}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="avartar">
                        {" "}
                        <img src="./images/img-girl4.jpg" alt="Avatar" />{" "}
                      </div>
                      <div className="comment-body">
                        <div className="comment-meta">
                          {" "}
                          <span className="author">
                            <a href="#">pham_phuong</a>
                          </span>
                          <span className="date">2018-04-11</span>{" "}
                        </div>
                        <div className="comment">
                          {" "}
                          Đúng như tên gọi của nó, áo có lớp ngoài vải gió cao
                          cấp cùng mix da mang đến vẻ cá tính, thời thượng cho
                          các chàng trai. Ngoài ra, lớp lót lông dạy dặn bên
                          trong sẽ giúp các chàng cực ấm áp trong những thời
                          tiết lạnh hay cực lạnh đấy. Chàng có thể mix cùng áo
                          len, áo thun cùng quần hộp cùng tông màu zanzi{" "}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="avartar">
                        {" "}
                        <img src="./images/father.jpg" alt="Avatar" />{" "}
                      </div>
                      <div className="comment-body">
                        <div className="comment-meta">
                          {" "}
                          <span className="author">
                            <a href="#">cong_anh_89</a>
                          </span>
                          <span className="date">2018-04-24</span>{" "}
                        </div>
                        <div className="comment">
                          {" "}
                          Chất liệu kaki dày dặn kèm lót lông ấm áp cũng là một
                          trong số những áo khoác Parka nam cực hot cho những
                          ngày lạnh. Bạn thấy đấy, chiếc áo này cực dễ mặc và
                          mix đồ cho những chàng trai hay cả những cô gái yêu
                          thích phong cách cá tính, chất chơi.{" "}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-box comment-box">
                <div className="best-title text-left">
                  <h2>Để lại bình luận</h2>
                </div>
                <div className="coment-form">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="name">Tên</label>
                      <input id="name" type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="text" className="form-control" />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="website">Tiêu đề</label>
                      <input
                        id="website"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="message">Nội dung</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={8}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <button className="button">
                    <span>Thêm bình luận</span>
                  </button>
                </div>
              </div>
              {/* ./Comment */}
            </div>
            {/* right colunm */}
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
        </div>
      </section>
    </div>
  </Layout>
);

export default BlogDetail;
