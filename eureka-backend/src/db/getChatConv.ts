import { timeWaste } from "../controllers/authController.js";
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
        // await timeWaste(5);
        return response;
}