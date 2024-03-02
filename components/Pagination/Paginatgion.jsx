import React from "react";
import "./Pagination.css";

const Pagination = ({ next, prev, onPageChange, currentPage, totalPages }) => {
  const handlePageChange = (url) => {
    onPageChange(url);
  };

  return (
    <div className="pagination">
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {prev && <button onClick={() => handlePageChange(prev)}>Previous</button>}
      {next && <button onClick={() => handlePageChange(next)}>Next</button>}
    </div>
  );
};

export default Pagination;
