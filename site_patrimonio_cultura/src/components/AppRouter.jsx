import { StrictMode } from 'react';
import {useState, useEffect} from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Pagina_principal from './Paginas_principal/Pagina_principal';
import patrimonios from './objetos/patrimonios';
import Main_categorias from './main_categorias/Main_categorias';
import Formulario from './formulario/Formulario';
import App from '../App';
import { Outlet } from "react-router-dom";


const norm = (s) =>
  typeof s === "string"
    ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
    : "";

function AppRouter(){

    
    const [categoriias, setCategoriias] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
      async function fetchCategories(){
        try
        {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
         const formattedCategories = data.data.map((newCat) => {
            return {
              ...newCat,
              slug: norm(newCat.category_name).replace(/\s+/g, "-"),
            };
          });
        setCategoriias(formattedCategories);
      }
        catch(error)
        {
          console.error("error", error);
        }
      }
      fetchCategories();
    },[])
    
    const categoriasRoutes = categoriias.map((categoria) => ({
      path: `/categoria/${categoria.slug}`,
      element: <Main_categorias categoria={categoria} />, // ✅ só aqui passamos props
    }));
    
    const patrimoniosRoutes = patrimonios.map((patrimonio) => ({
      path: `/patrimonio/${patrimonio.slug}`,
      element: <Pagina_principal patrimonio={patrimonio} />,
    }));
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />, // 🔥 ESSENCIAL
        children: [
          {
            path: "/",
            element: <Home />,
          },
          ...patrimoniosRoutes,
          ...categoriasRoutes,
          {
            path: "/formulario",
            element: <Formulario />,
          },
          {
            path: "*",
            element: <Home />,
          },
        ],
      },
    ]);
    return(<RouterProvider router ={router}/>)
}export default AppRouter;