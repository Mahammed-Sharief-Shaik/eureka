import type { ChatContent, MessageType } from "./chat";

export type Store = {
    userName: string;
    userId: number | null;
    setUserName: (name: string) => void;
    setUserId: (id: number) => void;
    logoutUser: () => void;
    mail: string;
    setMail: (mail: string) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: (status: boolean) => void;
    currentChat : ChatContent;
    setCurrentChat : (chat : ChatContent) => void;
    addToCurrentChat : (message : MessageType) => void; 
}