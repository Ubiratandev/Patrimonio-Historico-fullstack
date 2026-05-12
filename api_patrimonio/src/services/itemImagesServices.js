import {
    getAllItemImages,
    createItemImages,
    updateItemImages,
    deleteItemImages
    
}from "../repositories/itemImagesRepository.js"

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function listItemImages(){
    const itemImages = await getAllItemImages();
    return(serializeBigInt(itemImages));
}
export async function createNewItemImages(item_id, url, items)
{
    if(item_id || url || items)throw new Error("fields item_id and author_id not be empty");
    const itemImages = await createItemImages(item_id, url, items);
    return(serializeBigInt(itemImages));

}

export async function editItemImages(id, data) {
    const {item_id, url, items} = data; 

    if(item_id || url || items) {
        throw new Error("fields id, item_id and author_id cannot be empty");
    }

    // Passa os dados para a função do Prisma
    
    const authorItem = await updateItemImages(
     item_id,
     url,
     items
    );
    return serializeBigInt(authorItem);
}

export async function removeItemImages(id){
    const deleted =  await deleteItemImages(id);
    return(serializeBigInt(deleted));
}