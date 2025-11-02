import { type LoginResponse, type LoginFormData } from "@/types";
import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (data: LoginFormData) => {
        setLoading(true);
        try {
            setLoading(true);
            setError(null);

            const response = await axios.post<LoginResponse>(
                "http://localhost:8000/api/auth/login",
                data
            );
            localStorage.setItem("token", response.data.token);
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};
