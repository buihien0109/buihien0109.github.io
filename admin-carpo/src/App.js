import React from "react";
import MainLayout from "./components/layout/MainLayout";
import Product from "./components/product/Product";
import CreateProduct from './components/product/CreateProduct'
import UpdateProduct from './components/product/UpdateProduct'
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <MainLayout />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/create-product">
          <CreateProduct />
        </Route>
        <Route path="/update-product/:id">
          <UpdateProduct />
        </Route>
      </Switch>
    );
  }
}

export default App;
