import React, { useRef } from "react";
import StarBorder from "../shadcn/StarBorder";
import { GrSend } from "react-icons/gr";
import { toast } from "sonner";
import useStoreData from "@/store/store";
import { useCreateChat } from "@/hooks/useCreateChat";

const ChatInputBox = () => {
  const { chatId } = useStoreData((state) => state.currentChat);
  const { createChat, generateReply } = useCreateChat();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = () => {
    const userMessage = inputRef.current?.value;
    if (!userMessage) {
      toast.error("Prompt can't be empty", {
        className: "font1-epundu tracking-wider",
      });
      return;
    }

    if (!chatId) {
      createChat(userMessage);
    } else {
      generateReply(userMessage);
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <section className="w-full  flex items-center  justify-center gap-5 py-1 ">
      <StarBorder color="white" speed="5s" thickness={2} className="w-3/4 ">
        <div className="flex items-center justify-center gap-2">
          <textarea
            name="chat"
            id="chatbox"
            placeholder="Say Eureka! (Ctrl + Enter to send)"
            required
            aria-required
            ref={inputRef}
            onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
              if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
                event.preventDefault();
                handleSubmit();
              }
            }}
            className="w-full  resize-none outline-none
            placeholder:text-xs md:placeholder:text-sm
            text-white placeholder-gray-400 p-4 rounded-md bg-transparent min-h-[70px]"
          ></textarea>
        </div>
      </StarBorder>

      <button
        className="hover:cursor-pointer relative  
        lavendar-btn p-1 rounded-md hover:scale-105 a
        ctive:scale-95 transition-transform duration-200"
        onClick={handleSubmit}
      >
        {/* {loading && <Loader />} */}

        <GrSend className="text-3xl text-white bg-primary" />
      </button>
    </section>
  );
};

export default ChatInputBox;
