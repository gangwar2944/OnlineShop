import axios from "axios";


const BASE_URL = "http://localhost:8000/api/v1/";

const TOKEN = JSON.parse(localStorage.getItem("user"))?.token;
// const TOKEN ="sdsdfsdfsfsdf";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`
  }

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
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

export const imageUrl = 'http://localhost:8000/api/v1/files/getImage';
