import{
     getAllCategories,
    createCategories,
    updateCategories,
    deleteCategories,
}from "../repositories/categoriesRepository.js";


function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function listCategory(){
     const categories = await getAllCategories();
     return(serializeBigInt(categories));

}

export async function createNewCategory(category_name){
    if(!category_name)throw new Error("categoryName not be empty");
    const category = await createCategories(category_name);
    return(serializeBigInt(category));
}

export async function editCategory(id,categoryName){
    if(!categoryName)throw new Error("categoryName not be empty");
    const category = await updateCategories(id,categoryName);
    return(serializeBigInt(category));
}

export async function removeCategory(id){
    const deleted =  await deleteCategories(id);
    return(serializeBigInt(deleted));
}