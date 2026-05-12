// components/main_categorias/Main_categorias.jsx
import React from "react";
import patrimonios from "../objetos/patrimonios";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import "./main_categorias.css";
import {useEffect} from "react";

// normaliza: remove acento, lower case e trim
const norm = (s) =>
  typeof s === "string"
    ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
    : "";

const Main_categorias = ({ categoria }) => {
  // se a rota foi criada corretamente, categoria virá por prop
  if (!categoria) {
    return (
      <div className="main_categorias">
        <Header />
        <p>Categoria não informada.</p>
        <Footer />
      </div>
    );
  }
  console.table(categoria);
  const tituloCatN = norm(categoria.category_name); // título da categoria normalizado
  
  // filtra patrimonios que tenham essa categoria no array `categoria`
  const filtrados = patrimonios.filter((patrimonio) => {
    if (!patrimonio.categoria) return false;
    // console.table(patrimonio.categoria);

    if (Array.isArray(patrimonio.categoria)) {
      return patrimonio.categoria.some((c) => norm(c) === tituloCatN);
    }

    // caso raro: campo categoria como string
    return norm(patrimonio.categoria) === tituloCatN;
  });

  useEffect(()=>{
    async function fetchCategories(){
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
    }
    fetchCategories();
  },[])

  return (
    <div className="main_categorias">
      <div className="this_header_container"><Header /></div>

      <h1>{categoria.titulo}</h1>
      {filtrados.length > 0 ? (
        filtrados.map((patrimonio) => (
          <div key={patrimonio.slug} className="render_patrimonios">
            <Link to={`/patrimonio/${patrimonio.slug}`}>
              <h2>{patrimonio.titulo}</h2>
            </Link>
            <img src={patrimonio.imagem[0]} alt={patrimonio.titulo} />
            <p>{patrimonio.descricao}</p>
          </div>
        ))
      ) : (
        <p>Nenhum patrimônio encontrado nessa categoria.</p>
      )}

      <Footer />
    </div>
  );
};

export default Main_categorias;
