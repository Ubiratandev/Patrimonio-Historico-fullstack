import {prisma} from "../database/prisma.js"

export async function getAllCategories(){
    return(prisma.categories.findMany());
}

export async function createCategories(category_name){
    return(prisma.categories.create({
        data:{
            category_name
        }
    }));
}
export async function updateCategories(id, data){
    return(prisma.categories.update({
        where:{id: BigInt(id)},
        data
    }));
}


export async function deleteCategories(id){
    return(prisma.categories.delete({
        where:{id: BigInt(id)}
    }));
}