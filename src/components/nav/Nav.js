import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-container ">
      <div className="nav-top p-2 text-center bg-dark text-white">
        <span>Free shipping on order above 500</span>
      </div>
      <div className="nav-bar p-3">
        <div className="row align-items-center justify-content-between">
          <div className="col-3 col-md-3 fs-5 fs-lg-3">bootStore</div>
          <div className="col-7 col-md-6 px-0 py-2 search-inp-container d-flex ">
            <input className="p-2" type="text" placeholder="Search ..."/>
            <div className="p-2">
              <i class="fa fa-search fa-lg" aria-hidden="true"></i>
            </div>
          </div>
          <div className=" col-3 col-md-3 gap-4 nav-rest d-none d-md-flex align-items-center justify-content-center">
            <div className="fs-5 fs-lg-3 account">Account</div>
            <div className="ms-lg-5 mr-2">
              <i class="fa-solid fa-lg fa-cart-shopping"></i>
            </div>
            <div>
              <i class="fa-solid fa-lg fa-user"></i>
            </div>
          </div>
          <div className="hamburger-menu col-2 d-md-none text-end">
            <i class="fa-solid fa-bars fa-2x fa-beat"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
