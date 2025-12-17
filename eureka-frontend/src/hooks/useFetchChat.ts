import useStoreData from "@/store/store";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/api";

export const useFetchChat = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const setCurrentChatContent = useStoreData(state => state.setCurrentChatContent);
    const setChatLoading = useStoreData((state) => state.setChatLoading);

    const getChat = async (chatid: number) => {
        setChatLoading(true);
        try {

            const response = await api.get(
                `/api/ai/chat/${chatid}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            // console.log(response.data.chat);
            setCurrentChatContent(response.data.chat);
        } catch (error) {
            // console.log(error);
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