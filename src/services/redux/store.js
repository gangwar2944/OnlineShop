import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import userReducer from "./login/reducer";
import addressReducer from "./address/reducer";
import productReducer from "./product/reducer"
import orderReducer from "./order/reducer"
import { useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  address: addressReducer,
  product:productReducer,
  order:orderReducer,
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const store = configureStore({
  reducer: rootReducer,
});

