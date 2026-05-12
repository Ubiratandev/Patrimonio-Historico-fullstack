import{
   listCategory,
  createNewCategory,
  editCategory,
  removeCategory
}from "../services/categoriesServices.js"

export async function getCategories(req,res){
    try{
        const category = await listCategory();
        res.json({
            message: "getCategories return",
            categoryCount: category.length,
            data: category
        })
    
    }
    catch(error){
        res.status(500).json({error: "error to find categories"});
    }
}

export async function postCategories(req, res){
    try{
        const {category_name} = req.body;
        const category = await createNewCategory(category_name);
        res.status(201).json(category);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }

}

export async function putCategories(req,res){
    try{
        const {id} = req.params;
        const {category_name} = req.body;
        const uptdated = await editCategory(id,{category_name});
        res.json(uptdated);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

export async function deleteCategoryController(req, res){
    try{
        const {id} = req.params;
        const deleted = await removeCategory(id);
        res.json({
            message: "category deleted with success",
            deleted_categories: deleted

        })
    }
    catch(error)
    {
          if (error.code === "P2025") {
      return res.status(404).json({ error: "Category not found" });
    }

    // res.status(400).json({ error: "Erro ao deletar" });
    console.error(error); // 👈 ESSENCIAL
res.status(400).json({ error: error.message });
}
}