import Layout from "components/CarpoLayout";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from 'next/router'

const ProductDetail = (props) => {
  const { product } = props
  const [countProduct, setCountProduct] = useState(1);
  const [shoppingCart, setShoppingCart] = useState([])
  const decrease = () => {
    countProduct > 1
      ? setCountProduct(countProduct - 1)
      : setCountProduct(countProduct);
  };
  const increase = () => {
    setCountProduct(countProduct + 1);
  };

  const onAddToCart = async () => {
    if(countProduct > product.quantity) {
      alert("Không đủ số lượng sản phẩm!")
    } else {
      const id = props.url.query.id
      const res = await fetch(
        `https://carpo.herokuapp.com/products/${id}`
      );
      const data = await res.json();
      const productSaveInCart = {...data, quantity:countProduct}
      
      setShoppingCart(shoppingCart => [...shoppingCart, productSaveInCart])
    }

  }
  return (
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
              <span>{product.name}</span>
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
                            src={product.thumbnail}
                            alt="product-image"
                          />
                        </div>
                      </div>
                      {/* end: more-images */}
                    </div>
                    <div className="product-shop col-lg-8 col-sm-7 col-xs-12">
                      <div className="product-name">
                        <h1>{product.name}</h1>
                      </div>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="price-block">
                        <div className="price-box">
                          <p className="special-price">
                            <span className="price-label">Giá:</span>
                            <span className="price"> {product.price}</span>
                          </p>
                          {/* <p className="old-price">
                            <span className="price-label">Giá:</span>
                            <span className="price" />
                            {product.price}
                          </p> */}
                          <p className="availability in-stock">
                            <span>
                              {product.instock ? "Còn hàng" : "Hết hàng"}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="short-description">
                        <h2>Mô tả</h2>
                        <p>{product.description}</p>
                      </div>
                      <div className="add-to-box">
                        <div className="add-to-cart">
                          <div className="pull-left">
                            <div className="custom pull-left">
                              <label>Số lượng:</label>
                              <button
                                type="button"
                                className="increase items-count"
                                onClick={decrease}
                              >
                                <i className="fa fa-minus">&nbsp;</i>
                              </button>
                              <input
                                type="text"
                                className="input-text qty"
                                title="Qty"
                                defaultValue={countProduct}
                                id="qty"
                                name="qty"
                              />
                              <button
                                className="increase items-count"
                                type="button"
                                onClick={increase}
                              >
                                <i className="fa fa-plus">&nbsp;</i>
                              </button>
                            </div>
                          </div>
                          <button
                            className="button btn-cart"
                            title="Add to Cart"
                            type="button"
                            onClick={onAddToCart}
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
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

ProductDetail.getInitialProps = async function({ query }) {
  const res = await fetch(
    `https://carpo.herokuapp.com/products/${query.id}`
  );
  const data = await res.json();

  return {
    product: data
  };
};

export default ProductDetail;
