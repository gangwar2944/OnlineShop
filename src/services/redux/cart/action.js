import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateRequest } from '../../../requestMethods';

export const getAllCarts =createAsyncThunk("GET_ALL_CARTS_PRODUCT", async () => {
  try {
    const response = await privateRequest.get(`getAll`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getCartDataByUserId =createAsyncThunk("GET_CART_DATA_BY_USERID",async (userId) => {
  try {
    const response = await privateRequest.get(`getAllCart/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getByIdCarts =createAsyncThunk("GET_BY_ID_CARTS",async (id) => {
  try {
    const response = await privateRequest.get(`getAll/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const saveCart =createAsyncThunk("SAVE_CART", async (cartDto) => {
  try {
      const response = await privateRequest.post(`saveCart`, cartDto);
      return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const deleteCart =createAsyncThunk("DELETE_CART", async (id) => {
  try {
    const response = await privateRequest.delete(`deleteCart/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
