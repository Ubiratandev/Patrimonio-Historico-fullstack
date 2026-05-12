import {prisma} from "../database/prisma.js"

export async function getAllItemAuthor(){
    return(prisma.item_authors.findMany());
}

export async function createItemAuthor(item_id, author_id){
    return(prisma.item_authors.create({
        data:{
            item_id,
            author_id
        }
    }));
}
export async function updateItemAuthor(id,item_id, author_id){
  
    return(prisma.item_authors.update({
        where:{id: BigInt(id)},
        data:{
            item_id,
            author_id
        }
    }));
}

export async function deleteItemAuthor(id)
{
    return(prisma.item_authors.delete({
        where:{id:BigInt(id)},
    }))
  
}