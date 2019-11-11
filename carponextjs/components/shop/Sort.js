import Link from "next/link";

const Sort = props => {
  const { listProducts, filterProduct } = props;
  //Get List Brand
  let brands = listProducts.map(product => product.brand);
  brands = brands.filter((brand, i) => brands.indexOf(brand) === i);
  //Render Brand
  const renderBrand = brands.map((brand, index) => {
    return (
      <Link href={`/shop-list?brand=${brand}`} key={index}>
        <li>
          <a href="#" onClick={() => filterProduct("brand", brand)}>
            {brand}
          </a>
          (20)
        </li>
      </Link>
    );
  });

  //Get List material
  let materials = listProducts.map(product => product.material);
  materials = materials.filter(
    (material, i) => materials.indexOf(material) === i
  );
  //Render material
  const renderMaterial = materials.map((material, index) => {
    return (
      <Link href={`/shop-list?material=${material}`} key={index}>
        <li>
          <a href="#" onClick={() => filterProduct("material", material)}>
            {material}
          </a>
        </li>
      </Link>
    );
  });

  //Get List size
  let sizes = listProducts.map(product => product.size);
  sizes = sizes.filter((size, i) => sizes.indexOf(size) === i);
  //Render size
  const renderSize = sizes.map((size, index) => {
    return (
      <Link href={`/shop-list?size=${size}`} key={index}>
        <li>
          <a href="#" onClick={() => filterProduct("size", size)}>
            {size}
          </a>
        </li>
      </Link>
    );
  });

  //Get List color
  let colors = listProducts.map(product => product.color);
  colors = colors.filter((color, i) => colors.indexOf(color) === i);
  //Render color
  const renderColor = colors.map((color, index) => {
    return (
      <Link href={`/shop-list?color=${color}`} key={index}>
        <li>
          <a href="#" onClick={() => filterProduct("color", color)}>
            {color}
          </a>
        </li>
      </Link>
    );
  });



  return (
    <aside className="sidebar">
      <div className="block block-layered-nav">
        <div className="block-title">
          <h3>Tìm kiếm sản phẩm</h3>
        </div>
        <div className="block-content">
          <dl id="narrow-by-list">
            <dt className="even">Thương hiệu</dt>
            <dd className="even">
              <ol>{renderBrand}</ol>
            </dd>
            <dt className="even">Chất liệu</dt>
            <dd className="even">
              <ol>{renderMaterial}</ol>
            </dd>
            <dt className="odd">Kích thước</dt>
            <div className="size-area">
              <div className="size">
                <ul>{renderSize}</ul>
              </div>
            </div>
            <dt className="odd">Màu sắc</dt>
            <dd className="odd">
              <ol>{renderColor}</ol>
            </dd>
          </dl>
        </div>
      </div>
      <div className="block product-price-range ">
        <div className="block-title">
          <h3>Giá</h3>
        </div>
        <div className="block-content">
          <div className="slider-range">
            <ul className="check-box-list">
              <li>
                <div className="pretty p-icon p-smooth">
                  <input type="checkbox" name="cc" defaultValue="p1" id="p1" />
                  <label htmlFor="p1">
                    &lt; 200.000đ<span className="count">(5)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="pretty p-icon p-smooth">
                  <input type="checkbox" name="cc" defaultValue="p2" id="p2" />
                  <label htmlFor="p2">
                    200.000 - 500.000<span className="count">(12)</span>
                  </label>
                </div>
              </li>
              <li>
                <div className="pretty p-icon p-smooth">
                  <input type="checkbox" name="cc" defaultValue="p3" id="p3" />
                  <label htmlFor="p3">
                    500.000 - 1.000.000<span className="count">(15)</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sort;
