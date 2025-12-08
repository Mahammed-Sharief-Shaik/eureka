import { Request, Response } from "express";
import { LoginRequestBody, SignupRequestBody } from "../types/index.js";
import prisma from "../prisma.js";
import bcrypt from "bcryptjs";

const loginUser = (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
    const { email, password } = req.body;


}

const signupUser = async (req: Request<{}, {}, SignupRequestBody>, res: Response) => {
    console.log("Signup request  : ", req.body);
    const { name, email, password } = req.body;
    try {

        const isDuplicate = await prisma.user.findUnique({
            where: { email: email }
        });

        if (isDuplicate) return res.status(400).json({
            message: "User Already Exists."
        })

        const hashedPassword = await bcrypt.hash(password, 10);

        // await timeWaste();
        const user = await prisma.user.create(
            {
                data: {
                    name, email, password: hashedPassword
                }
            }
        )

        res.status(201).json({
            message: `User created : ${req.body.name}`,
            user
        })
    } catch (err) {
        console.error("Error in Signup method", err);
        res.status(500).json({ message: "Server Error" })
    }


}

async function timeWaste() {
    return new Promise(resolve => setTimeout(resolve, 3000))
}







export { loginUser, signupUser };