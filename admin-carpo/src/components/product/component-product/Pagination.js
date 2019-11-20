import React from "react";

const Pagination = props => {
  const { product, currentPage, productPerPage, onChosePage } = props;
  const pageNumbers = []; //Tính số lượng page
  for (let i = 1; i <= Math.ceil(product.length / productPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPage = pageNumbers.map(number => {
    if (currentPage === number) {
      return (
        <li key={number} id={number} className="active">
          {number}
        </li>
      );
    } else {
      return (
        <li key={number} id={number} onClick={onChosePage}>
          {number}
        </li>
      );
    }
  });
  return <ul className="pagination">{renderPage}</ul>;
};
export default Pagination;
