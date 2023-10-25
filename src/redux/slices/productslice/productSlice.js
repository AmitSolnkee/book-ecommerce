import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
  products: [],
  filteredProds: [],
  categories: [],
  status: "",
  err: "",
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    sortproducts: (state, action) => {
      const compareFunct = (a, b) => {
        const compareA = a?.saleInfo?.retailPrice?.amount || Infinity;
        const compareB = b?.saleInfo?.retailPrice?.amount || Infinity;

        if (action.payload === 1) {
          return compareA - compareB;
        } else if (action.payload === 2) {
          return compareB - compareA;
        } else {
          return 0;
        }
      };

      let arr = [...state.products];

      if (compareFunct() !== 0) {
        const filteredProduct = arr
          .sort(compareFunct)
          .filter((product) => product.saleInfo?.retailPrice?.amount);
        state.filteredProds = filteredProduct;
      } else {
        state.filteredProds = state.products;
      }
    },

    sortByCategories: (state, action) => {
      const filteredData = state.products.filter((elem) => {
        const categories = elem?.volumeInfo?.categories;
        if (categories && Array.isArray(categories)) {
          return categories.find((el) => el === action.payload);
        } else {
          return false;
        }
      });
      state.filteredProds = filteredData;
    },

    sortByPriceRange: (state, action) => {
      const { min, max } = action.payload;
      const filteredData = state.products.filter((el) => {
        if (el?.saleInfo?.retailPrice?.amount) {
          return (
            el.saleInfo.retailPrice.amount > min &&
            el.saleInfo.retailPrice.amount < max
          );
        } else {
          console.log("false el.saleInfo", el.saleInfo);
          return false;
        }
      });

      state.filteredProds = filteredData;
    },
  },
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
export const { sortproducts, sortByCategories, sortByPriceRange } =
  productSlice.actions;
export default productSlice.reducer;
