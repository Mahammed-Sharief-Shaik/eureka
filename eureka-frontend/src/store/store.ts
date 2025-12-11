import type { Store } from "@/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware"



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
        },
        mail: "",

        setMail: (mailID) => {
            set({
                mail: mailID
            })
        },
        isLoggedIn: true,
        setIsLoggedIn: (val) => {
            set({
                isLoggedIn: val
            })
        },
        currentChat: {
            chatId: null,
            content: []
        },
        setCurrentChat: (chat) => {
            set({
                currentChat: chat
            })
        },
        addToCurrentChat: (message) =>
            set((state) => ({
                currentChat: {
                    ...state.currentChat,
                    content: [...state.currentChat.content, message], // clone + append
                },
            })
        ),

    }));


export default useStoreData;