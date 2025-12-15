import { RiChatSmileAiFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LogoDisp from "./LogoDisp";

const Nav2 = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex justify-evenly items-center gap-3 py-1 w-full 
      border-b-[0.5px] border-gray-600 font-logo 
      bg-bg-secondary"
    >
      <LogoDisp />
      <RiChatSmileAiFill
        className="text-2xl text-primary cursor-pointer"
        onClick={() => {
        //   navigate("/");
        
          navigate("/chat");
        }}
      />
    </section>
  );
};

export default Nav2;
