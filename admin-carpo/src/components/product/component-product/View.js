import React from "react";

const View = props => {
    const onSelect = (e) => {
        props.onSelect(e.target.value)
    }
  return (
    <div className="news-per-page">
      <select defaultValue="0" onChange={onSelect}>
        <option value="0" disabled>
          Get by
        </option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </select>
    </div>
  );
};
export default View
