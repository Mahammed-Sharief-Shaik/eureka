import express from 'express'
import dotenv from "dotenv"

const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.get('/',

    (req, res ) => {
        res.send("Hello world from server.js");
    }
)

app.listen(PORT,

    () => {
        console.log("Listening to port : " + PORT + " at http://localhost:" + PORT + "/");
    }
)
