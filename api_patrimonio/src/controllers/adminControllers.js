import{
    listAdmin,
    createNewAdmin,
    editAdmin,
    removeAdmin
}from "../services/adminServices.js"

export async function getAdmin(req,res){
    try{
        const admin = await listAdmin()
        res.json({
            message:"get success",
            lengh: admin.length,
            data: admin
        })
    }
    catch(error){
        
        res.status(500).json({error:"error to get admin"});
    }
}

export async function postAdmin(req, res)
{
    try{
        const { 
            email,
            password,
            role,
            author_id
        } = req.body;
        const item = await createNewAdmin( 
            email,
            password,
            role,
            author_id);
        res.status(201).json({item});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function putAdmin(req, res)
{
    try{
        const {id} = req.params;
        const {  email,
            password,
            role,
            author_id} = req.body;

        const uptdated = await editAdmin(id,{  email,
            password,
            role,
            author_id});
        res.status(201).json({uptdated});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function deleteAdminController(req, res){
    try{
        const {id} = req.params;
        const deleted = await removeAdmin(id);
        res.json({
            message: "item deleted with success",
            deleted_admin: deleted

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