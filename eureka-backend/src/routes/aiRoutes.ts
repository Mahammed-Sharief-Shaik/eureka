import express from 'express'
import { groq } from "../groq.js";
import "dotenv/config"
import { jwtVerify } from '../middlewares/jwtVerify.js';
import { chatController, createChat, generateReply, getChatContent } from '../controllers/aiControllers.js';
const router = express.Router();

router.get('/',
    (req, res) => {
        res.send("AI routes working")
    }
)
const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT || "Act like a DSA Coach and answer : ";

router.get('/test',
    async (req, res) => {
        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: "Isomorphic strings - explain the problem statement in detail with examples" },
            ],
        });
        res.json(
            {
                reply: response.choices[0].message.content
            }
        );
    }
);

router.get('/create-chat', (req, res) => res.send("WORKING /create-chat"));
router.post('/create-chat', jwtVerify,
    createChat
);

router.post('/generate', jwtVerify,
    generateReply
);

router.get('/chats', jwtVerify,
    chatController
);

router.get(
    '/chat/:id', jwtVerify,
    getChatContent
)

export default router;