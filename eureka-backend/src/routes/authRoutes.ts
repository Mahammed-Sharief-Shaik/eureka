import express from 'express'

const router = express.Router();

router.get('/',
    (req, res) => {
        res.send("/api/auth is working")
    }
);

router.post("/login",
    (req, res) => {
        const { email, password } = req.body;

        if(email==='learntech466@gmail.com'){

            res.json({
                token: "Hello"
            });
        }else{
            res.send(404).json({
                message : "Not Learntech"
            })
        }
    }
)

export default router;