import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "./action";
import { STATUS } from "../../general/constant";

const initialState = {
  productDataState: {
    productDataList: [],
    status: "",
  },
};
export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    update(state) {
      state.productDataState.productDataList = [];
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllProduct.pending, (state) => {
      state.productDataState.status = STATUS.LOADING;
    })
    .addCase(getAllProduct.fulfilled, (state,action) => {
      state.productDataState.status = STATUS.IDLE;
      state.productDataState.productDataList = action.payload;
    })
    .addCase(getAllProduct.rejected, (state) => {
      state.productDataState.status = STATUS.FAILED;
    });
  },
});
export const { update } = productSlice.actions;
export default productSlice.reducer;
