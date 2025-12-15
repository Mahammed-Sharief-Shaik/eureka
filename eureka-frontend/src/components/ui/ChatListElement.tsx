import { useFetchChat } from "@/hooks/useFetchChat";
import useStoreData from "@/store/store";

const ChatListElement = ({ title, id }: { title: string; id: number }) => {
  const { getChat, loading } = useFetchChat();
  const setCurrentChatIdName = useStoreData(state => state.setCurrentChatIdName);
  const fetchChat = async (id: number) => {
    setCurrentChatIdName(id, title)
    await getChat(id);

  };

  return (
    <div
      className=" text-xl border-[1px] text-center text-text-secondary cursor-pointer 
      hover:scale-105 active:scale-95
      text-shadow-primary text-shadow-2xs font-mono
   border-gray-600 rounded-md w-full py-2 px-1  whitespace-nowrap truncate"
      onClick={() => {
        fetchChat(id);
      }}
    >{`${title}`}</div>
  );
};

export default ChatListElement;
