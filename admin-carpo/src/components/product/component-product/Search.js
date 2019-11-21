import React from "react";

const Search = props => {
  const onHandleChangeSearch = e => {
    props.onHandleChangeSearch(e.target.value);
  };
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          name="keyword"
          type="text"
          className="form-control"
          placeholder="Search item by name..."
          onChange={onHandleChangeSearch}
        />
        <span className="input-group-btn">
          <button className="btn-search" type="button" onClick={props.onSearch}>
            <span className="fa fa-search"></span> Search
          </button>
        </span>
      </div>
    </div>
  );
};
export default Search
