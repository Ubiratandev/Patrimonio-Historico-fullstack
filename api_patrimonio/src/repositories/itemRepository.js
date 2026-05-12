import {prisma} from "../database/prisma.js"

export async function getAllItem(){
    return(prisma.items.findMany());
}

export async function createItem(title, text, reference, slug, open_to_visitation, heritage_status
   
){
    return(prisma.items.create({
        data:{
            title, text,
            reference, 
            slug,
            open_to_visitation,
            heritage_status,
            
        }
    }));
}
export async function updateItem(title, text, reference, slug, open_to_visitation, heritage_status
   , category_items, item_authors,item_images, staging_table){
  
    return(prisma.items.update({
        where:{id: BigInt(id)},
        data:{
            title, text,
            reference, 
            slug,
            open_to_visitation,
            heritage_status,
            category_items,
            item_authors,
            item_images,
            staging_table
        }
    }));
}

export async function deleteItem(id)
{
    return(prisma.items.delete({
        where:{id:BigInt(id)},
    }))
  
}