import React, { useEffect } from "react";
import { loadOrderFromlocalStorage } from "../../redux/slices/cartslice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const ViewOrder = () => {
  const orders = useSelector((state) => state.cartReducer.orderHist);
  console.log("order", orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrderFromlocalStorage());
  }, [dispatch]);
  return (
    <div className="container">
      <h1>Thanks for order</h1>
      <h3>View Order History</h3>
      {orders.map((order) => {
        return (
          <div className="d-flex p-5  border justify-content-between">
            <h3>Quntity:{order.qty}</h3>
            <h3>Total Amount :{order.totalAmount}</h3>
            <h3>Products:{order?.products.map((el) => el)}</h3>
            <h3>Order Status:{order.processed}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ViewOrder;
