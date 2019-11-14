import Link from 'next/link';

const Pagination = ({ currentPage, totalItems, limit, sort, order }) => {
  const itemPaginations = [];
  const numberPages = Math.ceil(totalItems / limit);

  for (let i = 0; i < numberPages; i++) {
    let activeClass = "";
    if (i + 1 === parseInt(currentPage)) {
      activeClass = "active";
    }

    itemPaginations.push(
      <Link href={`/shop?page=${i + 1}&sort=${sort}&order=${order}`} key={i}>
        <li className={activeClass}>
          <a href="#">{i + 1}</a>
        </li>
      </Link>
    );
  }
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 text-left">
        <div className="pages">
          <ul className="pagination">{itemPaginations}</ul>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 text-right">
        Hiển thị 1 - 15 của {totalItems} ({numberPages} trang)
      </div>
    </div>
  );
};

export default Pagination;
