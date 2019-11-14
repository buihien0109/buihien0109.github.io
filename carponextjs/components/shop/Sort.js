import Link from "next/link";
import fetch from "isomorphic-unfetch";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: []
    };
  }

  async componentDidMount() {
    const response = await fetch("https://carpo.herokuapp.com/products");
    const listProduct = await response.json();
    this.setState({
      listProduct: listProduct
    });
  }

  handleFilter = (brand) => {
    const { listProduct } = this.state
    let result = listProduct.filter(product => {
      product.brand === brand
    })
    this.setState({
      listProduct : result
    })
  }
  render() {
    const { listProduct } = this.state;
    const { sort, order} = this.props

    let brands = listProduct.map(product => product.brand);
    brands = brands.filter((brand, i) => brands.indexOf(brand) === i);
    //Render Brand
    const renderBrand = brands.map((brand, index) => {
      return (
        // <Link href={`/shop?sort=${sort}&order=${order}&brand=${brand}`} key={index}>
          <li key={index}>
            <a href="#" onClick={() => this.handleFilter(brand)}>{brand}</a>
          </li>
        // </Link>
      );
    });

    //Get List material
    let materials = listProduct.map(product => product.material);
    materials = materials.filter(
      (material, i) => materials.indexOf(material) === i
    );
    const renderMaterial = materials.map((material, index) => {
      return (
        <Link href={`/shop?material=${material}`} key={index}>
          <li>
            <a href="#">{material}</a>
          </li>
        </Link>
      );
    });

    //Get List color
    let colors = listProduct.map(product => product.color);
    colors = colors.filter((color, i) => colors.indexOf(color) === i);
    const renderColor = colors.map((color, index) => {
      return (
        <Link href={`/shop?color=${color}`} key={index}>
          <li>
            <a href="#">{color}</a>
          </li>
        </Link>
      );
    });

    //Get List size
    let sizes = listProduct.map(product => product.size);
    sizes = sizes.filter((size, i) => sizes.indexOf(size) === i);
    const renderSize = sizes.map((size, index) => {
      return (
        <Link href={`/shop?size=${size}`} key={index}>
          <li>
            <a href="#">{size}</a>
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
                    <input
                      type="checkbox"
                      name="cc"
                      defaultValue="p1"
                      id="p1"
                    />
                    <label htmlFor="p1">
                      &lt; 200.000đ<span className="count">(5)</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="pretty p-icon p-smooth">
                    <input
                      type="checkbox"
                      name="cc"
                      defaultValue="p2"
                      id="p2"
                    />
                    <label htmlFor="p2">
                      200.000 - 500.000<span className="count">(12)</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="pretty p-icon p-smooth">
                    <input
                      type="checkbox"
                      name="cc"
                      defaultValue="p3"
                      id="p3"
                    />
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
  }
}

export default Sort;
