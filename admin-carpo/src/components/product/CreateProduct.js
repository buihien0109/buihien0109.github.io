import React from "react";
import MainLayout from "../layout/MainLayout";

class CreatProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      thumbnail: "",
      price: 0,
      quantity: 0,
      brand: "",
      material: "",
      size: "",
      color: "",
      instock: false,
      description: ""
    };
  }

  onChangeFormCreateProduct = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onChangeImage = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    let url = `/images/${file.name}`;
    reader.onloadend = () => {
      this.setState({
        thumbnail: url
      });
    };
    reader.readAsDataURL(file);
  };

  onSubmitFormCreateProduct = async (e) => {
    e.preventDefault()
    fetch('https://carpo.herokuapp.com/products', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
        alert("Tạo sản phẩm thành công")
    }, function(error) {
        alert("Tạo sản phẩm thất bại")
    })
  }

  render() {
    return (
      <MainLayout>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Tạo sản phẩm</h3>
          </div>
          <div className="panel-body">
            <form
              className="form-horizontal"
              onSubmit={this.onSubmitFormCreateProduct}
            >
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3 control-label">
                  Tên sản phẩm
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    onChange={this.onChangeFormCreateProduct}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3 control-label">
                  Giá
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="name"
                    onChange={this.onChangeFormCreateProduct}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="about" className="col-sm-3 control-label">
                  Mô tả ngắn
                </label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    name="description"
                    onChange={this.onChangeFormCreateProduct}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="qty" className="col-sm-3 control-label">
                  Số lượng
                </label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    id="qty"
                    onChange={this.onChangeFormCreateProduct}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="tech" className="col-sm-3 control-label">
                  Kích thước
                </label>
                <div className="col-sm-3">
                  <select
                    className="form-control"
                    name="size"
                    onChange={this.onChangeFormCreateProduct}
                  >
                    <option>--Chọn size--</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="tech" className="col-sm-3 control-label">
                  Màu sắc
                </label>
                <div className="col-sm-3">
                  <select
                    className="form-control"
                    name="color"
                    onChange={this.onChangeFormCreateProduct}
                  >
                    <option>--Chọn color--</option>
                    <option value="Trắng">Trắng</option>
                    <option value="Đen">Đen</option>
                    <option value="Xanh">Xanh</option>
                    <option value="Đỏ">Đỏ</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="tech" className="col-sm-3 control-label">
                  Thương hiệu
                </label>
                <div className="col-sm-3">
                  <select
                    className="form-control"
                    name="brand"
                    onChange={this.onChangeFormCreateProduct}
                  >
                    <option>--Chọn Thương Hiệu--</option>
                    <option value="Chanel">Chanel</option>
                    <option value="Prada">Prada</option>
                    <option value="Dior">Dior</option>
                    <option value="Louis Vuitton">Louis Vuitton</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="tech" className="col-sm-3 control-label">
                  Chất liệu
                </label>
                <div className="col-sm-3">
                  <select
                    className="form-control"
                    name="material"
                    onChange={this.onChangeFormCreateProduct}
                  >
                    <option>--Chọn chất liệu--</option>
                    <option value="cotton">Cotton</option>
                    <option value="nỉ">Nỉ</option>
                    <option value="kaki">Kaki</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="tech" className="col-sm-3 control-label">
                  Trạng thái sản phẩm
                </label>
                <div className="col-sm-3">
                  <select
                    className="form-control"
                    name="instock"
                    onChange={this.onChangeFormCreateProduct}
                  >
                    <option>--Trạng thái--</option>
                    <option value={true}>Còn hàng</option>
                    <option value={false}>Hết hàng</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3 control-label">
                  Ảnh sản phẩm
                </label>
                <div className="col-sm-3">
                  <label className="control-label small" htmlFor="file_img">
                    (jpg/png):
                  </label>
                  <br />
                  <input
                    type="file"
                    name="thumbnail"
                    onChange={this.onChangeImage}
                  />
                </div>
              </div>

              <hr />
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={this.onSubmitFormCreateProduct}
                  >
                    Tạo sản phẩm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default CreatProduct;
