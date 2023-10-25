import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  orderHist: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existProductIndex = state.cartItems.findIndex(
        (el) => el.id === action.payload.id
      );

      if (existProductIndex !== -1) {
        state.cartItems[existProductIndex].qty++;
      } else {
        state.cartItems.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    loadCartFromLocalStorage: (state) => {
      const storedCart = localStorage.getItem("cart");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      state.cartItems = parsedCart;
    },
    removeFromCart: (state, action) => {
      const { id, qty } = action.payload;
      const findIndexOfElm = state.cartItems.findIndex((el) => el.id === id);

      if (findIndexOfElm !== -1) {
        if (qty > 1) {
          const updatedCart = [...state.cartItems];
          updatedCart[findIndexOfElm] = {
            ...updatedCart[findIndexOfElm],
            qty: updatedCart[findIndexOfElm].qty - 1,
          };
          state.cartItems = updatedCart;
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
        } else {
          const updatedCart = state.cartItems.filter((el) => el.id !== id);
          state.cartItems = updatedCart;
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
      }
    },

    orderHistory: (state, action) => {
      const cart = action.payload;
      const data = {};

      data.qty = cart.length;
      data.products = cart.map((el) => el.title);
      data.totalAmount = cart.reduce((acc, el) => {
        if (el?.price) {
          return (acc = acc + el.price * el.qty);
        }
        return acc;
      }, 0);
      data.processed = "Order Delivered";
      state.orderHist.push(data);
      localStorage.setItem("orders", JSON.stringify(state.orderHist));
      localStorage.removeItem("cart");
    },

    loadOrderFromlocalStorage : (state)=>{
      const storedCart = localStorage.getItem("orders");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      state.orderHist = parsedCart;
    }
  },
});
export const {
  addToCart,
  loadCartFromLocalStorage,
  removeFromCart,
  orderHistory,
  loadOrderFromlocalStorage
} = cartSlice.actions;
export default cartSlice.reducer;
