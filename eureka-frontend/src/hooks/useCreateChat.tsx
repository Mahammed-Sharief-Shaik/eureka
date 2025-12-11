import useStoreData from "@/store/store";
import type { MessageType } from "@/types";

export const useCreateChat = () => {
  const userId = useStoreData((state) => state.userId);

  const createChat = async (message: MessageType) => {
    try {
        // const response = await axios.post(
        //     "http://localhost:8000/api/ai/create-chat",

        // )
    } catch (error) {
        
    }
  };
};
