import categorias from '../objetos/categorias';
import CarrosselPontos from '../carrossel/Carrossel';
import patrimonios from "../objetos/patrimonios";
import { useMemo, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Categorias.css"


// Normaliza strings: remove acentos, baixa caixa, trim]

const norm = (s) =>
  typeof s === "string"
    ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
    : "";  

const Categorias = () => {
  const [busca, setBusca] = useState("");
  const [encontrados, setEncontrados] = useState([]);

  const handleSearch = (e) => setBusca(e.target.value);

  const handleBuscar = () => {
    const palavras = norm(busca).split(/\s+/).filter(Boolean);
    const resultados = patrimonios.filter((item) => {
      const tituloN = norm(item.titulo);
      return palavras.some((p) => tituloN.includes(p));
    });
    setEncontrados(resultados);
  };

   const [catFormated, setCatFormated] = useState([]);
   const [loading, setLoading]= useState(true);
   useEffect(() => {
  async function fetchCategories() {
    try {
      const response = await fetch("http://localhost:3000/categories");

      const data = await response.json();

      const formattedCategories = data.data.map((newCat) => {
        return {
          ...newCat,
          slug: norm(newCat.category_name).replace(/\s+/g, "-"),
        };
      });

      setCatFormated(formattedCategories);
      setLoading(false);
      // console.table(catFormated);
      
      // {console.log(`aquuiiiiiiiiiiiiiiiii${catFormated}`)}

    } catch (error) {
      console.error("erro aqui", error);
    }
  }

  fetchCategories();
}, []);

  // Para cada categoria, anexa os patrimônios que possuem essa categoria no array `categoria`
  const categoriasComPontos = useMemo(() => {
    return catFormated
      .map((cat) => {
        const tituloCatN = norm(cat.category_name);
        const pontos = patrimonios.filter(
          (p) =>
            Array.isArray(p.categoria) &&
            p.categoria.some((c) => norm(c) === tituloCatN)
            
        );
        return { ...cat, pontos };
      })
      .filter((cat) => cat.pontos.length > 0); // só renderiza categorias que têm algo
  }, [catFormated]);

  const temBusca = busca.trim().length > 0;

useEffect(() => {
}, [catFormated]);  
return (
    !loading ? (
    <div>
      <div className="pesquisa">
        <input
          type="text"
          placeholder="Buscar..."
          className="input_search"
          value={busca}
          onChange={handleSearch}
        />
        <button onClick={handleBuscar}>Pesquisar</button>
      </div>

      {encontrados.length > 0 ? (
        // 🔎 Quando há resultados da busca, mostra um carrossel com os encontrados
        <div className="main_container_categorias">
          <h1>Resultados</h1>
          <CarrosselPontos
            pontos={encontrados}
            titulo={"Resultados da busca"}
            className="carrossel_categ"
          />
        </div>
      ) : temBusca ? (
        // 🛑 Busca feita mas sem resultados
        <p style={{ padding: 16 }}>Nenhum resultado encontrado.</p>
      ) : (
        // 📚 Sem busca ativa: lista categorias, cada uma com seus patrimônios filtrados
        
        categoriasComPontos.map((categoria, index) => (
          <div key={index} className="main_container_categorias">
            
            <h1>
              
              <Link to={`categoria/${categoria.slug}`}>{categoria.category_name}</Link>
            </h1>

            <CarrosselPontos
              pontos={categoria.pontos}
              titulo={""}
              className="carrossel_categ"
            />

          </div>
        ))
      )}
    </div>) : (<h1>loading</h1>)
  );
};

export default Categorias;
