import {
    getAllAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
    
}from "../repositories/adminRepository.js"

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function listAdmin(){
    const admin = await getAllAdmin();
    return(serializeBigInt(admin));
}
export async function createNewAdmin(email,password,role,author_id)
{
    if(!email || !password || !role)throw new Error("fields not be empty");
    const admin = await createAdmin(email,password,role,author_id);
    return(serializeBigInt(admin));

}

export async function editAdmin(id, data) {
    const { email,password,role,author_id} = data; 

    if(email || password || role) {
        throw new Error("fields cannot be empty");
    }

    // Passa os dados para a função do Prisma
    
    const admin = await updateAdmin(
        id,
        data.email,
        data.password,
        data.role,
        data.author_id
    );
    return serializeBigInt(admin);
}

export async function removeAdmin(id){
    const deleted =  await deleteAdmin(id);
    return(serializeBigInt(deleted));
}