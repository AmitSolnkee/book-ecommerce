import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFromLocalStorage } from "../../redux/slices/cartslice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, []);

  //   console.log("cartItems", cartItems);
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
              <td colSpan={3}>
                <img
                  src={item.image}
                  alt={item.description}
                  className="cart-item-image"
                />
              </td>
              <td colSpan={5}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.authors}</p>
                </div>
              </td>
              <td colSpan={2}>{item.qty}</td>
              <td colSpan={2}>${(item.qty * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
