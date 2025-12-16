import { RiChatSmileAiFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LogoDisp from "./LogoDisp";
import useStoreData from "@/store/store";

const Nav2 = () => {
  const navigate = useNavigate();
  const setCurrentChat = useStoreData((state) => state.setCurrentChat);
  const logoutUser = useStoreData((state) => state.logoutUser);
  return (
    <section
      className="flex justify-evenly items-center gap-3 py-1 w-full 
      border-b-[0.5px] border-gray-600 font-logo 
      bg-bg-secondary"
    >
      <LogoDisp />

      <button
        className="font2-sour-gummy flex justify-center text-xs md:text-sm
         items-center gap-2 cursor-pointer text-white lavendar-btn rounded-full px-2"
        onClick={() => {
          document.title = "Eureka !";
          navigate("/chat");
          setCurrentChat({
            chatId: null,
            title: null,
            content: [],
          });
        }}
      >
        <RiChatSmileAiFill className="text-2xl " />
        New Chat
      </button>
     
    </section>
  );
};

export default Nav2;
