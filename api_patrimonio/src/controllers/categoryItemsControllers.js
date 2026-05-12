import{
    listCategoryItems,
    createNewCategoryItems,
    editCategoryItems,
    removeCategoryItems
}from "../services/categoryItemsService.js"

export async function getCategoryItems(req,res){
    try{
        const categoryItems = await listCategoryItems()
        res.json({
            message:"get success",
            lengh: categoryItems.length,
            data: categoryItems
        })
    }
    catch(error){
        
        res.status(500).json({error:"error to get itemAuthor"});
    }
}

export async function postCategoryItems(req, res)
{
    try{
        const {category_id, item_id, categories, item} = req.body;
        const categoryItems = await createNewCategoryItems(category_id, item_id, categories, item);
        res.status(201).json({categoryItems});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function putCategoryItems(req, res)
{
    try{
        const {id} = req.params;
        const {category_id, item_id, categories, item} = req.body;
        const uptdated = await editCategoryItems(id,{category_id, item_id, categories, item});
        res.status(201).json({uptdated});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function deleteCategoryItemsController(req, res){
    try{
        const {id} = req.params;
        const deleted = await removeCategoryItems(id);
        res.json({
            message: "item category items deleted with success",
            deleted_categoryItems: deleted

        })
    }
    catch(error)
    {
          if (error.code === "P2025") {
      return res.status(404).json({ error: "item author not found" });
    }

    // res.status(400).json({ error: "Erro ao deletar" });
    console.error(error); // 👈 ESSENCIAL
res.status(400).json({ error: error.message });
}
}