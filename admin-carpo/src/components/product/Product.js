import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import axios from "axios";
import Products from "./component-product/Products";
import Search from "./component-product/Search";
import View from "./component-product/View";
import Pagination from "./component-product/Pagination";

const Product = props => {
  //Khai bao state
  const [product, setProducts] = useState([]); //Danh sách sản phẩm
  const [keyword, setKeyword] = useState(""); //Từ khóa tìm kiếm
  const [currentPage, setCurrentPage] = useState(1); //Page Hiện tại
  const [productPerPage, setProductPerPage] = useState(5); //Số sản phẩm mỗi page
  const indexOfLastNews = currentPage * productPerPage; //Chỉ số của sản phẩm cuối cùng mỗi page
  const indexOfFirstNews = indexOfLastNews - productPerPage; //Chỉ số của sản phẩm đầu tiên mỗi page
  const currentTodos = product.slice(indexOfFirstNews, indexOfLastNews); //Danh sách sản phẩm mỗi page tương ứng với số sản phẩm mỗi page

  const onSelect = data => {
    setProductPerPage(Number(data));
  };

  const onChosePage = data => {
    setCurrentPage(Number(data));
  };

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

  const onHandleChangeSearch = data => {
    //Từ khóa tìm kiếm và lưu vào state
    setKeyword(data);
  };

  //Get data product và lưu vào state
  useEffect(() => {
    axios
      .get("https://carpo.herokuapp.com/products?_sort=id&_order=desc")
      .then(res => {
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
      <div className="container" style={{ marginTop: 10 }}>
        <h1 className="table-title text-center">Danh sách sản phẩm</h1>
        <div className="row search-bar">
          <View onSelect={onSelect} />
          <Search
            onHandleChangeSearch={onHandleChangeSearch}
            onSearch={onSearch}
          />
        </div>

        <Products
          product={product}
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
