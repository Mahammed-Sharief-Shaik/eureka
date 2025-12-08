export type Store = {
    userName : string;
    userId : number | null;
    setUserName : (name : string) => void;
    setUserId : (id : number) => void;
    logoutUser : () => void;
    isLoggedIn : boolean;
    setIsLoggedIn : (val : boolean) => void;

}