import React from 'react'
import ProductItem from './ProductItem'

const Product = props => {
    const {product} = props
    const productItem = product.map((p,i) => {
        return <ProductItem
            key={p.id}
            productItem={p}
            stt={i}
            onDeleteProduct={props.onDeleteProduct}
        />
    })

    return (
        <table
          id="example"
          className="table table-striped table-bordered"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Thương hiệu</th>
              <th>Chất liệu</th>
              <th>Size</th>
              <th>Màu sắc</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{productItem}</tbody>
        </table>
    )
}
export default Product