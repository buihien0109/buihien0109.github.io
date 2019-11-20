import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [product, setProduct] = useState({});
  console.log(error);

  //Lay du lieu de hien thi ra update
  useEffect(() => {
    axios
      .get(`https://carpo.herokuapp.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        setError(err.message);
      });
  },[id]);

  //Lay du lieu cac truong
  const onChangeFormCreateProduct = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    let updateProduct = { ...product, [name]: value };
    setProduct(updateProduct);
  };

  //Upload anh
  const onChangeImage = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    let url = `/images/${file.name}`;
    reader.onloadend = () => {
      setProduct({ ...product, thumbnail: url });
    };
    reader.readAsDataURL(file);
  };

  //Gui du lieu len API
  const onSubmitFormCreateProduct = async e => {
    e.preventDefault();
    fetch(`https://carpo.herokuapp.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(
      function(response) {
        alert("Cập nhật sản phẩm thành công");
      },
      function(error) {
        alert("Cập nhật sản phẩm thất bại");
      }
    );
  };
  
  return (
    <MainLayout>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Cập nhật sản phẩm</h3>
        </div>
        <div className="panel-body">
          <form
            className="form-horizontal"
            onSubmit={onSubmitFormCreateProduct}
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
                  defaultValue={product.name}
                  onChange={onChangeFormCreateProduct}
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
                  defaultValue={product.price}
                  onChange={onChangeFormCreateProduct}
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
                  defaultValue={product.description}
                  onChange={onChangeFormCreateProduct}
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
                  defaultValue={product.quantity}
                  onChange={onChangeFormCreateProduct}
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
                  value={product.size}
                  onChange={onChangeFormCreateProduct}
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
                  value={product.color}
                  onChange={onChangeFormCreateProduct}
                >
                  <option>--Chọn color--</option>
                  <option value="Trắng">Trắng</option>
                  <option value="Đen">Đen</option>
                  <option value="Xanh">Xanh</option>
                  <option value="Đỏ">Đỏ</option>
                  <option value="Xám đen">Xám đen</option>
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
                  value={product.brand}
                  onChange={onChangeFormCreateProduct}
                >
                  <option>--Chọn Thương Hiệu--</option>
                  <option value="Chanel">Chanel</option>
                  <option value="Prada">Prada</option>
                  <option value="Dior">Dior</option>
                  <option value="Louis Vuitton">Louis Vuitton</option>
                  <option value="Hermes">Hermes</option>
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
                  value={product.material}
                  onChange={onChangeFormCreateProduct}
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
                  value={product.instock}
                  onChange={onChangeFormCreateProduct}
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
                <input type="file" name="thumbnail" onChange={onChangeImage} />
              </div>
            </div>

            <hr />
            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-9">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={onSubmitFormCreateProduct}
                >
                  Cập nhật sản phẩm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default UpdateProduct;
