import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productslice/productSlice";
import cartSlice from "../slices/cartslice/cartSlice";

export const store = configureStore({
  reducer: {
    productReducer: productSlice,
    cartReducer : cartSlice
  },
});
