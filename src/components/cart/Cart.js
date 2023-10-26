import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCartFromLocalStorage,
  removeFromCart,
  addToCart,
  orderHistory,
  loadOrderFromlocalStorage,
} from "../../redux/slices/cartslice/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

  const placeOrder = () => {
    dispatch(orderHistory(cartItems));
    dispatch(loadCartFromLocalStorage())
    dispatch(loadOrderFromlocalStorage())
    navigate("/address");
  };
  return (
    <div className="cart-container text-start">
      <table className="table container ">
        <thead>
          <tr>
            <th colSpan={3}>Image</th>
            <th colSpan={5}>Description</th>
            <th colSpan={2}>Qty</th>
            <th colSpan={2}>Total</th>
          </tr>
        </thead>
        <tbody className="p-5">
          {cartItems.map((item, index) => (
            <tr key={index} className="mt-5">
              <td colSpan={2}>
                <img
                  src={item.image}
                  alt={item.description}
                  className="cart-item-image"
                />
              </td>
              <td colSpan={4}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.authors}</p>
                </div>
              </td>
              <td colSpan={2}>{item.qty}</td>
              <td colSpan={2}>
                ₹{" "}
                {item.price ? (
                  (item.qty * item.price).toFixed(2)
                ) : (
                  <span>
                    <span
                      className="me-2"
                      style={{ textDecoration: "line-through" }}
                    >
                      789
                    </span>
                    Free
                  </span>
                )}
              </td>
              <td colSpan={2} className="d-flex">
                <div className="d-flex me-5">
                  <i
                    className="me-3 fa-solid fa-plus "
                    onClick={() => dispatch(addToCart(item))}
                  ></i>
                  <i
                    className="fa-solid fa-minus "
                    onClick={() =>
                      dispatch(removeFromCart({ id: item.id, qty: item.qty }))
                    }
                  ></i>
                </div>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => {
                    dispatch(removeFromCart({ id: item.id, qty: item.qty }));
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container float-end">
        <h2>Summary</h2>
        <div
          style={
            cartItems.length > 0 ? { display: "block" } : { display: "none" }
          }
        >
          Total : ₹
          {cartItems
            .reduce((acc, item) => {
              if (item?.price) {
                return (acc = acc + item.price * item.qty);
              }
              return acc;
            }, 0)
            .toFixed(2)}
          <button className="btn btn-success ms-5 w-25" onClick={placeOrder}>
            {" "}
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
