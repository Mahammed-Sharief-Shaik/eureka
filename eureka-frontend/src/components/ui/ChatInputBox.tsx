import React, { useRef } from "react";
import StarBorder from "../shadcn/StarBorder";
import { GrSend } from "react-icons/gr";
import { toast } from "sonner";
import useStoreData from "@/store/store";

const ChatInputBox = () => {
  const {chatId, content} = useStoreData(state => state.currentChat);


  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    
    const userMessage = inputRef.current?.value;
    if(!userMessage) {
      toast.error("Prompt can't be empty");
      return;
    }

    if(!chatId) {
      
    }

  };

  return (
    <section className="w-full  mb-2 flex items-center justify-center gap-5 mt-auto">
      <StarBorder color="white" speed="5s" thickness={2} className="w-3/4 ">
        <div className="flex items-center justify-center gap-2">
          <textarea
            name="chat"
            id="chatbox"
            placeholder="Say Eureka!"
            required
            ref={inputRef}
            className="w-full  resize-none outline-none text-white placeholder-gray-400 p-4 rounded-md bg-transparent min-h-[70px]"
          ></textarea>
        </div>
      </StarBorder>
      <button
        className="hover:cursor-pointer lavendar-btn p-[5px] rounded-md hover:scale-105 active:scale-95 transition-transform duration-200"
        onClick={handleSubmit}
      >
        <GrSend className="text-3xl text-white bg-primary" />
      </button>
    </section>
  );
};

export default ChatInputBox;
