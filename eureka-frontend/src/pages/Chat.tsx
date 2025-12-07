import StarBorder from "@/components/shadcn/StarBorder";
import { FaUser } from "react-icons/fa6";
import { CiChat2 } from "react-icons/ci";
const Chat = () => {
  return (
    <main
      className="min-h-screen bg-bg-primary text-text-primary font1-epundu 
    text-lg flex flex-col justify-end"
    >
      <aside className="bg-bg-secondary w-10 h-full flex flex-col justify-center items-center">
        <FaUser />
        <CiChat2 />
      </aside>
      <section className="w-9/10 mx-auto max-w-3xl mb-20">
        <StarBorder color="white" speed="5s" thickness={2} className="w-full">
          <textarea
            name="chat"
            id="chatbox"
            placeholder="Say Eureka!"
            className="w-full resize-none outline-none text-white placeholder-gray-400 p-3 rounded-md bg-transparent min-h-[70px]"
          ></textarea>
        </StarBorder>
      </section>
    </main>
  );
};

export default Chat;
