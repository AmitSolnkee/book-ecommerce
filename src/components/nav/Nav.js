import React, { useEffect ,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFromLocalStorage } from "../../redux/slices/cartslice/cartSlice";
import "./Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cartItems);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);
  return (
    <div className="nav-container ">
      <div className="nav-top p-2 text-center bg-dark text-white">
        <span>Free shipping on order above 500</span>
      </div>
      <div className="nav-bar p-3">
        <div className="row align-items-center justify-content-between">
          <div
            className="col-3 col-md-3 fs-5 fs-lg-3"
            onClick={() => navigate("/")}
          >
            bootStore
          </div>
          <div className="col-7 col-md-6 px-0 py-2 search-inp-container d-flex ">
            <input className="p-2" type="text" placeholder="Search ..." />
            <div className="p-2">
              <i className="fa fa-search fa-lg" aria-hidden="true"></i>
            </div>
          </div>
          <div className=" col-3 col-md-3 gap-4 nav-rest d-none d-md-flex align-items-center justify-content-center">
            <div className="fs-5 fs-lg-3 account">Account</div>
            <div
              className="ms-lg-5 mr-2 position-relative"
              onClick={() => navigate("/cart")}
            >
              <i className="fa-solid fa-lg fa-cart-shopping"></i>
              <div className="cart-item">{cart.length}</div>
            </div>
            <div>
              <i className="fa-solid fa-lg fa-user"></i>
            </div>
          </div>
          <div className="hamburger-menu col-2 d-md-none ">
            <div className="" onClick={toggleDropdown}>
              <i className="fa-solid fa-bars fa-2x fa-beat"></i>
            </div>

            {isDropdownOpen && (
              <div className="dropdown-menu text-center">
                <div className="dropdown-item">Account</div>
                <div className="dropdown-item" onClick={()=>navigate('/cart')}>Cart</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
