class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Nhận danh sách sản phẩm bằng props từ App truyền sang
    const products = this.props.products;
    
    //Cập nhật số lượng sản phẩm có trong giỏ hàng
    let numberItems = 0
    for(let i = 0; i< products.length; i++) {
      const p = products[i];
      numberItems += p.quantity
    } 

    return (
      <header className="container">
        <h1>Giỏ hàng</h1>
        <ul className="breadcrumb">
          <li>Trang chủ</li>
          <li>Giỏ hàng</li>
        </ul>

        {/* //Nhận lại từ props từ bên App bằng cách (props.key) */}
        <span className="count">{numberItems} sản phẩm trong giỏ hàng</span>
      </header>
    );
  }
}
