import React from "react";

const View = props => {
  const { product } = props
  const onSelect = (e) => props.onSelect(e.target.value)
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="news-per-page">
        <span className="custom-dropdown">
        <select defaultValue={0} onChange={onSelect}>
          <option value={0} disabled>
            View
          </option>
          <option value={10}>10 rows</option>
          <option value={12}>12 rows</option>
          <option value={15}>15 rows</option>
          <option value={product.length}>All rows</option>
        </select>
        </span>
      </div>
    </div>
  );
};
export default View

