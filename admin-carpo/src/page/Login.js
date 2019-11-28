import React, { useState } from "react";
import { auth } from "../components/product/Firebase/index";
import "./Login.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const history = useHistory();
  const handleInputForm = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    let userSubmit = { ...userInfo, [name]: value };
    setUserInfo(userSubmit);
  };
  const handleSingInForm = e => {
    e.preventDefault();
    const { email, password } = userInfo;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Đăng nhập thành công",
            showConfirmButton: false,
            timer: 1500
          });
        history.push("/product");
      })
      .catch(error => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Đăng nhập không thành công",
          showConfirmButton: false,
          timer: 1500
        });
      });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          name="email"
          placeholder="Username"
          required="required"
          onChange={handleInputForm}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required="required"
          onChange={handleInputForm}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block btn-large"
          onClick={handleSingInForm}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
