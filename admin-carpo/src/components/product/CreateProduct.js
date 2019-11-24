import React, {useState} from "react";
import MainLayout from "../layout/MainLayout";
import "./CreateProduct.css";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import ImageUpload from './component-product/upload/ImageUpload'

const CreatProduct = (props) => {
  const [product, setProduct] = useState({});
  const [description, setDescription] = useState('')

  const onChangeFormCreateProduct = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    let newProduct = { ...product, [name]: value };
    setProduct(newProduct);
  };

  const handleEditorChange = (content, editor) => {
    setDescription(content)
  }

  const handleUploadImage = (url) => {
    setProduct({...product, thumbnail : url})
  }
  

  const onSubmitFormCreateProduct = async e => {
    e.preventDefault();
    fetch("https://carpo.herokuapp.com/products", {
      method: "POST",
      body: JSON.stringify({...product, description : description}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(
      function(response) {
        alert("Tạo sản phẩm thành công");
      },
      function(error) {
        alert("Tạo sản phẩm thất bại");
      }
    );
  };

    return (
      <MainLayout>
        <div className="container pl-0 mb-4">
          <h3 className="panel-title table-title text-left text-uppercase">
            Tạo sản phẩm
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
              <i className="fas fa-plus"></i> Tạo sản phẩm
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
                    <Editor value={description} onEditorChange={handleEditorChange} plugins='lists link image paste help wordcount'/>
                  </div>
                  <div className="form-group">
                    <ImageUpload  handleUploadImage = {handleUploadImage}/>
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
                      onChange={onChangeFormCreateProduct}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="qty"
                      className="control-label required-lable"
                    >
                      Số lượng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="quantity"
                      id="qty"
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
  }

export default CreatProduct;
