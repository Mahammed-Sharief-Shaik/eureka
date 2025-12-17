import express from 'express'
import dotenv from "dotenv"
import cors from "cors";
import { groq } from './groq.js';
import authRoutes from "./routes/authRoutes.js"
import aiRoutes from "./routes/aiRoutes.js"
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes)
app.use('/api/ai', aiRoutes)
app.get('/api',
    (req, res) => {
        res.send("Hello world from server.js");
    }
);

app.listen(PORT,

    () => {
        console.log("Listening to port : " + PORT + " at http://localhost:" + PORT + "/");
    }
)
