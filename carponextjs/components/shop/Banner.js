const Banner = () => {
  return (
    <div className="category-description std">
      <div className="slider-items-products">
        <div
          id="category-desc-slider"
          className="product-flexslider hidden-buttons"
        >
          <div className="slider-items slider-width-col1 owl-carousel owl-theme">
            <div className="item">
              <a href="#">
                <img
                  alt="New Special Collection"
                  src="./images/new-fashion.jpg"
                />
              </a>
              <div className="cat-img-title cat-bg cat-box">
                <h2 className="cat-heading">
                  Bắt trọn thu vàng - Sale up đến 50%
                </h2>
                <p>
                  Để viết thêm thông tin về chương trình. Vui lòng truy cập
                  Carpo.vn
                </p>
              </div>
            </div>
            <div className="item">
              <a href="#">
                <img alt="New Fashion" src="./images/new-special.jpg" />
              </a>
              <div className="cat-img-title cat-bg cat-box">
                <h2 className="cat-heading">Thời trang thu đông</h2>
                <p>Tưng bừng lựa chọn - Thỏa thích mua sắm. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
