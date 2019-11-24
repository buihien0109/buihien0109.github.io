import React from "react";
import {Link} from 'react-router-dom'

const ProductItem = props => {
  const { productItem, stt, onDeleteProduct } = props;
  //Format money
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <tr>
      <td className="text-left">{stt}</td>
      <td className="text-left">{productItem.name}</td>
      <td className="text-left">{productItem.price}đ</td>
      <td className="text-left">{productItem.brand}</td>
      <td className="text-left">{productItem.material}</td>
      <td className="text-left">{productItem.size}</td>
      <td className="text-left">{productItem.color}</td>
      <td className="text-center">
        <Link to={`/update-product/${productItem.id}`}>
          <i className="fas fa-edit icon-update"></i>
        </Link>
      </td>
      <td className="text-center">
        <span onClick={() => onDeleteProduct(productItem.id)}>
          <i className="fas fa-trash-alt icon-delete"></i>
        </span>
      </td>
    </tr>
  );
};

export default ProductItem
