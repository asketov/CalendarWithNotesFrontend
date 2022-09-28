import { AuthResponse } from './../models/response/AuthResponse';
import { throws } from 'assert';
import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import AuthService from '../Api/AuthService';
import { IUser } from './../models/types/IUser';
import { API_URL } from '../Api/AuthInterceptors';
import axios from 'axios';
export default class AuthStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = true;
    statusMessage = '';

    constructor(){
        makeObservable(this, {
            user: observable,
            isAuth: observable,
            isLoading: observable,
            statusMessage: observable,
            setAuth: action,
            setUser: action
        })
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setUser(user: IUser){
        this.user = user;
    }
    

    async login(email: string, password: string) : Promise<boolean> {
        try{
            const response = await AuthService.login(email,password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser({email: response.data.email, id: response.data.id} as IUser);
            return true;
        }
        catch(e){
            console.log(e.response);
            return false;
        }
    }

    async register(email: string, password: string) : Promise<boolean> {
        try{
            const response = await AuthService.register(email,password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response);
            this.setAuth(true);
            this.setUser({email: response.data.email, id: response.data.id} as IUser);
            return true;
        }
        catch(e){
            console.log(e.response?.data?.message);
            return false;
        }
    }
    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        }
        catch(e){
            console.log(e.response);
        }
    }
    async checkAuth(){
        try{
            const response = await axios.get<AuthResponse>(API_URL + 'checkToken/' + localStorage.getItem('token'), {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser({email: response.data.email, id: response.data.id} as IUser);
        }
        catch(e){
            console.log(e.response);
        }
        finally{
            this.setLoading(false);
        }
    }
}