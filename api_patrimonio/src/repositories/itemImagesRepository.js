import {prisma} from "../database/prisma.js"

export async function getAllItemImages(){
    return(prisma.item_images.findMany());
}

export async function createItemImages(item_id, url, items){
    return(prisma.item_images.create({
        data:{
         item_id,
         url,
         items
        }
    }));
}
export async function updateItemImages(item_id, url, items){
  
    return(prisma.item_images.update({
        where:{id: BigInt(id)},
        data:{
          item_id,
          url,
          items
        }
    }));
}

export async function deleteItemImages(id)
{
    return(prisma.item_images.delete({
        where:{id:BigInt(id)},
    }))
  
}