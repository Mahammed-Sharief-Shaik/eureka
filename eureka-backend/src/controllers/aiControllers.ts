import { Request, Response } from "express";
import { groq } from "../groq.js";
import prisma from "../prisma.js";
import "dotenv/config"
import { addMessageToChat } from "../db/addMessageToChat.js";
import { getLastChats } from "../db/getLastChats.js";
import { getChats } from "../db/getChats.js";
import { getChatConv } from "../db/getChatConv.js";


type ChatMessage = {
    role: "system" | "user" | "assistant";
    content: string;
};

export const getTitle = async (firstMessage: string) => {
    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: process.env.FIRST_PROMPT!
            },
            {
                role: "user",
                content: firstMessage
            },
        ],
    });
    return response.choices[0].message.content;
}

const getFirstReply = async (firstMessage: string, conversationId: number) => {
    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: process.env.SYSTEM_PROMPT!
            },
            {
                role: "user",
                content: firstMessage
            },
        ],
    });
    // console.log(JSON.stringify(response));
    const reply = response.choices[0].message.content!;
    await addMessageToChat(reply, "ASSISTANT", conversationId);
    return reply;
}

const getReply = async (msg: string, conversationId: number, userId: number | undefined) => {
    if (!userId) return;
    const last5Messages = await getLastChats(conversationId, userId);
    // console.log(last5Messages);
    const historyMessages: ChatMessage[] = last5Messages.map((m) => ({
        role: m.role === "USER" ? "user" : "assistant",
        content: m.content, // or m.content depending on schema
    }));

    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: process.env.SYSTEM_PROMPT!,
            },
            ...historyMessages,
            {
                role: "user",
                content: msg
            }
        ],
    });
    const reply = response.choices[0].message.content!;
    await addMessageToChat(reply, "ASSISTANT", conversationId)
    return reply;
}

export const createChat = async (req: Request, res: Response) => {
    const reply = await getTitle(req.body.firstMessage);
    // console.log(reply);
    if (!req.user) {
        return res.status(403).json({ message: "Frobidden request" })
    }
    try {
        const conversation = await prisma.conversation.create({
            data: {
                userId: req.user?.id,
                title: reply
            }
        });
        // console.table(conversation);
        const msg = await prisma.message.create({
            data: {
                conversationId: conversation.id,
                role: "USER",
                content: req.body.firstMessage
            }
        });
        const firstReply = await getFirstReply(req.body.firstMessage, conversation.id);
        res.status(201).json({
            message: "Conversation created successfully!",
            conversation,
            firstReply
        })
    } catch (error) {
        console.log("Error in createChat function ", error);
        res.status(500).json({ message: "Internal Server error!" });
    }
}



export const generateReply = async (req: Request, res: Response) => {

    await addMessageToChat(req.body.message, "USER", req.body.conversationId)
    const reply = await getReply(req.body.message, req.body.conversationId, req.user?.id);
    res.status(200).json(reply);
}

export const chatController = async (req: Request, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {

        const userChats = await getChats(req.user.id);

        res.status(200).json({
            chats: userChats,
        });
    } catch (e) {
        res.status(500).json({
            message: "Error retriving chats",
        })
    }
};


export const getChatContent = async (req: Request, res: Response) => {
    try {
        const chatContent = await getChatConv(parseInt(req.params.id));

        res.status(200).json({
            chat: chatContent
        })
    } catch (err) {
        res.status(500).json({ message: "Error fetching chats" });
    }
}


