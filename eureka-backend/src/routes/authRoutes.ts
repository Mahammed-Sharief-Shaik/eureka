import express from 'express'

const router = express.Router();

router.get('/',
    (req , res) =>{
        res.send("/api/auth is working")
    }
);

// router.post()

export default router;