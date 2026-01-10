import ChatInputBox from "@/components/ui/ChatInputBox";
import Conversation from "@/components/ui/Conversation";
import Nav2 from "@/components/ui/Nav2";
const Chat = ({ open }: { open: boolean }) => {
  return (
    <section
      className={`max-h-screen   bg-bg-primary text-text-primary 
    text-lg flex flex-col justify-between ml-10  ${
      open ? "w-full  md:ml-[25%] md:w-3/4" : "md:ml-12 w-full"
    } transition-all duration-300`}
    >
      <Nav2  />

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
