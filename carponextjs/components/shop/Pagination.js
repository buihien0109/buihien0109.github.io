const Pagination = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 text-left">
        <div className="pages">
          <ul className="pagination">
            <li>
              <a href="#">«</a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">»</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 text-right">
        Hiển thị 1 - 15 của 25 (2 trang)
      </div>
    </div>
  );
};

export default Pagination;
