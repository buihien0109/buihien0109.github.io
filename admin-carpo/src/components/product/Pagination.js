import React from "react";

const Pagination = props => {
  const { product, currentPage, productPerPage, indexOfFirstNews, indexOfLastNews, onChosePage } = props;
  const pageNumbers = []; 
  const countPage = Math.ceil(product.length / productPerPage) //Tính số lượng page
  for (let i = 1; i <= countPage; i++) {
    pageNumbers.push(i);
  }
  //Click khi chon page
  const handleChosePage = number => onChosePage(number);

  //Trở về trang trước
  const onPrevPage = number => props.onPrevPage(number);

  //Đi đến trang sau
  const onNextPage = number => props.onNextPage(number);

  //Reder số trang hiển thị
  const renderPage = pageNumbers.map(number => {
    if (currentPage === number) {
      return (
        <li key={number} id={number}>
          <button className="active">{number}</button>
        </li>
      );
    } else {
      return (
        <li key={number} id={number}>
          <button onClick={() => handleChosePage(number)}>{number}</button>
        </li>
      );
    }
  });
  
  return (
    <div className="container-pagination">
    <ul className="pagination">
      <li>
        <button onClick={() => onPrevPage(-1)} disabled={currentPage === 1 ? true : false}>
          <i className="fas fa-chevron-left"></i>
        </button>
      </li>
      {renderPage}
      <li>
        <button onClick={() => onNextPage(1)} disabled={currentPage === countPage ? true : false}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </li>
    </ul>
    <p className="note-table">Hiển thị {indexOfFirstNews+1} - {indexOfLastNews} của {product.length} ({countPage} trang)</p>
    </div>
  );
};
export default Pagination;
