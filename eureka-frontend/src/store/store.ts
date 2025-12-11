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
        },
        isLoggedIn: false,
        setIsLoggedIn: (val) => {
            set({
                isLoggedIn: val
            })
        },
    })
);


export default useStoreData;