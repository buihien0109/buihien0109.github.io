import React from "react";
import {Link} from 'react-router-dom'

const ProductItem = props => {
  const { productItem, stt, onDeleteProduct } = props;
  return (
    <tr>
      <td className="text-left">{stt}</td>
      <td className="text-left">{productItem.name}</td>
      <td className="text-left">{productItem.price}</td>
      <td className="text-left">{productItem.brand}</td>
      <td className="text-left">{productItem.material}</td>
      <td className="text-left">{productItem.size}</td>
      <td className="text-left">{productItem.color}</td>
      <td className="text-left">
        <Link to={`/update-product/${productItem.id}`}>
          <i className="fas fa-edit"></i>
        </Link>
      </td>
      <td className="text-left">
        <span onClick={() => onDeleteProduct(productItem.id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
};

export default ProductItem
