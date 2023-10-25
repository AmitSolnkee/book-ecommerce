import React from "react";
import SideNav from "../sidenav/SideNav";
import Product from "../product/Product";
import ProductCarousel from "../productCarousel/ProductCarousel";
const Main = () => {
  return (
    <div className="container-fluid">
      <div>
        <ProductCarousel />
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <SideNav />
        </div>
        <div className="col-md-8 col-lg-9">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Main;
