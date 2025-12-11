import ChatInputBox from "@/components/ui/ChatInputBox";
import Conversation from "@/components/ui/Conversation";

const Chat = ({ open }: { open: boolean }) => {
  return (
    <section
      className={`max-h-screen  bg-bg-primary text-text-primary 
    text-lg flex flex-col   ${
      open ? "ml-[25%] w-3/4" : "ml-12 w-full"
    } transition-all duration-300`}
    >
      <section
        className="flex justify-center items-center gap-3 py-1 
      border-b-[0.5px] border-gray-600 font-logo
      bg-bg-secondary"
      >
        <img src="./logo.webp" alt="Eureka" className="max-h-8" />
        <h1 className="font-logo tracking-wider">Eureka!</h1>
      </section>

      {/* 
mobile max-h-120 mb-5
desktop max-h-100 mb-22
*/}
      <Conversation />

      <ChatInputBox />
    </section>
  );
};

export default Chat;
