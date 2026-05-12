// components/CarrosselPontos.jsx
import React from "react";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Carrossel.css";
import { Link } from "react-router-dom";
import categorias from "../objetos/categorias";
import patrimonios from "../objetos/patrimonios";
import estrela from "../../../src/assets/estrelinha.png"
import selo from "../../../src/assets/selo.png"
const CarrosselPontos = ({ pontos,titulo,parametro_busca, buscador  }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3.5, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4.5, spacing: 25 },
      },
    },
  });

 {
  categorias.map((categoria,i)=>{const pontos_categoria= patrimonios.filter(novo_ponto => novo_ponto.categoria.includes(categoria.categoria))})
 } 
  return (
    <div className="carrossel-container2">
        <p>{titulo}</p>
    <div ref={sliderRef} className="keen-slider carrossel-container">
    
      {pontos.map((ponto, index) => (
      
       <Link to={`/patrimonio/${ponto.slug}`} key={index} className="keen-slider__slide card-miniatura">
       <img src={ponto.imagem[0]} alt={ponto.descricao} />
         {ponto.tombado === true && (
    <div className="selo-overlay">
      <img src={selo} alt="Selo" />
    </div>
  )}
       <h3>{ponto.titulo}</h3>
    </Link>
      ))}
    </div>
    </div>
  );
};

export default CarrosselPontos;
