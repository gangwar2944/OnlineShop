import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import userReducer from "./login/reducer";
import addressReducer from "./address/reducer";
import { useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  address: addressReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const store = configureStore({
  reducer: rootReducer,
});

