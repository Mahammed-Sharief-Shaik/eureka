import useStoreData from "@/store/store";
import axios from "axios";
import { toast } from "sonner";

export const useCreateChat = () => {
  const setCurrentChatIdName = useStoreData(state => state.setCurrentChatIdName);
  const addToCurrentChat = useStoreData(state => state.addToCurrentChat);
  const currentChat = useStoreData(state => state.currentChat);

  const generateReply = async (message: string) => {
    addToCurrentChat({
      role: 'User',
      message
    });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/ai/generate",
        {
          message,
          conversationId: currentChat.chatId,
        },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      console.log(response);

      addToCurrentChat({
        role: "AI",
        message: response.data
      });
    } catch (e) {
      console.log(e);
    }
  }


  const createChat = async (message: string) => {
    addToCurrentChat(
        {
          role: "User",
          message: message
        }
      );
    try {
      const response = await axios.post(
        "http://localhost:8000/api/ai/create-chat",
        {
          firstMessage: message
        },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      console.log(response);
      const { id, title } = response.data.conversation;
      setCurrentChatIdName(id, title);
      

      addToCurrentChat(
        {
          role: "AI",
          message: response.data.firstReply
        }
      );

      // console.log(currentChat);
      return response.data;

    } catch (error) {
      console.log(error);
      toast.error(JSON.stringify(error));
    }
  };



  return { createChat, generateReply };
};
