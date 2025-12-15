import prisma from "../prisma.js"

export const getChatConv = async (id: number) => {

        const response = await prisma.message.findMany({
            where: {
                conversationId: id
            },
            orderBy: {
                createdAt: "asc"
            }
        });

        return response;
}