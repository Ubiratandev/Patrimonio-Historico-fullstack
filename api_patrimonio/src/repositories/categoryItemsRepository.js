import {prisma} from "../database/prisma.js"

export async function getAllCategoryItems(){
    return(prisma.category_items.findMany());
}

export async function createCategoryItems(category_id, item_id, categories, items){
    return(prisma.category_items.create({
        data:{
           category_id,
           item_id,
           categories,
           items
        }
    }));
}
export async function updateCategoryItems(category_id, item_id, categories, items){
  
    return(prisma.category_items.update({
        where:{id: BigInt(id)},
        data:{
            category_id,
            item_id,
            categories,
            items
        }
    }));
}

export async function deleteCategoryItems(id)
{
    return(prisma.category_items.delete({
        where:{id:BigInt(id)},
    }))
  
}