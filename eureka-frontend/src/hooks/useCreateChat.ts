import useStoreData from "@/store/store";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/lib/api";

export const useCreateChat = () => {
  const setCurrentChatIdName = useStoreData(state => state.setCurrentChatIdName);
  const addToCurrentChat = useStoreData(state => state.addToCurrentChat);
  const currentChat = useStoreData(state => state.currentChat);
  const addToChatList = useStoreData(state => state.addToChatList)

  const [loading, setLoading] = useState<boolean>(false);
  const generateReply = async (message: string) => {
    setLoading(true);
    addToCurrentChat({
      role: 'USER',
      content : message
    });
    try {
      const response = await api.post(
        "/api/ai/generate",
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

      // console.log(response);

      addToCurrentChat({
        role: "ASSISTANT",
        content: response.data
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }


  const createChat = async (message: string) => {
    setLoading(true);
    addToCurrentChat(
      {
        role: "USER",
        content: message
      }
    );
    try {
      const response = await api.post(
        "/api/ai/create-chat",
        {
          firstMessage: message
        },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      // console.log(response);
      const { id, title } = response.data.conversation;
      setCurrentChatIdName(id, title);
      addToChatList({
        id, title
      })

      addToCurrentChat(
        {
          role: "ASSISTANT",
          content: response.data.firstReply
        }
      );

      // console.log(currentChat);
      return response.data;

    } catch (error) {
      console.log(error);
      toast.error(JSON.stringify(error), 
        {
        className: "font1-epundu tracking-wider",
      });
    } finally { setLoading(false) }
  };



  return { createChat, generateReply, loading, setLoading };
};
