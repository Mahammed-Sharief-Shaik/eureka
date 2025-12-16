import { Request, Response } from "express";
import prisma from "../prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config"
const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user) return res.status(401).json({ message: "User not found." });

        const hashedPassword = user.password;
        const matches = await bcrypt.compare(password, hashedPassword);
        if (!matches) return res.status(401).json({ message: "Invalid Password." });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "6h" });
        // console.log("Token : ", token);
        return res.status(200).json({
            message: "User logged in successfully",
            token,
            user: { id: user.id, email, name: user.name }
        });

    } catch (error) {
        console.error("Error in Signup method", error);
        res.status(500).json({ message: "Internal Server Error. Try again later." })
    }

}

const signupUser = async (req: Request, res: Response) => {
    // console.log("Signup request  : ", req.body);
    const { name, email, password } = req.body;
    try {

        const isDuplicate = await prisma.user.findUnique({
            where: { email: email }
        });

        if (isDuplicate) return res.status(400).json({
            message: "User Already Exists."
        })

        const hashedPassword = await bcrypt.hash(password, 10);

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

export async function timeWaste(sec: number) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000))
}







export { loginUser, signupUser };