import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { TbUserHexagon } from "react-icons/tb";
import useStoreData from "@/store/store.ts";
import { useEffect } from "react";
import axios from "axios";
import ChatListElement from "./ChatListElement";
import { MdHistory } from "react-icons/md";
import LogoDisp from "./LogoDisp";
import { MdLogout } from "react-icons/md";

const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const setChatList = useStoreData((state) => state.setChatList);
  const chatList = useStoreData((state) => state.chatList);
  const userName = useStoreData((state) => state.userName);
  const logoutUser = useStoreData((state) => state.logoutUser);

  useEffect(() => {
    const fetchChats = async () => {
      const response = await axios.get("http://localhost:8000/api/ai/chats", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setChatList(response.data.chats);
    };
    fetchChats();
  }, []);

  return (
    <aside
      className={`bg-bg-secondary 
    h-screen flex flex-col 
    text-2xl  py-3 
    ${
      open ? "w-3/4 md:w-1/4" : "w-10 md:w-12"
    } z-10 ml-auto transition-all duration-300 justify-between
     items-center border-r-gray-600 border-r-[0.5px] fixed top-0`}
    >
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="w-full flex justify-center items-center "
      >
        {!open ? (
          <GoSidebarCollapse className="text-accent hover:text-accent/80 cursor-pointer" />
        ) : (
          <div className="flex justify-between w-full px-10 items-center ">
            <LogoDisp />
            <GoSidebarExpand className="text-error hover:text-accent/80 cursor-pointer" />
          </div>
        )}
      </div>

      <h2 className="text-center text-accent font2-sour-gummy mt-1">
        {open ? (
          "History"
        ) : (
          <MdHistory className="text-text-secondary text-3xl" />
        )}
      </h2>
      <div
        className={`text-white  ${
          !open && "hidden"
        }  w-full px-5 h-3/4 overflow-y-scroll`}
      >
        <div
          className="flex  
        justify-center items-center flex-col gap-2"
        >
          {chatList.map(({ title, id }) => (
            <ChatListElement key={id} title={title} id={id} setOpen={setOpen} />
          ))}
        </div>
      </div>

      <div className=" flex justify-center items-center gap-1 flex-col">
        <div className="flex flex-col justify-center items-center">
          <TbUserHexagon className="text-primary text-3xl" />
          {open && <h2 className="text-white text-sm ">{userName}</h2>}
        </div>
        <div
          className="flex justify-center items-center cursor-pointer flex-col"
          onClick={logoutUser}
        >
          {!open ? (
            <MdLogout className="text-white cursor-pointer  hover:text-error" />
          ) : (
            <button className="white-btn rounded-md cursor-pointer px-2 my-1 text-sm">
              Logout
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
