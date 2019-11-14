import Layout from "components/CarpoLayout";
import Link from "next/link";
import Head from "next/head";
import fetch from 'isomorphic-unfetch';
import Title from 'components/shop/Title'
import Path from 'components/shop/Path'
import Banner from 'components/shop/Banner'
import View from 'components/shop/View'
import Product from "components/shop/Product";
import Pagination from 'components/shop/Pagination'
import Sort from "components/shop/Sort"



const ShopList = ({currentPage, products, totalItems, limit, sort, order}) => {

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
                  <Product products={products}/>
                  <div className="toolbar bottom">
                    <Pagination 
                      currentPage={currentPage}
                      totalItems={totalItems}
                      limit={limit}
                      sort={sort}
                      order={order}
                    />
                  </div>
                </article>
              </div>
              <div className="sidebar col-sm-3 col-xs-12 col-sm-pull-9">
                <Sort
                  sort={sort}
                  order={order}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};


ShopList.getInitialProps = async function({ query }) {
  const page = query.page || 1;
  const limit = 12;
  const sort = query.sort || 'id';
  const order = query.order || 'desc';
  const res = await fetch(
    `https://carpo.herokuapp.com/products?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`
  );
  const data = await res.json();

  return {
    products: data,
    totalItems: res.headers.get('X-Total-Count'),
    currentPage: page,
    limit: limit,
    sort: sort,
    order: order
  };
};
export default ShopList;
