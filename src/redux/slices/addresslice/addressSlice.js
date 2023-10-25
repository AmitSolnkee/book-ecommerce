import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: [],
};

const addressSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      if (state.address.length < 3) {
        state.address.push(action.payload);
        localStorage.setItem("address", JSON.stringify(state.address));
      } else {
        alert("You can only add up to 3 address");
      }
    },

    fetchedStatefromLocalStorage: (state, action) => {
      const storedAddress = localStorage.getItem("address");
      const parsedData = storedAddress ? JSON.parse(storedAddress) : [];
      state.address = parsedData;
    },
    deleteAddress: (state, action) => {
      const updatedAddesslist = state.address.filter(
        (item) => item.id !== action.payload
      );
      state.address = updatedAddesslist;
      localStorage.setItem("address", JSON.stringify(state.address));
    },
  },
});

export const { addAddress, fetchedStatefromLocalStorage, deleteAddress } =
  addressSlice.actions;
export default addressSlice.reducer;
