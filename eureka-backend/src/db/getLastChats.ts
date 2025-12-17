import prisma from "../prisma.js";
import { MessageRole } from "@prisma/client/index.js";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export const getLastChats = async (
  conversationId: number,
  userId: number
): Promise<ChatMessage[]> => {
  const last5Messages = await prisma.message.findMany({
    where: {
      conversationId,
      conversation: {
        userId, // ensures ownership
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  // DB → AI boundary mapping
  return last5Messages.map((m) => ({
    role:
      m.role === MessageRole.USER
        ? "user"
        : m.role === MessageRole.ASSISTANT
          ? "assistant"
          : "system",
    content: m.content,
  }));
};



// return last5Messages;
// }