import React from "react";
import { Link } from "react-router-dom";

const Sidebar = props => {
  const onShowSidebar = () => {
    props.onShowSidebar(true);
  };

  const onCloseSidebar = () => {
    props.onCloseSidebar(false);
  };
  return (
    <div>
      <button
        id="show-sidebar"
        className="btn btn-sm btn-dark"
        onClick={onShowSidebar}
      >
        <i className="fas fa-bars" />
      </button>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="ares">Carpo shop</a>
            <div id="close-sidebar">
              <i className="fas fa-times" onClick={onCloseSidebar} />
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img
                className="img-responsive img-rounded"
                src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/29178126_598862693783358_8916455711392937416_n.jpg?_nc_cat=111&_nc_oc=AQmLdRi26lJYeEYCvezOorl24TRAhrFyBYzd8zsHHEFjbaDAd9qniBKXYPsUGTU25G5FwDB7O28YC4B8QT3Z05su&_nc_ht=scontent.fhan5-3.fna&oh=9120862b97887f81e788ca292b1c5aa2&oe=5E54FFE9"
                alt="bui-hien"
              />
            </div>
            <div className="user-info">
              <span className="user-name">Bùi Hiên</span>
              <span className="user-role">Quản trị viên</span>
              <span className="user-status">
                <i className="fa fa-circle" />
                <span>Online</span>
              </span>
            </div>
          </div>
          {/* sidebar-header  */}
          <div className="sidebar-search">
            <div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-menu"
                  placeholder="Tìm kiếm..."
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-search" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* sidebar-search  */}
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>Danh Mục</span>
              </li>
              <li className="sidebar-dropdown active">
                <a href="ares">
                  <i className="fa fa-tachometer-alt" />
                  <span>Sản phẩm</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <Link to="/product">Danh sách sản phẩm</Link>
                    </li>
                    <li>
                      <Link to="/create-product">Tạo sản phẩm</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown active">
                <a href="ares">
                  <i className="fa fa-shopping-cart" />
                  <span>Bài viết</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="ares">Danh sách bài viêt</a>
                    </li>
                    <li>
                      <a href="ares">Tạo bài viết</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown active">
                <a href="ares">
                  <i className="fab fa-bandcamp"></i>
                  <span>Thương hiệu</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="ares">Danh sách thương hiệu</a>
                    </li>
                    <li>
                      <a href="ares">Tạo thương hiệu</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown active">
                <a href="ares">
                  <i className="fas fa-user"></i>
                  <span>Người dùng</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="ares">Danh sách người dùng</a>
                    </li>
                    <li>
                      <a href="ares">Thêm người dùng</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* sidebar-menu  */}
        </div>
        {/* sidebar-content  */}
        <div className="sidebar-footer">
          <a href="ares">
            <i className="fa fa-bell" />
            <span className="badge badge-pill badge-warning notification">
              3
            </span>
          </a>
          <a href="ares">
            <i className="fa fa-envelope" />
            <span className="badge badge-pill badge-success notification">
              7
            </span>
          </a>
          <a href="ares">
            <i className="fa fa-cog" />
            <span className="badge-sonar" />
          </a>
          <a href="ares">
            <i className="fa fa-power-off" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
