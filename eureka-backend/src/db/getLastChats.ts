import prisma from "../prisma.js";

export const getLastChats = async (conversationId:number, userId : number) => {
    const last5Messages = await prisma.message.findMany({
    where: {
      conversationId,
      conversation: {
        userId, // ✅ ensures user owns this conversation
      },
    },
    orderBy: {
      createdAt: "desc", // get latest first
    },
    take: 5, // only last 5
  });


    return last5Messages;
}