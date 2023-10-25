import React from "react";
import "./ViewProduct.css";
import { useLocation } from "react-router-dom";

const ViewProduct = () => {
  const location = useLocation();
  const product = location.state;
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 p-5 pt-0">
          <img
            className="img-fluid mx-auto d-block "
            width={"100%"}
            alt="product-img"
            src={product?.volumeInfo?.imageLinks?.thumbnail}
            style={{ border: "2px solid grey" }}
          />
        </div>
        <div className="col-md-8 ps-4 mb-2" style={{ borderLeft: "1px solid grey" }}>
          <h3>{product?.volumeInfo?.title}</h3>

          <div className=" mb-2 d-flex align-items-center">
            <div className="px-2 py-1 me-2 bg-success text-white rounded-3">
              <span className="fw-bold me-2">4.2</span>
              <i className="fa fa-star fa-lg"></i>
            </div>
            <div>
              <h6 className="mb-0 text-secondary">
                6199 Ratings and 519 reviews
              </h6>
            </div>
          </div>

          <div className="mb-2">
            <h4>Special Price</h4>
            <hr />
            <h5>
              ₹{" "}
              {product?.saleInfo?.retailPrice?.amount
                ? product?.saleInfo?.retailPrice?.amount
                : "Free"}
            </h5>
          </div>

          <div className="discount-offers mb-3">
            <h4>Available offers</h4>
            <hr />
            <h6>
              <i className="fa-solid fa-tag fa-xl text-success me-3 align-middle"></i>
              Special PriceGet extra 17% off (price inclusive of
              cashback/coupon)
            </h6>
            <h6>
              <i className="fa-solid fa-tag fa-xl text-success me-3 align-middle"></i>
              Bank Offer10% off on Kotak Bank Credit Card, up to ₹1250 on orders
              of ₹5,000 and above
            </h6>
            <h6>
              <i className="fa-solid fa-tag fa-xl text-success me-3 align-middle"></i>
              Bank Offer10% off on RBL Bank Credit Card, up to ₹1250 on orders
              of ₹5,000 and above
            </h6>
            <h6>
              <i className="fa-solid fa-tag fa-xl text-success me-3 align-middle"></i>
              Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of
              ₹5,000 and aboveT&C
            </h6>
          </div>

          <div className="mb-2">
            <h4>Preview</h4><hr/>
            <h6>
              <a
                href={
                  product?.volumeInfo?.previewLink
                    ? product?.volumeInfo?.previewLink
                    : "Preview Not available"
                }
              >
                Click here to preview
              </a>
            </h6>
          </div>

          <div className="mb-2">
            <h4>Description</h4>
            <hr />
            <div className="row">
              <div className="col-md-2">
                <img
                  className="img-thumbnail"
                  alt="img"
                  src={product?.volumeInfo?.imageLinks?.smallThumbnail}
                />
              </div>
              <div className="col-md-10" style={{ textAlign: "justify" }}>
                {product?.volumeInfo?.description}
              </div>
            </div>
            <p></p>
          </div>

          <div className="mb-2">
            <table class="table">
              <thead>
                <tr style={{ borderBottom: "1px solid grey" }}>
                  <th>
                    <h4>Specifications</h4>
                  </th>
                  <hr />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Book</td>
                  <td>{product?.volumeInfo?.title}</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>{product?.volumeInfo?.authors}</td>
                </tr>
                <tr>
                  <td>Binding</td>
                  <td>Paper back</td>
                </tr>
                <tr>
                  <td>Publisher</td>
                  <td>{product?.volumeInfo?.publisher}</td>
                </tr>
                <tr>
                  <td>Publishing Date</td>
                  <td>{product?.volumeInfo?.publishedDate}</td>
                </tr>
                <tr>
                  <td>Number of pages</td>
                  <td>{product?.volumeInfo?.pageCount}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{product?.volumeInfo?.language}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
