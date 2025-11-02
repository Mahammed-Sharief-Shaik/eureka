import express from 'express'
import dotenv from "dotenv"


import authRoutes from "./routes/authRoutes.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());

app.use('/api/auth', authRoutes )

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
