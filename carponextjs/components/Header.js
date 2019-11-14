import Link from "next/link";

const MainHeader = () => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
      <Link href="/">
        <a
          className="navbar-brand order-xs-2 order-sm-2 order-md-2 order-lg-1"
          href="#"
        >
          <strong>CarpoShop</strong>
        </a>
      </Link>
      <button
        className="navbar-toggler order-xs-1 order-sm-1 order-md-1 order-lg-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a
                className="nav-link text-uppercase text-white"
                href="./index.html"
              >
                Trang chủ
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/shop">
              <a
                className="nav-link text-uppercase text-white"
                href="./shop.html"
              >
                Sản phẩm
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">
              <a
                className="nav-link text-uppercase text-white"
                href="./blog.html"
              >
                Blog
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a
                className="nav-link text-uppercase text-white"
                href="./contact.html"
              >
                Liên hệ
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/track-order">
              <a
                className="nav-link text-uppercase text-white"
                href="./track-order.html"
              >
                Theo dõi đơn hàng
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav nav-flex-icons order-xs-3 order-sm-3 order-md-3 order-lg-3">
        <li className="nav-item sm-display-none">
          <a className="nav-link icon-header">
            <i className="fa fa-search text-white" aria-hidden="true" />
          </a>
        </li>
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link icon-header" href="./login.html">
              <i className="fa fa-user text-white" aria-hidden="true" />
            </a>
          </Link>
        </li>
        <li className="nav-item sm-display-none">
          <Link href="/shopping-cart">
            <a className="nav-link icon-header" href="./shopping-card.html">
              <i
                className="fa fa-shopping-cart text-white"
                aria-hidden="true"
              />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
export default MainHeader;
