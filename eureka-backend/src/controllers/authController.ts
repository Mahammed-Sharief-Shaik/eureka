import { Request, Response } from "express";
import { LoginRequestBody, SignupRequestBody } from "../types/index.js";

const loginUser = (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
    const { email, password } = req.body;

    if (email === 'learntech466@gmail.com') {
        res.json({
            token: "Hello"
        });
    } else {
        res.send(404).json({
            message: "Not Learntech"
        })
    }
}

const signupUser = (req: Request<{}, {}, SignupRequestBody>, res: Response) => {
    console.log("Signup request  : ", req.body);
    res.json({
        message: `Sign up successful for ${req.body.name}`
    })

}







export { loginUser, signupUser };