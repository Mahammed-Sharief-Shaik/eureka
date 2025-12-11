export type MessageType = {
    role: "AI" | "User";
    message : string;
}

export type ChatContent = {
    chatId : number | null;
    content : MessageType[];
}

