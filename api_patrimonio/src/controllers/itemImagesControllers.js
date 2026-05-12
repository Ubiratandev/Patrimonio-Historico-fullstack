import{
    listItemImages,
    createNewItemImages,
    editItemImages,
    removeItemImages
}from "../services/itemImagesServices.js"

export async function getItemImage(req,res){
    try{
        const itemImage = await listItemImages()
        res.json({
            message:"get success",
            lengh: itemImage.length,
            data: itemImage
        })
    }
    catch(error){
        
        res.status(500).json({error:"error to get itemImage"});
    }
}

export async function postItemImage(req, res)
{
    try{
        const {item_id, url, items} = req.body;
        const itemImage = await createNewItemImages(item_id, url, items);
        res.status(201).json({itemImage});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function putItemImage(req, res)
{
    try{
        const {id} = req.params;
        const {item_id, url, items} = req.body;
        const uptdated = await editItemImages(id,{item_id, url, items});
        res.status(201).json({uptdated});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function deleteItemImageController(req, res){
    try{
        const {id} = req.params;
        const deleted = await removeItemImages(id);
        res.json({
            message: "item Image deleted with success",
            deleted_itemAuthor: deleted

        })
    }
    catch(error)
    {
          if (error.code === "P2025") {
      return res.status(404).json({ error: "item image not found" });
    }

    // res.status(400).json({ error: "Erro ao deletar" });
    console.error(error); // 👈 ESSENCIAL
res.status(400).json({ error: error.message });
}
}