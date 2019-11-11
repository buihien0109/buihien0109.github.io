import Layout from "../components/CarpoLayout";
import Link from "next/link";
import Head from "next/head";
import fetch from 'isomorphic-unfetch';
import Title from '../components/shop/Title'
import Path from '../components/shop/Path'
import Banner from '../components/shop/Banner'
import View from '../components/shop/View'
import Product from "../components/shop/Product";
import Pagination from '../components/shop/Pagination'
import Sort from "../components/shop/Sort"
import {useState} from "react"



const ShopList = (props) => {
  const {listProducts} = props
  // console.log(props)
  const [products,setProducts] = useState(listProducts)
  

  const filterProduct =  async (type,name) => {
    const res = await fetch(
      `https://carpo.herokuapp.com/products?${type}=${name}`
    );
    const data = await res.json();
    // console.log(data)
    // return {products : data}
    setProducts(data)
  };
  
  return (
    <Layout>
      <Head>
        <title>Shop Page</title>
        <link rel="stylesheet" href="css/shop-list.css" />
      </Head>
      <div>
        <Path />
        <div className="main-container col2-left-layout">
          <div className="container">
            <div className="row">
              <div className="col-sm-9 col-sm-push-3 main-inner">
                <Banner />
                <article className="col-main">
                  <Title />
                  <View />
                  <Product products={products} listProducts={listProducts}/>
                  <div className="toolbar bottom">
                    <Pagination />
                  </div>
                </article>
              </div>
              <div className="sidebar col-sm-3 col-xs-12 col-sm-pull-9">
                <Sort products={products} listProducts={listProducts} filterProduct={filterProduct}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

ShopList.getInitialProps = async function() {
  const res = await fetch('https://carpo.herokuapp.com/products');
  const data = await res.json();
  return {
    listProducts : data
  };
};

export default ShopList;
