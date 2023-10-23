import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
  products: [],
  categories: [],
  status: "",
  err: "",
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;

      const categories = action.payload
        .map((el) => el?.volumeInfo?.categories)
        .filter(Boolean)
        .flat();
      const category = categories.filter(
        (el, idx) => categories.indexOf(el) === idx
      );

      state.categories = category;
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.err = action.error.message;
    },
  },
});

export default productSlice.reducer;
