import { PrismaClient } from "./generated/prisma/client.js";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });
export default prisma;
// use `prisma` in your application to read and write data in your DB