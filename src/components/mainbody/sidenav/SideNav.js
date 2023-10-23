import React from "react";
import "./Sidenav.css";
import { useSelector } from "react-redux";

const SideNav = () => {
  const categories = useSelector((state) => state.productReducer.categories);
  const priceRange = [
    "₹100 - ₹240",
    "₹240 - ₹380",
    "₹380 - ₹520",
    "₹520 - ₹660",
    "₹660 - ₹800",
    "Above ₹800",
  ];
  return (
    <div className="side-nav-container">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Categories
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                {categories.map((category, id) => {
                  return <li key={id}>{category}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Price
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div class="filter-checkbox-wrapper">
                {priceRange.map((price, id) => {
                  return (
                    <label key={id} className="checkbox-container mb-3 d-block">
                      <input
                        type="checkbox"
                        value={price}
                        name="price_ranges"
                      />
                      <span className="checkbox-text ms-4">{price}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
