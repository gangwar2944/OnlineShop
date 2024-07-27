import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders, getOrderById, saveOrder, deleteOrder } from "./action"; // Update the path if necessary
import { STATUS } from "../../general/constant"; // Update the path if necessary

const initialState = {
  orderDataState: {
    orders: [],
    order: null,
    status: "",
  },
};

export const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orderDataState.orders.push(action.payload);
    },
    updateOrder(state, action) {
      const index = state.orderDataState.orders.findIndex(order => order.id === action.payload.id);
      if (index !== -1) {
        state.orderDataState.orders[index] = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.orderDataState.status = STATUS.LOADING;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.orderDataState.status = STATUS.IDLE;
        state.orderDataState.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state) => {
        state.orderDataState.status = STATUS.FAILED;
      })

      .addCase(getOrderById.pending, (state) => {
        state.orderDataState.status = STATUS.LOADING;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.orderDataState.status = STATUS.IDLE;
        state.orderDataState.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state) => {
        state.orderDataState.status = STATUS.FAILED;
      })

      .addCase(saveOrder.pending, (state) => {
        state.orderDataState.status = STATUS.LOADING;
      })
      .addCase(saveOrder.fulfilled, (state, action) => {
        state.orderDataState.status = STATUS.IDLE;
        state.orderDataState.orders.push(action.payload);
      })
      .addCase(saveOrder.rejected, (state) => {
        state.orderDataState.status = STATUS.FAILED;
      })

      .addCase(deleteOrder.pending, (state) => {
        state.orderDataState.status = STATUS.LOADING;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orderDataState.status = STATUS.IDLE;
        state.orderDataState.orders = state.orderDataState.orders.filter(order => order.id !== action.payload.id);
      })
      .addCase(deleteOrder.rejected, (state) => {
        state.orderDataState.status = STATUS.FAILED;
      });
  },
});

export const { addOrder, updateOrder } = orderSlice.actions;

export default orderSlice.reducer;
