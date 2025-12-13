import prisma from "../prisma.js"

export const addMessageToChat = async (message: string, role: "USER" | "ASSISTANT", conversationId: number) => {
    const msg = await prisma.message.create({
        data: {
            content: message,
            role,
            conversationId: conversationId
        }
    });
    

}