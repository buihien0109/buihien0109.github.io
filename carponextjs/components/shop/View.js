import Router from "next/router";

const View = () => {
  function sortData(event) {
    const sorting = event.target.value;
    console.log(sorting);
    let sort = "";
    let order = "";

    if (sorting === "price-asc") {
      sort = "price";
      order = "asc";
    } else if (sorting === "price-desc") {
      sort = "price";
      order = "desc";
    }

    Router.push({
      pathname: "/shop",
      query: { sort, order }
    });
  }

  return (
    <div className="toolbar">
      <div id="sort-by">
        <label className="left">Sắp xếp: </label>
        <select className="selection-2" onChange={sortData}>
          <option value="">Default Sorting</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>
      <div className="pager">
        <div id="limiter">
          <label>View: </label>
          <select
            className="selection-1"
            onChange={(e) => {
              Router.push({
                pathname: "/shop",
                query: { limit : e.target.value }
              });
            }}
          >
            <option value="">Default View</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default View;
