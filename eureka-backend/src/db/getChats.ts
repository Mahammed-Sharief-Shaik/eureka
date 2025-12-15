import prisma from "../prisma.js"

export const getChats = async (userId: number) => {
    const chats = await prisma.conversation.findMany({
        where: {
            userId
        },
    })
    return chats;
}