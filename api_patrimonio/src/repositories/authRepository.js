// import { prisma } from "../database/prisma.js";

// export async function getAllAuthors() {
//   return prisma.admin.findMany();
// }

import { prisma } from "../database/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function login(email, password) {

    const user = await prisma.admin.findUnique({
        where: { email }
    });

    if (!user) {
        throw new Error("Usuário não encontrado");
    }

    const senhaValida = await bcrypt.compare(password, user.password);

    if (!senhaValida) {
        throw new Error("Senha inválida");
    }

    const token = jwt.sign(
        {
            id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return token;
}