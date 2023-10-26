import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductCarousal.css";
import { getProducts } from "../../../redux/slices/productslice/productAction";
const ProductCarousel = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 2500, min: 1500 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1500, min: 1100 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    minitablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container-fluid p-2 mt-4 text-center ">
      <h2 className="mt-5 mb-4 d-inline">Explore Top rated books</h2>
      <p className="d-none d-md-inline  float-end fs-4">View all</p>

      <Carousel
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
      >
        {products.map((product) => {
          return (
            <div key={product.id}>
              <div className="img-carosal-card m-4 text-center">
                <img
                  className="img-fluid"
                  alt="img-thumnail"
                  src={product?.volumeInfo?.imageLinks?.thumbnail}
                />
              </div>
              <button className="btn btn-dark mt-4 text-center">View</button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
