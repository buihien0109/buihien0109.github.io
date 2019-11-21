import React from "react";

const View = props => {
    const onSelect = (e) => {
        props.onSelect(e.target.value)
    }
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="news-per-page">
        <span className="custom-dropdown">
        <select defaultValue={0} onChange={onSelect}>
          <option value={0} disabled>
            View
          </option>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
        </select>
        </span>
      </div>
    </div>
  );
};
export default View
