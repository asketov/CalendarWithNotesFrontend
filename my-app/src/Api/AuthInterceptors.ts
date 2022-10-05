import axios from "axios";
import { IUser } from "../models/types/IUser";
import AuthStore from "../store/AuthStore";

export const API_URL = "https://localhost:44340/user/";

let store : AuthStore

export const injectStore = _store => {
  store = _store
}

const $api = axios.create({
    
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token');
    return config;
}) 

$api.interceptors.response.use((config) => {
    return config;
}, (error) => {
    if(error.response.status === 401) {
        localStorage.removeItem('token');
        store.setAuth(false);
        store.setUser({} as IUser);
    }
})

export default $api;