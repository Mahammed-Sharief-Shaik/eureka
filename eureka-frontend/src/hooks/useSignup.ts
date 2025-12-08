import type { SignupFormData, SignupResponse } from "@/types";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export const useSignup = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const signup = async (data: SignupFormData) => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.post<SignupResponse>(
                "http://localhost:8000/api/auth/signup",
                data
            );
            // localStorage.setItem("token", response.data.token);
            return response.data;
        } catch (err: any) {
            setError(err.response?.data?.message || "Signup failed");
            toast.error(err.response?.data?.message, {
                className: "font1-epundu tracking-wider",
            });
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return { signup, loading, error, setError, setLoading };
}