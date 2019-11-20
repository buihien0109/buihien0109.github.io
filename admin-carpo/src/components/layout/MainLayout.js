import React, { useState } from "react";
import Sidebar from "./Sidebar";

const MainLayout = props => {
  const [isShow, setIsShow] = useState(true);
  const onCloseSidebar = data => {
    setIsShow(data);
  };
  const onShowSidebar = data => {
    setIsShow(data);
  };
  let className = "page-wrapper chiller-theme";
  return (
    <div className={isShow ? (className += " toggled") : className}>
      <Sidebar onCloseSidebar={onCloseSidebar} onShowSidebar={onShowSidebar} />
      <main className="page-content">
        <div className="container-fluid">{props.children}</div>
      </main>
      );
    </div>
  );
};

export default MainLayout;
