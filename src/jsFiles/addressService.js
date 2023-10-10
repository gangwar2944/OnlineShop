import { privateRequest } from '../requestMethods';

export const getAllAddresses = async (userId) => {
  try {
    const response = await privateRequest.get(`address/getAllAddress?userid=${userId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    // Handle the error here (e.g., log it or throw a custom error)
    console.log(error);
    throw error;
  }
};

export const getAddressById = async (addressId) => {
  try {
    const response = await privateRequest.get(`address/getAddressById/${addressId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const saveOrUpdateAddress = async (addressDto) => {
    console.log(addressDto);
  try {
    const response = await privateRequest.post(`address/saveAndUpdateAddress`, addressDto);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteAddress = async (addressId) => {
  try {
    const response = await privateRequest.delete(`address/deleteAddress/${addressId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
