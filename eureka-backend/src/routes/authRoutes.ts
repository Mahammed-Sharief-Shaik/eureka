import express from 'express'
import { loginUser, signupUser } from '../controllers/authController.js';

const router = express.Router();

router.get('/',
    (req, res) => {
        res.send("/api/auth is working")
    }
);

router.post("/login",
    loginUser
);

router.post('/signup',
    signupUser
);
export default router;