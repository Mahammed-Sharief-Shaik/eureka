import { type LoginResponse, type LoginFormData } from "@/types";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const login = async (data: LoginFormData) => {
        setLoading(true);
        try {
            setLoading(true);
            setError("");

            const response = await axios.post<LoginResponse>(
                "http://localhost:8000/api/auth/login",
                data
            );
            console.log(response);
            localStorage.setItem("token", response.data.token);
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
            toast.error(err.response?.data?.message, {
                className: "font1-epundu tracking-wider",
            });
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error, setLoading, setError };
};
