import React from "react";
import ProductItem from "./ProductItem";

const Product = props => {
  const { product, currentPage, productPerPage, currentTodos } = props;
  const index = currentPage * productPerPage - productPerPage;
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

  return (
    <div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên sản phẩm</th>
            <th className="text-center">Giá</th>
            <th className="text-center">Thương hiệu</th>
            <th className="text-center">Chất liệu</th>
            <th className="text-center">Size</th>
            <th className="text-center">Màu sắc</th>
            <th className="text-center"></th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody className="table-hover">{productItem}</tbody>
      </table>
    </div>
  );
};
export default Product;
