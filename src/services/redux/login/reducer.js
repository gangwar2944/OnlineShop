import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./action";
import { STATUS } from "../../general/constant";

const initialState = {
  userDataState: {
    userData: {},
    status: "",
  },
};
export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logout: (state) => {
      state.userDataState.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.userDataState.status = STATUS.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userDataState.status = STATUS.IDLE;
        state.userDataState.userData = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.userDataState.status = STATUS.FAILED;
      });
  },
});
export const {logout} = userSlice.actions;
export default userSlice.reducer;
