import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("productReducer", async () => {
  const response = await axios.get(
    "https://d1krvzwx5oquy1.cloudfront.net/books.json"
  );
  const products = await response.data;
  return products;
});
