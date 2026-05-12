import{
    listItem,
    createNewItem,
    editItem,
    removeItem
}from "../services/itemService.js"

export async function getItem(req,res){
    try{
        const item = await listItem()
        res.json({
            message:"get success",
            lengh: item.length,
            data: item
        })
    }
    catch(error){
        
        res.status(500).json({error:"error to get item"});
    }
}

export async function postItem(req, res)
{
    try{
        const {  title, text,
            reference, 
            slug,
            open_to_visitation,
            heritage_status,
            category_items,
            item_authors,
            item_images,
            staging_table} = req.body;
        const item = await createNewItem( title, text,
            reference, 
            slug,
            open_to_visitation,
            heritage_status,
            category_items,
            item_authors,
            item_images,
            staging_table);
        res.status(201).json({item});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function putItem(req, res)
{
    try{
        const {id} = req.params;
        const { title, text,
            reference, 
            slug,
            open_to_visitation,
            heritage_status,
         } = req.body;

        const uptdated = await editItem(id,{ 
            title, text,
            reference, 
            slug,
            open_to_visitation,
            heritage_status,
            });
        res.status(201).json({uptdated});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function deleteItemController(req, res){
    try{
        const {id} = req.params;
        const deleted = await removeItem(id);
        res.json({
            message: "item deleted with success",
            deleted_author: deleted

        })
    }
    catch(error)
    {
          if (error.code === "P2025") {
      return res.status(404).json({ error: "item  not found" });
    }

    // res.status(400).json({ error: "Erro ao deletar" });
    console.error(error); // 👈 ESSENCIAL
res.status(400).json({ error: error.message });
}
}