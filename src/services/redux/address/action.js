import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateRequest } from '../../../requestMethods';

export const getAllAddresses =createAsyncThunk(
    "GET_ALL_SAVED_ADDRESS",
    async (userId) => {
  try {
    const response = await privateRequest.get(`address/getAllAddress?userid=${userId}`);
    return response.data;
  } catch (error) {
    // Handle the error here (e.g., log it or throw a custom error)
    console.log(error);
    throw error;
  }
});

export const getAddressById =createAsyncThunk("GET_ADDRESS_BY_ID",async (addressId) => {
  try {
    const response = await privateRequest.get(`address/getAddressById/${addressId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const saveOrUpdateAddress =createAsyncThunk("SAVE_OR_UPDATE_ADDRESS",async (addressDto) => {
    console.log(addressDto);
  try {
    const response = await privateRequest.post(`address/saveAndUpdateAddress`, addressDto);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const deleteAddress =createAsyncThunk("DELETE_ADDRESS",async (addressId) => {
  try {
    const response = await privateRequest.delete(`address/deleteAddress/${addressId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
