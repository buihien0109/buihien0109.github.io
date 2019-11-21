import React from "react";

const Pagination = props => {
  const { product, currentPage, productPerPage, indexOfFirstNews, indexOfLastNews, onChosePage } = props;
  const pageNumbers = []; //Tính số lượng page
  const countPage = Math.ceil(product.length / productPerPage)
  for (let i = 1; i <= countPage; i++) {
    pageNumbers.push(i);
  }

  const handleChosePage = number => {
    onChosePage(number);
  };

  const onPrevPage = number => {
    props.onPrevPage(number);
  };

  const onNextPage = number => {
    props.onNextPage(number);
  };

  const renderPage = pageNumbers.map(number => {
    if (currentPage === number) {
      return (
        <li key={number} id={number}>
          <button className="active">{number}</button>
        </li>
      );
    } else {
      return (
        <li key={number} id={number} onClick={() => handleChosePage(number)}>
          <button>{number}</button>
        </li>
      );
    }
  });
  return (
    <div className="container-pagination">
    <ul className="pagination">
      <li onClick={() => onPrevPage(-1)}>
        <button>
          <i className="fas fa-angle-double-left"></i>
        </button>
      </li>
      {renderPage}
      <li onClick={() => onNextPage(1)}>
        <button>
          <i className="fas fa-angle-double-right"></i>
        </button>
      </li>
    </ul>
    <p className="note-table">Hiển thị {indexOfFirstNews+1} - {indexOfLastNews} của {product.length} ({countPage} trang)</p>
    </div>
  );
};
export default Pagination;
