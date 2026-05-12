import {
    getAllItemAuthor,
    createItemAuthor,
    updateItemAuthor,
    deleteItemAuthor
    
}from "../repositories/itemAuthorRepository.js"

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function listItemAuthor(){
    const itemAuthor = await getAllItemAuthor();
    return(serializeBigInt(itemAuthor));
}
export async function createNewItemAuthor(item_id, author_id)
{
    if(!item_id || !author_id)throw new Error("fields item_id and author_id not be empty");
    const authorItem = await createItemAuthor(item_id, author_id);
    return(serializeBigInt(authorItem));

}

export async function editItemAuthor(id, data) {
    const { item_id, author_id } = data; 

    if(!id || !item_id || !author_id) {
        throw new Error("fields id, item_id and author_id cannot be empty");
    }

    // Passa os dados para a função do Prisma
    
    const authorItem = await updateItemAuthor(
        id,          
        data.item_id,  
        data.author_id 
    );
    return serializeBigInt(authorItem);
}

export async function removeItemAuthor(id){
    const deleted =  await deleteItemAuthor(id);
    return(serializeBigInt(deleted));
}