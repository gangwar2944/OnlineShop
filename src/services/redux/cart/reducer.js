import { createSlice } from "@reduxjs/toolkit";
import { getAllCarts, getCartDataByUserId, getByIdCarts, saveCart, deleteCart } from "./action";
import { STATUS } from "../../general/constant";

const initialState = {
  cartDataState: {
    carts: [],
    quantity: 0,
    status: "",
  },
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state,action){
        state.cartDataState.carts.push(action.payload);
        state.cartDataState.quantity = state.cartDataState.carts.length;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarts.pending, (state) => {
        state.cartDataState.status = STATUS.LOADING;
      })
      .addCase(getAllCarts.fulfilled, (state, action) => {
        state.cartDataState.status = STATUS.IDLE;
        state.cartDataState.carts = action.payload;
      })
      .addCase(getAllCarts.rejected, (state) => {
        state.cartDataState.status = STATUS.FAILED;
      })

      .addCase(getCartDataByUserId.pending, (state) => {
        state.cartDataState.status = STATUS.LOADING;
      })
      .addCase(getCartDataByUserId.fulfilled, (state, action) => {
        state.cartDataState.status = STATUS.IDLE;
        state.cartDataState.cart = action.payload;
      })
      .addCase(getCartDataByUserId.rejected, (state) => {
        state.cartDataState.status = STATUS.FAILED;
      })

      .addCase(getByIdCarts.pending, (state) => {
        state.cartDataState.status = STATUS.LOADING;
      })
      .addCase(getByIdCarts.fulfilled, (state, action) => {
        state.cartDataState.status = STATUS.IDLE;
        state.cartDataState.cart = action.payload;
      })
      .addCase(getByIdCarts.rejected, (state) => {
        state.cartDataState.status = STATUS.FAILED;
      })

      .addCase(saveCart.pending, (state) => {
        state.cartDataState.status = STATUS.LOADING;
      })
      .addCase(saveCart.fulfilled, (state, action) => {
        state.cartDataState.status = STATUS.IDLE;
        state.cartDataState.cart = action.payload;
      })
      .addCase(saveCart.rejected, (state) => {
        state.cartDataState.status = STATUS.FAILED;
      })

      .addCase(deleteCart.pending, (state) => {
        state.cartDataState.status = STATUS.LOADING;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.cartDataState.status = STATUS.IDLE;
        state.cartDataState.carts = state.cartDataState.carts.filter(cart => cart.id !== action.payload.id);
      })
      .addCase(deleteCart.rejected, (state) => {
        state.cartDataState.status = STATUS.FAILED;
      });
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
