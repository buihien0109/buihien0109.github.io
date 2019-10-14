class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          name: "Áo thun da trơn túi ngực",
          image: "./images/at1.png",
          description:
            "Kiểu áo thun dạng ôm được nhiều anh chàng ưa thích bởi sự thoải mái, phong cách và quan trọng là tôn dáng người mặc",
          price: 450000,
          quantity: 2,
          instock : 10
        },
        {
          id: 2,
          name: "Áo thun nam dáng xuông",
          image: "./images/at2.png",
          description:
            "Áo thun nam big size là kiểu áo  có form rộng thường xuất hiện trong trang phục đồng phục hoặc áo cho các bạn trẻ thích phong cách thoải mái và năng động.",
          price: 550000,
          quantity: 3,
          instock : 8
        }
        // {
        //   id: 3,
        //   name: "Áo thun in hình One Piece",
        //   image: "./images/at3.png",
        //   description: "Áo thun nam kiểu là loại áo thun phá cách, được cách điệu, xẻ rách, in hình, in chữ trở thành những chiếc áo thun lạ mắt",
        //   price: 340000,
        //   quantity: 1
        // },
        // {
        //   id: 4,
        //   name: "Áo thun nam Basic",
        //   image: "./images/at4.png",
        //   description: "Áo thun nam basic là kiểu dáng rất phổ biến hiện nay và được nhiều người ưa thích bởi chúng linh hoạt trong cách phối đồ và phù hợp với hầu hết dáng người",
        //   price: 530000,
        //   quantity: 1
        // }
      ],
      promoCodeList: {
        Autumn: 0.1,
        Winter: 0.2,
        Spring: 0.3,
        Summer: 0.4
      }
    };
  }
  // Thay đổi số lượng sản phẩm
  changeQuantity(id) {
    let value = event.target.value;
    const newProduct = this.state.products.filter(product => {
      if (product.id == id) {
        product.quantity = Number(value);
      }
      return product;
    });
    // Cập nhật lại state (không chứa sản phẩm có id truyền vào)
    this.setState({
      products: newProduct
    });
  }
  // Xóa sản phẩm theo id
  removeProduct(id) {
    // Tạo ra mảng mới chứa các sản phẩm có id khác với id truyền vào
    if (confirm("Bạn có muốn xóa không?")) {
      const newProduct = this.state.products.filter(product => {
        return product.id !== id;
      });

      // Cập nhật lại state (không chứa sản phẩm có id truyền vào)
      this.setState({
        products: newProduct
      });
    }

    // TODO: Cập nhật số lượng sản phẩm (hiện đang tính sai do chưa xét đến quantity)
  }

  render() {
    return (
      <main>
        <MyHeader products={this.state.products} />
        <Products
          products={this.state.products} // Truyền Props product vào trong Products
          onRemoveProduct={this.removeProduct.bind(this)} // Truyền Function removeProduct vào trong Products để bên Products nhận lại bằng this.props.key
          onChangeQuantity={this.changeQuantity.bind(this)}
        />
        <Checkout 
          products={this.state.products}
          promoCodeList = {this.state.promoCodeList}
        />
      </main>
    );
  }
}
