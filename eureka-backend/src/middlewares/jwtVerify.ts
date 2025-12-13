import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config"
import { Request, Response, NextFunction } from "express";
import { jwtRequest } from "../types/index.js";

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({
            message: "No token found"
        });
    }
    else {
        const token = authHeader.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & { id: number };
            req.user = decoded;
            next();
        } catch (e) {
            console.error("Error in jwtverify : ", e);
            res.status(401).json({ message: "Invalid token" });
        }
    }
}