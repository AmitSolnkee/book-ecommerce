import React, { useState, useEffect } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cartslice/cartSlice";
import { useNavigate } from "react-router-dom";
import { sortproducts } from "../../../redux/slices/productslice/productSlice";
const Product = () => {
  const products = useSelector((state) => state?.productReducer?.products);
  const filteredProds = useSelector(
    (state) => state.productReducer.filteredProds
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showData, setShowData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 
 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = showData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Update showData based on the condition
    if (filteredProds.length > 0) {
      setShowData(filteredProds);
    } else {
      setShowData(products);
    }
  }, [filteredProds, products]); 

  const addToCarthandler = (product) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const payload = {
      id: product?.id,
      image: product?.volumeInfo?.imageLinks?.thumbnail,
      title: product?.volumeInfo?.title,
      price: product?.saleInfo?.retailPrice?.amount,
      authors: product?.volumeInfo?.authors,
      language: product?.volumeInfo?.language,
      qty: 1,
    };
    dispatch(addToCart(payload));

    setIsLoading(false);
  };
  const viewProduct = (product) => {
    navigate("/product", { state: product });
  };

  const sortItems = ["TopRated", "Price:Low to High", "Price:High to Low"];

  const selectSortBy = (id) => {
    if (sortBy === id) {
      setSortBy(null);
    } else {
      setSortBy(id);
    }
    dispatch(sortproducts(id));
  };
  return (
    <div className="product-container">
      <div className=" sort-container px-4 d-flex align-items-center">
        <span className="fs-6 me-1 fw-bold">Sort:</span>
        {sortItems.map((el, id) => {
          const isSelected = sortBy === id;
          const styleSpan = {
            backgroundColor: isSelected ? "lightblue" : "white",
            cursor: "pointer",
          };
          return (
            <span
              className=" sortBy fw-semibold me-1"
              style={styleSpan}
              onClick={() => selectSortBy(id)}
              name={el}
            >
              {el}
            </span>
          );
        })}
      </div>
      <hr />
      <div className="row">
        {currentItems.map((product) => {
          return (
            <div key={product.id} className="col-md-6 col-xl-4 col-xxl-3  ">
              <div className="product-cart p-4 pb-3 m-3 mt-0 text-center">
                <img
                  className="custom-product-img img-fluid "
                  src={product?.volumeInfo?.imageLinks?.thumbnail}
                  alt="product-cover"
                  onClick={() => viewProduct(product)}
                />
                <div className="mt-3 text-start">
                  <h6 className="product-title mb-1">
                    {product?.volumeInfo?.title}
                  </h6>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "yellow" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "yellow" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "yellow" }}
                    ></i>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "gold" }}
                    ></i>
                  </div>
                  <h5 className="">
                    {product?.saleInfo?.retailPrice?.amount
                      ? `₹ ${product?.saleInfo?.retailPrice?.amount}`
                      : "NOT FOR SALE"}
                  </h5>
                  <div
                    className="add-cart p-2 text-center"
                    onClick={() => {
                      addToCarthandler(product);
                    }}
                  >
                    <span>Add to cart</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-center ">
        <div className="pagination d-flex justify-content-center mt-4">
          {Array.from(
            { length: Math.ceil(showData.length / itemsPerPage) },
            (_, index) => (
              <span
                key={index}
                onClick={() => paginate(index + 1)}
                className={`pagination-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                {index + 1}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
