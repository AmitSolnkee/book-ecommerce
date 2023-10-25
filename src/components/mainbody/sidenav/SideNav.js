import React, { useState } from "react";
import "./Sidenav.css";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByCategories,
  sortByPriceRange,
} from "../../../redux/slices/productslice/productSlice";

const SideNav = () => {
  const categories = useSelector((state) => state.productReducer.categories);
  const products = useSelector((state) => state?.productReducer?.products);
  const dispatch = useDispatch();
  console.log('products',products)
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const priceRange = [
    { id: 1, min: 100, max: 240 },
    { id: 2, min: 240, max: 380 },
    { id: 3, min: 380, max: 800 },
    { id: 4, min: 800, max: 1900 },
    { id: 15, min: 1900, max: 4800 },
  ];
  const handleCheckboxChange = (price) => {
    const { min, max } = price;
    if (checkedItems.includes(price.id)) {
      setCheckedItems(checkedItems.filter((item) => item !== price.id));
    } else {
      setCheckedItems([price.id]);
    }
    dispatch(sortByPriceRange({ min, max }));
  };

  const categoriesFilterHandler = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    dispatch(sortByCategories(category));
  };
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
                  const isSelected = selectedCategory === category;
                  const liStyle = {
                    backgroundColor: isSelected ? "lightblue" : "white",
                    cursor: "pointer",
                  };
                  return (
                    <li
                      key={id}
                      style={liStyle}
                      onClick={() => {
                        categoriesFilterHandler(category);
                      }}
                    >
                      {category}
                    </li>
                  );
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
              <div className="filter-checkbox-wrapper">
                {priceRange.map((item, id) => {
                  return (
                    <label key={id} className="checkbox-container mb-3 d-block">
                      <input
                        type="checkbox"
                        value={item.label}
                        name={`checkbox_${item.id}`}
                        checked={checkedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item)}
                      />
                      <span className="checkbox-text ms-4">{`₹${item.min} - ₹${item.max}`}</span>
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
