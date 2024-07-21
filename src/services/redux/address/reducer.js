import { createSlice } from "@reduxjs/toolkit";
import { getAllAddresses, getAddressById, saveOrUpdateAddress, deleteAddress } from "./action";
import { STATUS } from "../../general/constant";

const initialState = {
  addressDataState: {
    addresses: [],
    address: null,
    status: "",
  },
};

export const addressSlice = createSlice({
  name: "Address",
  initialState,
  reducers: {
    addAddress:(state,action)=>{

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAddresses.pending, (state) => {
        state.addressDataState.status = STATUS.LOADING;
      })
      .addCase(getAllAddresses.fulfilled, (state, action) => {
        state.addressDataState.status = STATUS.IDLE;
        state.addressDataState.addresses = action.payload;
      })
      .addCase(getAllAddresses.rejected, (state) => {
        state.addressDataState.status = STATUS.FAILED;
      })

      .addCase(getAddressById.pending, (state) => {
        state.addressDataState.status = STATUS.LOADING;
      })
      .addCase(getAddressById.fulfilled, (state, action) => {
        state.addressDataState.status = STATUS.IDLE;
        state.addressDataState.address = action.payload;
      })
      .addCase(getAddressById.rejected, (state) => {
        state.addressDataState.status = STATUS.FAILED;
      })

      .addCase(saveOrUpdateAddress.pending, (state) => {
        state.addressDataState.status = STATUS.LOADING;
      })
      .addCase(saveOrUpdateAddress.fulfilled, (state, action) => {
        state.addressDataState.status = STATUS.IDLE;
        // Update the addresses list or the single address based on your logic
        const updatedAddress = action.payload;
        const index = state.addressDataState.addresses.findIndex(addr => addr.id === updatedAddress.id);
        if (index !== -1) {
          state.addressDataState.addresses[index] = updatedAddress;
        } else {
          state.addressDataState.addresses.push(updatedAddress);
        }
      })
      .addCase(saveOrUpdateAddress.rejected, (state) => {
        state.addressDataState.status = STATUS.FAILED;
      })

      .addCase(deleteAddress.pending, (state) => {
        state.addressDataState.status = STATUS.LOADING;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.addressDataState.status = STATUS.IDLE;
        state.addressDataState.addresses = state.addressDataState.addresses.filter(address => address.id !== action.payload.id);
      })
      .addCase(deleteAddress.rejected, (state) => {
        state.addressDataState.status = STATUS.FAILED;
      });
  },
});
export const {updatedAddress} = addressSlice.actions;
export default addressSlice.reducer;
