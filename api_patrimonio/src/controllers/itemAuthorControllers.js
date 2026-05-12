import{
    listItemAuthor,
    createNewItemAuthor,
    editItemAuthor,
    removeItemAuthor
}from "../services/itemAuthorService.js"

export async function getItemAuthor(req,res){
    try{
        const itemAuthor = await listItemAuthor()
        res.json({
            message:"get success",
            lengh: itemAuthor.length,
            data: itemAuthor
        })
    }
    catch(error){
        
        res.status(500).json({error:"error to get itemAuthor"});
    }
}

export async function postItemAuthor(req, res)
{
    try{
        const {item_id , author_id} = req.body;
        const itemAuthor = await createNewItemAuthor(item_id, author_id);
        res.status(201).json({itemAuthor});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function putItemAuthor(req, res)
{
    try{
        const {id} = req.params;
        const {item_id , author_id} = req.body;
        const uptdated = await editItemAuthor(id,{item_id, author_id});
        res.status(201).json({uptdated});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function deleteItemAuthorController(req, res){
    try{
        const {id} = req.params;
        const deleted = await removeItemAuthor(id);
        res.json({
            message: "item author deleted with success",
            deleted_itemAuthor: deleted

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