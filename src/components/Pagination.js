import React from "react";

const Pagination = ({ currentPage, totalPosts, postsPerPage, paginate }) => {
  console.log("Rerendering Pagination");
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <span
          key={page}
          onClick={() => paginate(page + 1)}
          className={page + 1 === currentPage ? "active" : ""}
        >
          {page + 1}
        </span>
      ))}
    </div>
  );
};

export default React.memo(Pagination);
