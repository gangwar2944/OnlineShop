import axios from "axios";


const BASE_URL = "http://localhost:8080/api/v1/";

const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.token;
// const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4eXpAZ21haWwuY29tIiwiaWF0IjoxNjgzNTY0OTQ3LCJleHAiOjE2ODM2NTEzNDd9.aUsDr9taCRRNKbvz0bx2vOTeIF5loW--DziSHIhSVLg";
// console.log(TOKEN)
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`
  }

export const publicRequest = axios.create({
    baseUrl : BASE_URL,
});

export const userRequest = axios.create({
    baseUrl : BASE_URL,
    headers :headers,
});

export const privateRequest = axios.create({
    baseURL : BASE_URL
});
privateRequest.interceptors.request.use(
    (config)=>{
        if(TOKEN){
            config.headers.common.Authorization =`Bearer ${TOKEN}`;
         }
    return config;
},(error)=>Promise.reject(error)
);
