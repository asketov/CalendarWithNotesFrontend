import { throws } from 'assert';
import { makeAutoObservable } from 'mobx';
import AuthService from '../Api/AuthService';
import { IUser } from './../models/types/IUser';
export default class AuthStore {
    user = {} as IUser;
    isAuth = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser){
        this.user = user;
    }

    async login(email: string, password: string){
        try{
            const response = await AuthService.login(email,password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response);
            this.setAuth(true);
            this.setUser({email: response.data.email, id: response.data.id} as IUser);
        }
        catch(e){
            console.log(e.response?.data?.message);
        }
    }

    async register(email: string, password: string){
        try{
            const response = await AuthService.register(email,password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response);
            this.setAuth(true);
            this.setUser({email: response.data.email, id: response.data.id} as IUser);
        }
        catch(e){
            console.log(e.response?.data?.message);
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
            console.log(e.response?.data?.message);
        }
    }
}