import React from "react";
import {Link} from 'react-router-dom'

const ProductItem = props => {
  const { productItem, stt, onDeleteProduct } = props;
  return (
    <tr>
      <td>{stt + 1}</td>
      <td>{productItem.name}</td>
      <td>{productItem.price}</td>
      <td>{productItem.brand}</td>
      <td>{productItem.material}</td>
      <td>{productItem.size}</td>
      <td>{productItem.color}</td>
      <td>
        <Link to={`/update-product/${productItem.id}`}>
          <i className="fas fa-edit"></i>
        </Link>
      </td>
      <td>
        <span onClick={() => onDeleteProduct(productItem.id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
};

export default ProductItem
