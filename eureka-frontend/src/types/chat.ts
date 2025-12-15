export type MessageType = {
    role: "ASSISTANT" | "USER";
    content: string;
}

export type ChatContent = {
    chatId: number | null;
    title: string | null;
    content: MessageType[];
}

export type ChatList = {
    id : number;
    title : string
}