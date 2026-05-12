import {
    getAllItem,
    createItem,
    updateItem,
    deleteItem
    
}from "../repositories/itemRepository.js"

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function listItem(){
    const item = await getAllItem();
    return(serializeBigInt(item));
}
export async function createNewItem(title, text, reference, slug, open_to_visitation, heritage_status
   )
{
    if(!title || !text || !reference || !slug || !open_to_visitation || !heritage_status
   )throw new Error("fields not be empty");
    const item = await createItem(title, text, reference, slug, open_to_visitation, heritage_status
  );
    return(serializeBigInt(item));

}

export async function editItem(id, data) {
    const { title, text, reference, slug, open_to_visitation, heritage_status
   , category_items, item_authors,item_images, staging_table} = data; 

    if(!title || !text || !reference || !slug || !open_to_visitation || !heritage_status
   || !category_items || !item_authors || !item_images || !staging_table) {
        throw new Error("fields id, item_id and author_id cannot be empty");
    }

    // Passa os dados para a função do Prisma
    
    const item = await updateItem(
            data,
            data.title,
            data.text,
            data.reference, 
            data.slug,
            data.open_to_visitation,
            data.heritage_status,
          
    );
    return serializeBigInt(item);
}

export async function removeItem(id){
    const deleted =  await deleteItem(id);
    return(serializeBigInt(deleted));
}