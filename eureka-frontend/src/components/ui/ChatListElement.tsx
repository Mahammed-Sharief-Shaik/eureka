import { useFetchChat } from "@/hooks/useFetchChat";
import useStoreData from "@/store/store";

const ChatListElement = ({
  title,
  id,
  setOpen,
}: {
  title: string;
  id: number;
  setOpen: (val: boolean) => void;
}) => {
  const { getChat, loading } = useFetchChat();
  const setCurrentChatIdName = useStoreData(
    (state) => state.setCurrentChatIdName
  );
  const fetchChat = async (id: number) => {
    setCurrentChatIdName(id, title);
    await getChat(id);
    if (window.innerWidth < 1024) {
      setOpen(false);
    }
  };

  return (
    <div
      className=" text-sm  text-text-secondary cursor-pointer 
  
     w-full py-1 px-1  truncate"
      onClick={() => {
        fetchChat(id);
      }}
    >{`${title}`}</div>
  );
};

export default ChatListElement;
