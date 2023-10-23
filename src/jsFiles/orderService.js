import axios from 'axios';
import { privateRequest } from '../requestMethods';

// Function to get all orders
const getAllOrders = async () => {
  try {
    const response = await privateRequest.get(`order/getAll`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Function to get order by ID
const getOrderById = async (orderId) => {
  try {
    const response = await privateRequest.get(`${BASE_URL}/order/getAll/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    throw error;
  }
};

// Function to save a new order
const saveOrder = async (orderDto) => {
  try {
    const response = await privateRequest.post(`${BASE_URL}/order/saveOrder`, orderDto);
    return response.data;
  } catch (error) {
    console.error('Error saving order:', error);
    throw error;
  }
};

// Function to delete an order by ID
const deleteOrder = async (orderId) => {
  try {
    const response = await privateRequest.delete(`${BASE_URL}/order/deleteOrder/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting order by ID:', error);
    throw error;
  }
};

export { getAllOrders, getOrderById, updateOrder, saveOrder, deleteOrder };
