import {
    getAllCategoryItems,
    createCategoryItems,
    updateCategoryItems,
    deleteCategoryItems
    
}from "../repositories/categoryItemsRepository.js"

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function listCategoryItems(){
    const categoryItems = await getAllCategoryItems();
    return(serializeBigInt(categoryItems));
}
export async function createNewCategoryItems(category_id, item_id, categories, items)
{
    if(category_id || !item_id || !categories || !items)throw new Error("fields item_id and author_id not be empty");
    const categoryItems = await createCategoryItems(category_id, item_id, categories, items);
    return(serializeBigInt(categoryItems));

}

export async function editCategoryItems(id, data) {
    const {category_id, item_id, categories, items} = data; 

    if(category_id || !item_id || !categories || !items) {
        throw new Error("fields id, item_id and author_id cannot be empty");
    }

    // Passa os dados para a função do Prisma
    
    const authorItem = await updateCategoryItems(
     id,
     data.category_id,
     data.item_id,
     data.categories,
     data.items
    );
    return serializeBigInt(authorItem);
}

export async function removeCategoryItems(id){
    const deleted =  await deleteCategoryItems(id);
    return(serializeBigInt(deleted));
}