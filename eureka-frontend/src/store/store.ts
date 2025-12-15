import type { Store } from "@/types";
import { create } from "zustand";

const useStoreData = create<Store>(
    (set) => ({
        userName: "",
        userId: null,
        setUserName: (name) => {
            set({ userName: name })
        },
        setUserId: (id) => set({ userId: id }),
        logoutUser: () => {
            set({
                userId: null,
                userName: "",
                isLoggedIn: false
            })
            localStorage.clear();
        },
        mail: "",

        setMail: (mailID) => {
            set({
                mail: mailID
            })
        },
        isLoggedIn: false,
        setIsLoggedIn: (val) => {
            set({
                isLoggedIn: val
            })
        },
        currentChat: {
            chatId: null,
            title: null,
            content: []
        },
        setCurrentChatContent: (chat) => {
            set(
                (state) =>
                ({
                    currentChat: {
                        ...state.currentChat,
                        content: chat
                    }
                }))
        },
        addToCurrentChat: (message) =>
            set((state) => ({
                currentChat: {
                    ...state.currentChat,
                    content: [...state.currentChat.content, message], // clone + append
                },
            })
            ),
        setCurrentChatIdName: (cId, cName) => {
            set((state) => ({
                currentChat: {
                    chatId: cId,
                    title: cName,
                    content: [...state.currentChat.content]
                }
            }))
        },
        chatList: [],
        setChatList(list) {
            set({
                chatList: list
            })
        },
        addToChatList: (chat) => {
            set(
                (state) => ({
                    chatList: [
                        ...state.chatList,
                        chat
                    ]
                })
            )
        },

    }));


export default useStoreData;