import React from "react";

const Pagination = ({ currentPage, setCurrentPage, isFoundation }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <p
        onClick={() => handlePageChange(1)}
        style={{
          cursor: "pointer",
          border: currentPage === 1 ? "1px solid #707070" : "none",
        }}
      >
        1
      </p>
      <p
        onClick={() => handlePageChange(2)}
        style={{
          cursor: "pointer",
          border: currentPage === 2 ? "1px solid #707070" : "none",
        }}
      >
        2
      </p>
      {isFoundation && (
        <p
          onClick={() => handlePageChange(3)}
          style={{
            cursor: "pointer",
            border: currentPage === 3 ? "1px solid #707070" : "none",
          }}
        >
          3
        </p>
      )}
    </div>
  );
};

export default Pagination;
