import { IUser } from "../types/IUser";

export interface AuthResponse {
    accessToken: string;
    email: string;
    id: number;
}