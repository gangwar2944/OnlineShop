import { privateRequest } from '../requestMethods';

export const getAllCarts = async () => {
  try {
    const response = await privateRequest.get(`getAll`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCartDataByUserId = async (userId) => {
  try {
    const response = await privateRequest.get(`getAllCart/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getByIdCarts = async (id) => {
  try {
    const response = await privateRequest.get(`getAll/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const saveCart = async (cartDto) => {
  try {
      const response = await privateRequest.post(`saveCart`, cartDto);
      return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteCart = async (id) => {
  try {
    const response = await privateRequest.delete(`deleteCart/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
