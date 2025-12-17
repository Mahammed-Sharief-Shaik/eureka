import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { TbUserHexagon } from "react-icons/tb";
import useStoreData from "@/store/store.ts";
import { useEffect } from "react";
import ChatListElement from "./ChatListElement";
import { MdHistory } from "react-icons/md";
import LogoDisp from "./LogoDisp";
import { MdLogout } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { api } from "@/lib/api";

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
      const response = await api.get("/api/ai/chats", {
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
          <Tooltip>
            <TooltipTrigger asChild>
              <GoSidebarCollapse className="text-accent hover:text-accent/80 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent
              side="right"
              align="center"
              sideOffset={10}
              className="z-50 rounded-md border border-gray-800 bg-gray-950 px-3 py-1.5 text-xs font-medium text-gray-300 shadow-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            >
              <p>Click to Open Sidebar</p>
            </TooltipContent>
          </Tooltip>
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
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="group flex  items-center justify-center rounded-xl transition-all hover:bg-white/10"
                aria-label="View History"
              >
                <MdHistory className="text-text-secondary text-2xl transition-colors group-hover:text-white" />
              </button>
            </TooltipTrigger>

            <TooltipContent
              side="right"
              align="center"
              sideOffset={10}
              className="z-50 rounded-md border border-gray-800 bg-gray-950 px-3 py-1.5 text-xs font-medium text-gray-300 shadow-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            >
              <p>Open Sidebar to view history</p>
            </TooltipContent>
          </Tooltip>
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
            <Tooltip>
              <TooltipTrigger asChild>
                {/* Wrapped in a button for better hit-target and UX */}
                <button className="group flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-red-500/10 hover:text-red-500">
                  <MdLogout className="h-5 w-5" />
                </button>
              </TooltipTrigger>

              <TooltipContent
                side="right"
                align="center"
                sideOffset={8}
                className="bg-gray-900 border border-gray-800 text-xs font-medium text-gray-300 rounded-md px-3 py-1.5 shadow-xl"
              >
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
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
