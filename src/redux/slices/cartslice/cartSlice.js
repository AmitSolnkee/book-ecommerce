import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
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
  },
});
export const { addToCart, loadCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
