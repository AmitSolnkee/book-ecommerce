import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productslice/productSlice";
import cartSlice from "../slices/cartslice/cartSlice";
import addressSlice from "../slices/addresslice/addressSlice";
// import filterSlice from "../slices/filterslice/filterSlice";

export const store = configureStore({
  reducer: {
    productReducer: productSlice,
    cartReducer: cartSlice,
    addressReducer: addressSlice,
   
  },
});
