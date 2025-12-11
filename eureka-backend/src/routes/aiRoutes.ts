import express from 'express'
import { groq } from "../groq.js";
import "dotenv/config"
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
                { role: "user", content: "I was solving this question two sum, i tried with two loops but getting TLE so what can i do" },
            ],
        });

        // console.log(response.choices[0].message.content);
        res.json(
            {
                reply: response.choices[0].message.content
            }
        )
    }
);



export default router;