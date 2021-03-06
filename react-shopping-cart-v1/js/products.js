class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Format lại giá tiền
    function convertMoney(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(price);
    }
    // Nhận danh sách sản phẩm bằng props từ App truyền sang
    const products = this.props.products;

    // Dùng map để hiển thị list product
    const listProduct = products.map(product => (
      <li className="row" key={product.id}>
        <div className="col left">
          <div className="thumbnail">
            <a href="#">
              <img src={product.image} alt={product.image} />
            </a>
          </div>

          <div className="detail">
            <div className="name">
              <a href="#">{product.name}</a>
            </div>
            <div className="description">{product.description}</div>
            <div className="price">{convertMoney(product.price)}</div>
          </div>
        </div>

        <div className="col right">
          <div className="quantity">
            <input
              type="number"
              className="quantity"
              minLength="0"
              maxLength="20"
              step={1}
              defaultValue={product.quantity}
              //Nhận lại function onChangeQuantity từ App truyền sang bằng this.props (bind this)
              onChange={this.props.onChangeQuantity.bind(this, product.id)}
            />
          </div>

          <div className="remove">
            <svg
              version="1.1"
              className="close"
              xmlns="//www.w3.org/2000/svg"
              xmlnsXlink="//www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 60 60"
              enableBackground="new 0 0 60 60"
              xmlSpace="preserve"
              //Nhận lại function onRemoveProduct từ App truyền sang bằng this.props (bind this)
              onClick={this.props.onRemoveProduct.bind(this, product.id)}
            >
              <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon>
            </svg>
          </div>
        </div>
      </li>
    ));

    return (
      <section className="container">
        <ul className="products">{listProduct}</ul>
      </section>
    );
  }
}
