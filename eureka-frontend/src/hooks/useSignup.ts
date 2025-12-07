import type { SignupFormData, SignupResponse } from "@/types";
import axios from "axios";
import { useState } from "react";

export const useSignup = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const signup = async (data: SignupFormData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post<SignupResponse>(
                "http://localhost:8000/api/auth/signup",
                data
            );
            // localStorage.setItem("token", response.data.token);
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return { signup, loading, error };
}