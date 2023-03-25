import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
// const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTliODQ1NzRiNDgxYzg4MjZmMzVlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjkyODMzNCwiZXhwIjoxNjU3MzYwMzM0fQ._m-nhGuCvrJ0TjiMEKgyIw9RPa-F0L3b7uj85bffht8";

// console.log(BASE_URL)
export const publicRequest = axios.create({
    baseUrl : BASE_URL,
});

export const  userRequest = axios.create({
    baseUrl : BASE_URL,
    headers :{token:`Bearer ${TOKEN}`},
});

// console.log(TOKEN)