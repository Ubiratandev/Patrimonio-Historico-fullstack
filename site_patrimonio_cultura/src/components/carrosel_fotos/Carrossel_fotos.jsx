import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carrossel_fotos.css";

const Carrossel_Fotos = ({ image }) => {
  const imagens = Array.isArray(image) ? image : [image]; // garante array

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 10,
    },
  });

  return (
    <div className="carrossel-fotos-container">
        <div className="botoes">
        <button onClick={() => slider.current?.prev()}>&larr;</button>
      
      </div>
      <div ref={sliderRef} className="keen-slider">
        {imagens.map((imagem, index) => (
          <div className="keen-slider__slide" key={index}>
            <img src={imagem} alt={`Slide ${index}`} />
            <div>
            <h6>{`foto ${index+1}`}</h6>
            </div>
          </div>
        ))}
      </div>

      <div className="botoes">
        
        <button onClick={() => slider.current?.next()}>&rarr;</button>
      </div> 
    </div>
  );
};

export default Carrossel_Fotos;
