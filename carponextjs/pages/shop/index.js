import Layout from "components/CarpoLayout";
import Head from "next/head";
import fetch from 'isomorphic-unfetch';
import Title from 'components/shop/Title'
import Path from 'components/shop/Path'
import Banner from 'components/shop/Banner'
import View from 'components/shop/View'
import Product from "components/shop/Product";
import Pagination from 'components/shop/Pagination'
import Sort from "components/shop/Sort"
import { url } from '../../url.config'
import queryString from 'query-string';
import {useState} from 'react'




const ShopList = (props) => {
  let { products, totalItems, query} = props
  const { _currentPage, _limit, _sort, _order } = query
  const [shoppingCart, setShoppingCart] = useState([])

  const onAddToCart = async (id) => {
    const res = await fetch(
      `https://carpo.herokuapp.com/products/${id}`
    );
    const data = await res.json();
    const productSaveInCart = {...data, quantity:1}
    setShoppingCart(shoppingCart => [...shoppingCart, productSaveInCart])
  }

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
                  <Product products={products} onAddToCart={onAddToCart}/>
                  <div className="toolbar bottom">
                    <Pagination 
                      currentPage={_currentPage}
                      totalItems={totalItems}
                      limit={_limit}
                      sort={_sort}
                      order={_order}
                    />
                  </div>
                </article>
              </div>
              <div className="sidebar col-sm-3 col-xs-12 col-sm-pull-9">
                <Sort
                  query = {query}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};


ShopList.getInitialProps = async function(context) {
  console.log(context)
  const { query } = context
  let transformedQuery = {
    _query : query.query || "",
    _page : query.page || 1,
    _limit : query.limit || 12,
    _sort : query.sort || 'id',
    _order : query.order || 'desc',
  };
  // transformedQuery = queryString.stringify(transformedQuery)
  // console.log(transformedQuery)
  // console.log(`${url}?${transformedQuery}`)
  const res = await fetch(`${url}?${queryString.stringify(transformedQuery)}`);
  const data = await res.json();

  return {
    products: data,
    totalItems: res.headers.get('X-Total-Count'),
    query : transformedQuery
  };
};
export default ShopList;
