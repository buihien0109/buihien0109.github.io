import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ImageUpload from "./component-product/upload/ImageUpload";
import { Editor } from "@tinymce/tinymce-react";
import "./CreateProduct.css";
import Swal from 'sweetalert2'

const UpdateProduct = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [product, setProduct] = useState({});
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

  console.log(error,description);

  const handleEditorChange = (content, editor) => {
    setDescription(content)
  }

  const handleUploadImage = (url) => {
    setUrl(url)
    setProduct({...product, thumbnail : url})
  }

  //Lay du lieu de hien thi ra update
  useEffect(() => {
    axios
      .get(`https://carpo.herokuapp.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setUrl(res.data.thumbnail)
      })
      .catch(err => {
        setError(err.message);
      });
  }, [id]);

  //Lay du lieu cac truong
  const onChangeFormCreateProduct = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    let updateProduct = { ...product, [name]: value };
    setProduct(updateProduct);
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
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Cập nhật sản phẩm thành công',
          showConfirmButton: false,
          timer: 2000
        })
      },
      function(error) {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Cập nhật sản phẩm thất bại',
          showConfirmButton: false,
          timer: 2000
        })
      }
    );
  };

  return (
    <MainLayout>
      <div className="container pl-0 mb-4">
        <h3 className="panel-title table-title text-left text-uppercase">
          Cập nhật sản phẩm
        </h3>

        <div className="group-btn">
          <Link to="/product">
            <button className="btn-goback">
              <i className="fas fa-chevron-left"></i> Quay lại
            </button>
          </Link>
          <button
            type="submit"
            className="btn-addnew"
            onClick={onSubmitFormCreateProduct}
          >
            <i className="fas fa-plus"></i> Cập nhật sản phẩm
          </button>
        </div>
      </div>

      <div className="panel panel-default container mr-auto ml-auto style-panel">
        <div className="panel-heading"></div>
        <div className="panel-body">
          <form
            className="form-horizontal"
            // onSubmit={onSubmitFormCreateProduct}
          >
            <div className="row">
              <div className="col-md-9">
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="control-label required-lable"
                  >
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    defaultValue={product.name}
                    onChange={onChangeFormCreateProduct}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="control-label required-lable"
                  >
                    Mô tả sản phẩm
                  </label>
                  <Editor
                    value={product.description}
                    onEditorChange={handleEditorChange}
                    plugins="lists link image paste help wordcount"
                  />
                </div>
                <div className="form-group">
                  <ImageUpload handleUploadImage={handleUploadImage} url={url}/>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="control-label required-lable"
                  >
                    Giá
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="name"
                    defaultValue={product.price}
                    onChange={onChangeFormCreateProduct}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="qty" className="control-label required-lable">
                    Số lượng
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    id="qty"
                    defaultValue={product.quantity}
                    onChange={onChangeFormCreateProduct}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="tech"
                    className="control-label required-lable"
                  >
                    Kích thước
                  </label>
                  <select
                    className="form-control"
                    name="size"
                    value={product.size}
                    onChange={onChangeFormCreateProduct}
                  >
                    <option></option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="tech"
                    className="control-label required-lable"
                  >
                    Màu sắc
                  </label>
                  <select
                    className="form-control"
                    name="color"
                    value={product.color}
                    onChange={onChangeFormCreateProduct}
                  >
                    <option></option>
                    <option value="Trắng">Trắng</option>
                    <option value="Đen">Đen</option>
                    <option value="Xanh">Xanh</option>
                    <option value="Đỏ">Đỏ</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="tech"
                    className="control-label required-lable"
                  >
                    Thương hiệu
                  </label>
                  <select
                    className="form-control"
                    name="brand"
                    value={product.brand}
                    onChange={onChangeFormCreateProduct}
                  >
                    <option></option>
                    <option value="Chanel">Chanel</option>
                    <option value="Prada">Prada</option>
                    <option value="Dior">Dior</option>
                    <option value="Louis Vuitton">Louis Vuitton</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="tech"
                    className="control-label required-lable"
                  >
                    Chất liệu
                  </label>
                  <select
                    className="form-control"
                    name="material"
                    value={product.material}
                    onChange={onChangeFormCreateProduct}
                  >
                    <option></option>
                    <option value="cotton">Cotton</option>
                    <option value="nỉ">Nỉ</option>
                    <option value="kaki">Kaki</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="tech"
                    className="control-label required-lable"
                  >
                    Trạng thái sản phẩm
                  </label>
                  <select
                    className="form-control"
                    name="instock"
                    value={product.instock}
                    onChange={onChangeFormCreateProduct}
                  >
                    <option></option>
                    <option value={true}>Còn hàng</option>
                    <option value={false}>Hết hàng</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default UpdateProduct;
