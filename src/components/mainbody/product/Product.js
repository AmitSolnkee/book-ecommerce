import React, { useCallback, useState } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../pagination/Pagination";
import { addToCart } from "../../../redux/slices/cartslice/cartSlice";

const Product = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const [paginatedProducts, setpaginatedProducts] = useState([]);

  const onProductUpdate = useCallback(
    (products) => {
      setpaginatedProducts(products);
    },
    [setpaginatedProducts]
  );

  const addToCarthandler = (product) => {
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
  };
  return (
    <div className="product-container">
      <div className="row">
        {paginatedProducts.map((product) => {
          return (
            <div className="col-md-6 col-xl-4 col-xxl-3  ">
              <div className="product-cart p-4 pb-3 m-3 mt-0 text-center">
                <img
                  className="custom-product-img img-fluid "
                  src={product?.volumeInfo?.imageLinks?.thumbnail}
                  alt="product-cover"
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
        <Pagination products={products} updateProduct={onProductUpdate} />
      </div>
    </div>
  );
};

export default Product;
