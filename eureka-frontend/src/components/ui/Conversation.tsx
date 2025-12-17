import useStoreData from "@/store/store";
import UserMessage from "./UserMessage";
import MarkdownRenderer from "./MarkdownRenderer";
import Loader from "./Loader";
import { useEffect, useRef } from "react";

const Conversation = () => {
  const currentChat = useStoreData((state) => state.currentChat);
  const chatLoading = useStoreData((state) => state.chatLoading);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat?.content]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // const msg = `The Two Sum problem can be a bit tricky when you're starting out. \n\nSo, you've tried using two loops, and you're getting a Time Limit Exceeded (TLE) error. That's because the two-loop approach has a time complexity of O(n^2), which can be slow for large inputs.\n\nLet's think about it: what if we could find a way to store the numbers we've seen so far and their indices, so we can quickly look up if the complement (the number we need to add to get the target) is already in our \"memory\"? \n\nCan you think of a data structure that would allow us to do this? Something that has a fast lookup time, like... maybe a hash table or a dictionary?\n\nWhat are your thoughts on this? Should we explore how to use a hash table to solve the Two Sum problem?`;
  if (currentChat.title) document.title = currentChat.title;
  return (
    <section
      className=" max-h-150  lg:max-h-110 px-5 pt-2 text-base 
    selection:bg-accent    selection:text-bg-primary tracking-wider text-justify overflow-y-scroll flex flex-col  gap-2"
    >
      {chatLoading && <Loader message={"Loading chat!"} />}

      {currentChat?.content.map(({ role, content }, index) =>
        role === "USER" ? (
          <UserMessage key={index.toString()} msg={content} />
        ) : (
          <section key={index}>
            <MarkdownRenderer content={content} />
          </section>
        )
      )}
      <div ref={bottomRef} />
    </section>
  );
};

export default Conversation;
