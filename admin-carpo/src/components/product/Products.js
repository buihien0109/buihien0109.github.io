import React from "react";
import ProductItem from "./ProductItem";
import Loading from "./Loading";

const Product = props => {
  const { currentPage, productPerPage, currentTodos} = props;
  const index = currentPage * productPerPage - productPerPage;


  //Hiển thị số sản phẩn theo view
  const productItem = currentTodos.map((p, i) => {
    return (
      <ProductItem
        key={p.id}
        productItem={p}
        stt={index + i + 1}
        onDeleteProduct={props.onDeleteProduct}
      />
    );
  });

  return productItem && productItem.length > 0 ? (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên sản phẩm</th>
            <th className="text-center">Ảnh</th>
            <th className="text-center">Giá</th>
            <th className="text-center">Thương hiệu</th>
            <th className="text-center">Chất liệu</th>
            <th className="text-center">Size</th>
            <th className="text-center">Màu sắc</th>
            <th className="text-center"></th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody className="table-hover">
         {productItem}
        </tbody>
      </table>
    </div>
  ) : (
    <Loading />
  );
};
export default Product;
