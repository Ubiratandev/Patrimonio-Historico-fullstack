import { prisma } from "../database/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginService(email, password) {
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

    // O segredo está em garantir que o ID não seja BigInt ao assinar o token
    const token = jwt.sign(
        {
            // Forçamos a conversão para String para evitar o erro de serialização
            id: user.id.toString(), 
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return token;
}