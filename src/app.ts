import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod";

const app = fastify()
const prisma = new PrismaClient()

app.get("/", (request, reply) =>{
    console.log("ta dando")
})

app.listen(
    {
        host: '0.0.0.0',
        port: process.env.PORT ? Number(process.env.PORT) : 3333
    }
)