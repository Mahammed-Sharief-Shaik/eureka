export type MessageType = {
    role: "AI" | "User";
    message: string;
}

export type ChatContent = {
    chatId: number | null;
    title: string | null;
    content: MessageType[];
}

