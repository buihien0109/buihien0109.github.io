import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { auth } from "../product/Firebase/index"
import Login from '../../page/Login'

const MainLayout = props => {

  auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
      return <Login />
    }
  })
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
