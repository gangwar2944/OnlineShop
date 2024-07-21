import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../../../requestMethods";

export const loginUser= createAsyncThunk(
    "USER_LOGIN",
    async(userData)=>{
        const response = await publicRequest.post("/auth/authenticate", userData);
        const result = response.data;
        localStorage.setItem("user", JSON.stringify(response.data));
        return result;
    }
)
