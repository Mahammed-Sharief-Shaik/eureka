import type { UserInfoType } from "./user";

export interface LoginFormData {
    email: string;
    password: string;
}

export interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface LoginResponse {
    token: string;
    message?: string;
    user : UserInfoType
}

export interface SignupResponse {
    message ?: string;
}