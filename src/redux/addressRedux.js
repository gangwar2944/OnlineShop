import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState :{
    currentAddress:null
  },
  reducers: {
    addAddress: (state, action) => {
      const newAddress = action.payload;
      state.currentAddress= newAddress; // Add the new address to the state
    },
    deleteAddress: (state, action) => {
      state.currentAddress = null// Delete the address by ID
    },
  },
});

export const { addAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
