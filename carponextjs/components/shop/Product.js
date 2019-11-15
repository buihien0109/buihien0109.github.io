import Link from "next/link";

const Product = ({ products, onAddToCart }) => {
  const handleAddToCart = (id, e) => {
    onAddToCart(id);
  };

  const productList = products.map((item, index) => {
    return (
      <li className="item col-lg-4 col-md-6 col-sm-6 col-xs-6" key={item.id}>
        <div className="item-inner">
          <Link href="/shop/[id]" as={"/shop/" + item.id}>
            <div className="item-img">
              <div className="item-img-info">
                <a
                  className="product-image"
                  title="Product tilte is here"
                  href="./product-detail.html"
                >
                  <img alt="Product tilte is here" src={item.thumbnail} />
                </a>
                <div className="new-label new-top-left">new</div>
                <div className="sale-label sale-top-right">sale</div>
                <div className="mask-shop-white" />
                <div className="new-label new-top-left">new</div>
                <a className="quickview-btn" href="./product-detail.html">
                  <span>Xem nhanh</span>
                </a>
              </div>
            </div>
          </Link>
          <div className="item-info">
            <div className="info-inner">
              <div className="item-title">
                <a title="Product tilte is here" href="./product-detail.html">
                  {item.name}
                </a>
              </div>
              <div className="item-content">
                <div className="rating">
                  <i className="fa fa-star" /> <i className="fa fa-star" />
                  <i className="fa fa-star" /> <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <div className="item-price">
                  <div className="price-box">
                    <span className="regular-price">
                      <span className="price">{item.price}đ</span>
                    </span>
                  </div>
                </div>
                <div className="actions">
                  <div className="add_cart">
                    <button
                      className="button btn-cart"
                      type="button"
                      onClick={() => handleAddToCart(item.id)}
                    >
                      <span>
                        <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="category-products">
      <ul className="products-grid">{productList}</ul>
    </div>
  );
};
export default Product;
