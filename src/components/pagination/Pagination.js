import React, { useState, useEffect } from "react";
import './Pagination.css'

const Pagination = ({ products, updateProduct }) => {
  // const products = useSelector((state) => state.productReducer.products);
  const [currpage, setCurrPage] = useState(1);
  const productPerPage = 12;
  const totalProducts = products.length;
  const totalPaginationPages = Math.ceil(totalProducts / productPerPage);

  const renderPage = () => {
    let pageNo = [];
    for (let i = 1; i <= totalPaginationPages; i++) {
      pageNo.push(
        <button className="pagination-btn" key={i} onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }
    return pageNo;
  };

  useEffect(() => {
    const indexOfLastProduct = currpage * productPerPage;
    const indexOfFirstPage = indexOfLastProduct - productPerPage;
    const paginatedProducts = products.slice(
      indexOfFirstPage,
      indexOfLastProduct
    );

    updateProduct(paginatedProducts);
  }, [currpage, products, productPerPage, updateProduct]);

  const handlePageChange = (pageNum) => {
    setCurrPage(pageNum);
  };

  return <div>{renderPage()}</div>;
};

export default Pagination;
