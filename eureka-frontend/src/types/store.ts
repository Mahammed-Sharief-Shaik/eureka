import type { ChatContent, ChatList, MessageType } from "./chat";

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
    currentChat: ChatContent;
    setCurrentChat: (chat: ChatContent) => void;
    setCurrentChatContent: (chat: MessageType[]) => void;
    addToCurrentChat: (message: MessageType) => void;
    setCurrentChatIdName: (cId: number, cName: string) => void;
    chatList: ChatList[],
    setChatList: (list: ChatList[]) => void;
    addToChatList: (chat: ChatList) => void;

    chatLoading: boolean;
    setChatLoading: (val: boolean) => void;

    loggedInRecently: boolean;
    setLoggedInRecently: (val: boolean) => void;
}