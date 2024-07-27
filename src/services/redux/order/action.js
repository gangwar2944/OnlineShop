import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateRequest } from '../../../requestMethods';

// Define the base URL (make sure to set this variable appropriately)
const BASE_URL = 'http://localhost:5000/api'; // Replace with your actual base URL

export const getAllOrders = createAsyncThunk('GET_ALL_ORDERS', async () => {
  try {
    const response = await privateRequest.get(`${BASE_URL}/order/getAll`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
});

export const getOrderById = createAsyncThunk('GET_ORDER_BY_ID', async (orderId) => {
  try {
    const response = await privateRequest.get(`${BASE_URL}/order/getAll/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    throw error;
  }
});

export const saveOrder = createAsyncThunk('SAVE_ORDER', async (orderDto) => {
  try {
    const response = await privateRequest.post(`${BASE_URL}/order/saveOrder`, orderDto);
    return response.data;
  } catch (error) {
    console.error('Error saving order:', error);
    throw error;
  }
});

export const deleteOrder = createAsyncThunk('DELETE_ORDER', async (orderId) => {
  try {
    const response = await privateRequest.delete(`${BASE_URL}/order/deleteOrder/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting order by ID:', error);
    throw error;
  }
});
