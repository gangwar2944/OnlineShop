import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateRequest} from "../../../requestMethods";

export const getAllProduct = createAsyncThunk("GET_ALL_PRODUCT", async (cat) => {
  const response = await privateRequest.get(
    cat ? `/product/getAll?catId=${cat}` : "/product/getAll?catId=0"
  );
  const result = response.data;
  return result;
});

export const getAllCategory = createAsyncThunk("GET_ALL_CATEGORY", async () => {
  const  response = await privateRequest.get('/category/getAll');
  const result = response.data;
  return result;
});

export const getProductById = createAsyncThunk(
  "GET_PRODUCT_BY_ID",
  async (id) => {
    const res = await privateRequest.get(`/product/getProduct/${id}`);
    return res.data;
  }
);
