import { useState } from "react";
import Chat from "./Chat";
import SideBar from "@/components/ui/SideBar";

const ChatUi = () => {
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <main className="flex min-h-screen">
      <SideBar open={open} setOpen={setOpen} />
      <Chat open={open} />
    </main>
  );
};

export default ChatUi;
