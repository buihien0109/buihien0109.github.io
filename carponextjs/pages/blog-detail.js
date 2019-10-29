import Layout from "../components/CarpoLayout";

const BlogDetail = () => (
  <Layout>
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
    <style jsx>
      {`
        .blog_post {
          margin-top: 30px;
        }
        .blog_post p {
          color: #666;
        }
        .blog-wrapper {
          margin-bottom: 30px;
        }
        .center_column {
          margin-bottom: 30px;
        }
        .blog_post .page-title {
          border: none;
        }
        .blog_post .page-title h2 {
          padding: 0px;
        }
        .blog-wrapper .page-title {
          padding-left: 15px;
          padding-top: 10px;
        }
        .blog_post .sortPagiBar {
          margin-bottom: 10px;
        }
        #columns {
          padding-top: 16px;
          padding-bottom: 30px;
        }
        .tree-menu li {
          line-height: 24px;
        }
        .tree-menu > li > ul {
          padding-left: 17px;
          display: none;
        }
        .tree-menu > li > ul > li {
          border-bottom: 1px dotted #eaeaea;
        }
        .tree-menu > li > ul > li:last-child {
          border: none;
        }
        .tree-menu > li > ul > li > span:before {
          content: "\f0da";
          font-size: 14px;
          display: inline-block;
          text-align: right;
          color: #666;
          font-family: "FontAwesome";
          padding-right: 12px;
          color: #ccc;
        }
        .search {
          margin-bottom: 20px;
        }
        .search .form-control:focus {
          outline: none;
          border: 1px solid #999;
          box-shadow: none;
        }
        .search input {
          display: inline-block;
          width: 100%;
          background: #fff;
          box-shadow: none;
          border-radius: 0px;
          border: 1px solid #e6e6e6;
        }
        .search button {
          float: right;
          margin-top: 0px;
          line-height: 45px;
          margin-right: 0px;
          margin-top: -42px;
          position: relative;
          z-index: 1;
          border-radius: 50%;
          border: none;
          color: #313f46;
          width: 45px;
          height: 45px;
          font-size: 16px;
          background: none;
        }
        /*--------------
16.1 Left column
*/
        .sidebar .blog-module {
          margin-bottom: 30px;
          overflow: hidden;
        }
        .sidebar .blog-module .owl-dots {
          bottom: 5px;
        }
        .sidebar .blog-module:last-child {
          margin-bottom: 0;
        }
        .sidebar .blog-module img {
          margin: 0 auto;
        }
        .sidebar .block .title_block {
          font-size: 13px;
          font-weight: 900;
          border-bottom: 1px solid #eee;
          padding: 12px 14px;
          text-transform: uppercase;
          color: #333;
        }
        .sidebar .block .block_content {
          padding: 15px;
        }
        .layered .layered_subtitle {
          color: #666;
          font-size: 16px;
          padding-bottom: 4px;
          text-transform: uppercase;
        }
        .layered .layered-content {
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 15px;
          margin-bottom: 0px;
          padding-top: 0px;
        }
        .layered .layered-content:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        .layered .layered-content:first-child {
        }
        .layered-category .layered-content {
          border-bottom: none;
          padding-bottom: 0;
          padding-top: 0;
          margin-bottom: 0;
        }
        .image-hover2 a {
          position: relative;
          display: table;
        }
        .image-hover2 a:after {
          overflow: hidden;
          position: absolute;
          top: 0;
          content: "";
          z-index: 100;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          pointer-events: none;
          -webkit-transition: all 0.3s ease 0s;
          -o-transition: all 0.3s ease 0s;
          transition: all 0.3s ease 0s;
          background-color: rgba(0, 0, 0, 0.3);
          -webkit-transform: scale(0);
          -ms-transform: scale(0);
          transform: scale(0);
          z-index: 1;
        }
        .image-hover2 a:before {
          font: normal normal normal 18px/1 FontAwesome;
          content: "\f002";
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 2;
          color: #fff;
          ms-transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          ms-transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          opacity: 0;
          -webkit-transition: opacity 0.3s ease 0s;
          -o-transition: opacity 0.3s ease 0s;
          transition: opacity 0.3s ease 0s;
        }
        .image-hover2 a:hover:after {
          visibility: visible;
          opacity: 0.8;
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
        }
        .image-hover2 a:hover:before {
          opacity: 1;
        }
        /* ----------------
 [20. Bolog page]
 */
        .blog-posts {
          line-height: 22px;
          margin: auto;
          font-size: 13px;
        }
        a.read-more {
          color: #e83f33;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        a.read-more:hover {
          color: #222;
        }
        .blog-posts .post-item {
          padding-bottom: 18px;
          padding-top: 20px;
          list-style: outside none none;
          color: #999;
          font-size: 16px;
          line-height: 24px;
        }
        .center_column .blog-posts .post-item {
          border-bottom: 1px #eee solid;
        }
        .center_column .blog-posts .post-item h3 {
          margin-top: 0px;
          margin-bottom: 5px;
        }
        #center_column ul {
          padding: 0px;
          margin: 0px;
        }
        .blog-posts.blog-wrapper .post-item {
          border: none;
        }
        .blog-posts.blog-wrapper h3 {
          margin-top: 15px;
        }
        .blog-posts .post-item:last-child {
          border-bottom: 0px solid #eaeaea;
          padding-bottom: 20px;
        }
        .blog-posts .post-item .entry-meta-data {
          padding: 5px 0;
          color: #666;
          font-size: 13px;
        }
        .blog-posts .post-item .entry-meta-data i {
          font-size: 14px;
          vertical-align: 0px;
        }
        .blog-posts .post-item .entry-meta-data span {
          margin-right: 12px;
          border-right: 1px #eee solid;
          padding-right: 10px;
        }
        .blog-posts .post-item .entry-meta-data span:last-child {
          margin-right: 12px;
          border-right: 0px #ddd solid;
          padding-right: 10px;
        }
        .blog-posts .post-item .entry-meta-data .fa {
          opacity: 0.7;
        }
        .blog-posts .post-item .entry-meta-data .fa {
          line-height: inherit;
        }
        .blog-posts .post-item .entry-more a {
          border: 1px solid #333e48;
          color: #fff;
          padding: 8px 15px;
          background: #333e48;
          font-weight: 500;
          font-size: 12px;
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .blog-posts .post-item .entry-more {
          margin-top: 15px;
        }
        .blog-posts .post-item .entry-more a:hover {
          background: #e83f33;
          border: 1px solid #e83f33;
          color: #fff;
        }
        .blog-posts .post-item .entry-thumb img {
          border: 1px solid #eaeaea;
          width: 100%;
          margin-bottom: 0px;
        }
        /** post sidebar **/
        .blog-list-sidebar li {
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 10px;
          margin-bottom: 10px;
          overflow: hidden;
        }
        .blog-list-sidebar li:last-child {
          border: none;
          margin-bottom: 0px;
          padding-bottom: 0px;
        }
        .blog-list-sidebar li .post-thumb {
          width: 80px;
          float: left;
        }
        .blog-list-sidebar li .post-info {
          margin-left: 90px;
          color: #999;
        }
        .blog-list-sidebar li .post-info h5 {
          font-size: 16px;
          margin: 0px;
        }
        .blog-list-sidebar li .post-info .post-meta {
          font-size: 12px;
          margin-top: 5px;
          margin-bottom: 0px;
        }
        .blog-list-sidebar li .post-info .fa {
          line-height: inherit;
        }
        /* Recent Comments*/
        .recent-comment-list li {
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 10px;
          margin-bottom: 10px;
          overflow: hidden;
        }
        .recent-comment-list li:last-child {
          border: none;
          margin-bottom: 0px;
          padding-bottom: 0px;
        }
        .recent-comment-list li .author {
          color: #666;
          margin-bottom: 0px;
          font-size: 13px;
        }
        .recent-comment-list li .author a {
          font-weight: 500;
          color: #e83f33;
          font-size: 13px;
        }
        .recent-comment-list li .comment {
          margin-top: 5px;
          color: #666;
          font-size: 14px;
        }
        .recent-comment-list li > h5 > a {
          color: #333;
          font-size: 16px;
        }
        .recent-comment-list h5 {
          margin: 0px;
          padding: 0px;
        }
        /** Blog detail **/
        .entry-detail {
          margin-bottom: 30px;
          font-size: 13px;
        }
        .entry-detail .page-title {
          margin-bottom: 12px;
        }
        .entry-detail h1 {
          font-size: 20px;
          font-weight: 600;
          margin-top: 0px;
        }
        .content-text {
          padding: 20px 0;
        }
        .content-text * {
          font-family: "Arsenal", sans-serif !important;
        }

        .blog-top-desc strong {
          font-size: 13px;
          font-weight: 400;
          margin-right: 10px;
          text-transform: lowercase;
          color: #999;
        }
        .entry-title a {
          font-size: 18px;
          font-weight: 500;
          display: inherit;
          padding: 0px;
        }
        .entry-thumb {
          margin-bottom: 5px;
        }
        #related-posts .entry-title a {
          font-size: 14px;
          display: inherit;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 8px 15px 8px;
        }
        #related-posts .product-item .entry-thumb img {
          width: 100%;
        }
        #related-posts article.entry {
          text-align: center;
        }
        #related-posts .comment-count {
          margin-right: 6px;
        }
        #related-posts .entry-meta-data {
          margin-bottom: 22px;
          display: inline-block;
          width: 100%;
        }
        #related-posts .entry-meta-data i {
          font-size: 18px;
          vertical-align: -2px;
        }
        #related-posts .entry-more a {
          padding: 8px 16px;
          border: 1px solid #333e48;
          background: #333e48;
          font-weight: 500;
          font-size: 12px;
          color: #fff;
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        #related-posts .entry-more a:hover {
          border: 1px solid #e83f33;
          background: #e83f33;
          color: #fff;
        }
        #related-posts .entry-more {
          display: inline-block;
        }
        .entry-detail .entry-meta-data {
          padding: 0px;
          color: #666;
          font-size: 13px;
        }
        .entry-detail .entry-meta-data i {
          font-size: 16px;
          vertical-align: -2px;
        }
        .entry-detail .entry-meta-data .fa {
          line-height: inherit;
        }
        .entry-detail .entry-meta-data span {
          margin-right: 10px;
        }
        .entry-detail .entry-meta-data .author .fa {
          opacity: 0.7;
        }
        .entry-detail .entry-meta-data .rating {
          float: right;
        }
        .entry-detail .entry-meta-data .post-star span {
          margin: 0;
        }
        .entry-tags span {
          text-transform: uppercase;
        }
        /*      Blockquotes  */
        blockquote,
        blockquote p {
          font-size: 16px;
          line-height: 24px;
          color: #5c5c5c;
          font-style: italic;
          font-family: Georgia, "Times New Roman", Times, serif;
          position: relative;
        }
        blockquote:before {
          content: "\f10d";
          display: block;
          position: absolute;
          left: 14px;
          top: 10px;
          font-family: FontAwesome;
          font-size: 35px;
          line-height: 1em;
          color: #c2c2c2;
        }
        blockquote {
          margin: 0 0 20px;
          padding: 20px 20px 30px 67px;
          border-left: 3px solid #eaeaea;
          background: #fff;
        }
        .entry-info {
          padding-bottom: 10px;
          display: inline-block;
        }
        /** COMMMENT list**/
        .single-box {
          font-size: 16px;
          margin-bottom: 30px;
        }
        .single-box h2 {
          color: #000;
          display: inline-block;
          font-family: "Roboto", sans-serif;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin: 0;
          padding: 0px;
          position: relative;
          text-transform: uppercase;
        }
        .single-box .product-flexslider {
          margin-bottom: 0px;
          margin-top: 18px;
        }
        .single-box > h2 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 0px;
        }
        .comment-box {
          margin: 30px 0px;
        }
        .comment-list {
          margin-top: 20px;
        }
        .comment-list ul {
          padding-left: 40px;
        }
        .comment-list ul li {
          overflow: hidden;
          margin-bottom: 15px;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 15px;
          list-style: none;
          color: #666;
        }
        .comment-list ul li:last-child {
          margin-bottom: 0;
          border: none;
          padding: 0;
        }
        .comment-list > ul {
          padding-left: 0;
          margin: auto;
        }
        .comment-list .avartar {
          width: 80px;
          float: left;
        }
        .comment-list .comment-body {
          margin-left: 90px;
        }
        .comment-list .comment-meta {
          color: #ccc;
          margin-bottom: 6px;
        }
        .comment-meta .date {
          color: #666;
        }
        .comment-list .comment-meta .author a {
          font-weight: 600;
        }
        .coment-form {
          margin-top: 20px;
        }
        .coment-form label {
          margin-top: 10px;
          margin-bottom: 6px;
          font-weight: 500;
        }
        .coment-form input,
        .coment-form textarea {
          border-radius: 3px;
          border: 1px solid #eee;
          -webkit-box-shadow: inherit;
          box-shadow: inherit;
          border-radius: 3px;
        }
        .coment-form .button {
          margin-top: 15px;
        }
        /**Related Posts**/

        .related-posts {
          margin-top: 20px;
        }
        .related-posts .entry-thumb img {
          border: 1px solid #eaeaea;
        }
        .related-posts .entry-ci {
          margin-top: 10px;
        }
        .related-posts .entry-meta-data {
          color: #999;
          font-size: 13px;
          margin-top: 10px;
        }
        .related-posts .entry-meta-data .fa {
          line-height: inherit;
        }
        .related-posts .entry-ci .entry-excerpt {
          padding: 10px 0;
        }
        .related-posts .entry-title {
          font-size: 14px;
        }
        .related-posts .owl-next {
          top: -31px;
        }
        .related-posts .owl-prev {
          top: -31px;
          left: inherit;
          right: 26px;
        }
        .blog-posts.blog-wrapper {
          margin: auto -15px;
          list-style: outside none none;
        }
        .blog-date {
          background-color: #f8f8f8;
          border: 1px #e5e5e5 solid;
          display: inline-block;
          float: left;
          font-weight: 600;
          height: 60px;
          line-height: 20px;
          margin-bottom: 10px;
          margin-right: 15px;
          padding-top: 8px;
          text-align: center;
          width: 65px;
          font-size: 13px;
        }
        @media only screen and (min-width: 280px) and (max-width: 479px) {
          .center_column {
            margin-bottom: 20px;
            padding: 10px 12px 10px;
          }
          h3.entry-title {
            margin-top: 12px;
          }
          .entry-detail {
            margin-bottom: 20px;
            padding: 10px 12px 12px;
          }
          .entry-detail .entry-meta-data .rating {
            float: none;
            margin-top: 6px;
          }
          .comment-list ul {
            padding-left: 0px;
          }
        }
        @media only screen and (min-width: 480px) and (max-width: 767px) {
          .center_column {
            margin-bottom: 20px;
            padding: 10px 12px 10px;
          }
          h3.entry-title {
            margin-top: 12px;
          }
          .entry-detail .entry-meta-data .rating {
            float: none;
            margin-top: 10px;
          }
          .comment-list ul {
            padding-left: 10px;
          }
        }
        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .blog-list-sidebar li .post-info {
            color: #999;
            display: inline-block;
            margin-left: 0;
            margin-top: 10px;
            width: 100%;
          }
        }
        @media only screen and (min-width: 992px) and (max-width: 1169px) {
          .blog-posts .post-item .entry-meta-data span {
            margin-right: 4px;
            padding-right: 10px;
          }
        }

        .avartar img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .coment-form .button {
          display: inline-block;
          border: 0;
          background: #fff;
          padding: 6px 12px;
          font-size: 14px;
          text-align: center;
          white-space: nowrap;
          color: #333;
          transition: all 0.3s linear;
          -moz-transition: all 0.3s linear;
          -webkit-transition: all 0.3s linear;
          border: 1px #e5e5e5 solid;
          letter-spacing: 0.5px;
        }

        .tags-list a {
          background-color: #f0f0f0;
          padding: 2px 6px;
          margin-bottom: 12px;
          display: inline-block;
          font-size: 16px;
        }
        .tags-list a:hover {
          background-color: #f82e56;
          color: #fff;
        }

        .pagination > li > a,
        .pagination > li > span {
          position: relative;
          float: left;
          padding: 6px 12px;
          line-height: 1.42857143;
          color: #337ab7;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #ddd;
        }
        .pagination > li > a:hover,
        .pagination > li > span:hover {
          background: #eee;
        }
        .pagination > .active > a,
        .pagination > .active > a:focus,
        .pagination > .active > a:hover,
        .pagination > .active > span,
        .pagination > .active > span:focus,
        .pagination > .active > span:hover {
          z-index: 3;
          color: #fff;
          cursor: default;
          background-color: #337ab7;
          border-color: #337ab7;
        }
      `}
    </style>
  </Layout>
);

export default BlogDetail;
