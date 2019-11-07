const View = () => {
  return (
    <div className="toolbar">
      <div id="sort-by">
        <label className="left">Sắp xếp: </label>
        <ul>
          <li>
            <a href="#">
              Tùy chọn
              <span className="right-arrow" />
            </a>
            <ul>
              <li>
                <a href="#">Giảm giá nhiều nhất</a>
              </li>
              <li>
                <a href="#">Từ cao đến thấp</a>
              </li>
              <li>
                <a href="#">Đánh giá cao nhất</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="pager">
        <div id="limiter">
          <label>View: </label>
          <ul>
            <li>
              <a href="#">
                12
                <span className="right-arrow" />
              </a>
              <ul>
                <li>
                  <a href="#">15</a>
                </li>
                <li>
                  <a href="#">20</a>
                </li>
                <li>
                  <a href="#">35</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default View
