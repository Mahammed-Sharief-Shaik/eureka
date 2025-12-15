import useStoreData from "@/store/store";
import axios from "axios"
import { useState } from "react";
import { toast } from "sonner";

export const useFetchChat = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const setCurrentChatContent = useStoreData(state => state.setCurrentChatContent);
    const getChat = async (chatid: number) => {
        try {

            const response = await axios.get(
                `http://localhost:8000/api/ai/chat/${chatid}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            console.log(response.data.chat);
            setCurrentChatContent(response.data.chat);
        } catch (error) {
            console.log(error);
            toast.error("Failed" + JSON.stringify(error))
        }
    }
    return { getChat, loading, setLoading };
}