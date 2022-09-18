import axios from "axios";

const API_URL = "https://localhost:44340/user/";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token');
    return config;
}) 

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    if(error.response.status === 401) {
        localStorage.removeItem('token');
    }
})

export default $api;