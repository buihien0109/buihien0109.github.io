import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import axios from "axios";
import Products from "./component-product/Products";
import Search from "./component-product/Search";
import View from "./component-product/View";
import Pagination from "./component-product/Pagination";
import queryString from "query-string";
import { Link } from "react-router-dom";

const Product = props => {
  //Khai bao state
  const [product, setProducts] = useState([]); //Danh sách sản phẩm
  const [keyword, setKeyword] = useState(""); //Từ khóa tìm kiếm
  const [currentPage, setCurrentPage] = useState(1); //Page Hiện tại
  const [productPerPage, setProductPerPage] = useState(10); //Số sản phẩm mỗi page
  const indexOfLastNews = currentPage * productPerPage; //Chỉ số của sản phẩm cuối cùng mỗi page
  const indexOfFirstNews = indexOfLastNews - productPerPage; //Chỉ số của sản phẩm đầu tiên mỗi page
  const currentTodos = product.slice(indexOfFirstNews, indexOfLastNews); //Danh sách sản phẩm mỗi page tương ứng với số sản phẩm mỗi page

  const onSelect = data => setProductPerPage(Number(data));
  const onChosePage = data => setCurrentPage(Number(data));

  const onPrevPage = data => {
    currentPage > 1
      ? setCurrentPage(currentPage + data)
      : setCurrentPage(currentPage);
  };

  const onNextPage = data => {
    currentPage < Math.ceil(product.length / productPerPage)
      ? setCurrentPage(currentPage + data)
      : setCurrentPage(currentPage);
  };

  const onHandleChangeSearch = data => setKeyword(data);

  //Get data product và lưu vào state
  useEffect(() => {
    axios
      .get("https://carpo.herokuapp.com/products?_sort=id&_order=desc")
      .then(res => {
        console.log(res);
        console.log(queryString.parseUrl(res.config.url));
        setProducts(res.data);
      })
      .catch(err => {
        alert(err.message);
      });
  }, []);

  //Delete product
  const onDeleteProduct = id => {
    axios
      .delete(`https://carpo.herokuapp.com/products/${id}`)
      .then(res => {
        alert("Xóa thành công");
      })
      .catch(err => {
        alert(err.message);
      });
  };

  //Search tu khoa
  const onSearch = () => {
    if (keyword && keyword.length > 0) {
      axios
        .get(`https://carpo.herokuapp.com/products?q=${keyword}`)
        .then(res => {
          res.data && res.data.length > 0
            ? setProducts(res.data)
            : alert("Khong tim thay ket qua");
        })
        .catch(err => {
          alert(err.message);
        });
    } else {
      axios
        .get("https://carpo.herokuapp.com/products")
        .then(res => {
          setProducts(res.data);
        })
        .catch(err => {
          alert(err.message);
        });
    }
  };

  return (
    <MainLayout>
      <div className="container pl-0 mb-4">
        <h3 className="table-title text-left text-uppercase">
          Danh sách sản phẩm
        </h3>

        <div className="group-btn">
          <Link to="/create-product">
            <button className="btn-addnew ml-0">
              <i className="fas fa-plus"></i> Tạo sản phẩm
            </button>
          </Link>
          <Link to="/product">
            <button className="btn-goback ml-2">
              <i className="fas fa-sync-alt"></i> Refresh
            </button>
          </Link>
        </div>
      </div>
      <div className="container container-table" style={{ marginTop: 10 }}>
        <div className="row search-bar">
          <View onSelect={onSelect} product={product} />
          <Search
            onHandleChangeSearch={onHandleChangeSearch}
            onSearch={onSearch}
          />
        </div>

        <Products
          currentPage={currentPage}
          productPerPage={productPerPage}
          currentTodos={currentTodos}
          onDeleteProduct={onDeleteProduct}
        />
        <Pagination
          product={product}
          currentPage={currentPage}
          productPerPage={productPerPage}
          indexOfFirstNews={indexOfFirstNews}
          indexOfLastNews={indexOfLastNews}
          onChosePage={onChosePage}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
        />
      </div>
    </MainLayout>
  );
};

export default Product;
