import {prisma} from "../database/prisma.js"
import bcrypt from "bcrypt";
//this route want be protected
export async function getAllAdmin(){
    return(prisma.admim.findMany());
}

export async function createAdmin(email,password,role, author_id){
    // const existing = await prisma.admin.findUnique({
    // where: { email }
    // });

    // if (existing) {
    //     throw new Error("Email exist in the data base");
    // }
    if(role != "Super" || role != "Admin")
    {
        const password_hash = await bcrypt.hash(password,10);
        
        return(prisma.admin.create({
            data:{
            email,
            password:password_hash,
            role,
            author_id
            }
        }));
    }
    else return("error role");
}
export async function updateAdmin(email,password,role){
  
    return(prisma.admin.update({
        where:{id: BigInt(id)},
        data:{
            email,
            password,
            role,
            author_id
        }
    }));
}

export async function deleteAdmin(id)
{
    return(prisma.admin.delete({
        where:{id:BigInt(id)},
    }))
  
}