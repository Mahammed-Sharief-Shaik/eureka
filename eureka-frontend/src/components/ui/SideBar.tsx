import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { TbUserHexagon } from "react-icons/tb";
import useStoreData from "@/store/store.ts";
import { useEffect } from "react";
import axios from "axios";
import ChatListElement from "./ChatListElement";
import { MdHistory } from "react-icons/md";

const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const setChatList = useStoreData((state) => state.setChatList);
  const chatList = useStoreData((state) => state.chatList);

  useEffect(() => {
    const fetchChats = async () => {
      const response = await axios.get("http://localhost:8000/api/ai/chats", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response.data.chats);
      setChatList(response.data.chats);
    };
    fetchChats();
  }, []);

  const userName = useStoreData((state) => state.userName);

  return (
    <aside
      className={`bg-bg-secondary 
    h-screen flex flex-col 
    text-2xl  py-3
    ${
      open ? "w-1/4" : "w-12"
    } z-10 ml-auto transition-all duration-300 justify-between
     items-center border-r-gray-600 border-r-[0.5px] fixed top-0`}
    >
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        {!open ? (
          <GoSidebarCollapse className="text-accent hover:text-accent/80 cursor-pointer" />
        ) : (
          <GoSidebarExpand className="text-accent hover:text-accent/80 cursor-pointer" />
        )}
      </div>

      <h2 className="text-center text-accent py-2">
        {open ? (
          "History"
        ) : (
          <MdHistory className="text-text-secondary text-3xl" />
        )}
      </h2>
      <div
        className={`text-white ${
          !open && "hidden"
        }  w-full px-5 h-3/4 overflow-y-scroll`}
      >
        <div
          className="flex  
        justify-center items-center flex-col  gap-2"
        >
          {chatList.map(({ title, id }) => (
            <ChatListElement key={id} title={title} id={id} />
          ))}
        </div>
      </div>

      {/* <CiChat2 /> */}
      <div className=" flex justify-center items-center flex-col ">
        <TbUserHexagon className="text-primary text-3xl" />
        {open && (
          <>
            <h2 className="text-white text-xl ">{` ${userName}`}</h2>
            {/* <h2 className="text-white text-sm">{` ${userId}`}</h2>
            <h2 className="text-white text-sm">{` ${mail}`}</h2> */}
          </>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
