import useStoreData from "@/store/store";
import axios from "axios"
import { useState } from "react";
import { toast } from "sonner";

export const useFetchChat = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const setCurrentChatContent = useStoreData(state => state.setCurrentChatContent);
    const chatLoading = useStoreData((state) => state.chatLoading);
    const setChatLoading = useStoreData((state) => state.setChatLoading);

    const getChat = async (chatid: number) => {
        setChatLoading(true);
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
            toast.error("Failed" + JSON.stringify(error),
                {
                    className: "font1-epundu tracking-wider",
                })
        }finally{
            setChatLoading(false);
        }
    }
    return { getChat, loading, setLoading };
}