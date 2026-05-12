import React from "react";
import '../../App.css'
import selo from "../../assets/selo.png"

import header_logo from "./assets/header_novo.jpg"
import CarrosselPontos from "../carrossel/Carrossel";
import abertos_para_visitacao from "../objetos/abertos_para_visitacao";
import patrimonios from "../objetos/patrimonios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header =({render_abertos})=>{
  

        return(
        <div className="Header_main" >
            <div className="conteiner">
                 <img src={header_logo} alt="logotipo do projeto patrimonio 
            cultural de Barra do Pirai contendo a logo da PINAB" className="logo_header" />          
            <div className="menu_bar">
                <Link to="/">Home</Link>
                <Link to="/patrimonio/sobre-o-portal">Sobre o Portal</Link>
                 <Link to="/patrimonio/%60O-que-é-o-patrimônio-cultural">Sobre o Patrimônio</Link>
                <Link to="/formulario">Fale conosco</Link>
                
            </div>
           
            </div>
            {render_abertos == true?
           <div className="banner_perola">
            <h2>Entra, fica à vontade! Vem ver este Portal sobre o patrimônio cultural barrense: aqui estão bens culturais inventariados e/ou protegidos nas instâncias municipal, estadual e federal, mas também bens de interesse cultural, reconhecidos apenas popularmente. Aqueles reconhecidos formalmente pelo Município recebem, inclusive, um selo de identificação {<img src={selo} className="selo_header"></img>}. Viva o patrimônio cultural de Barra do Piraí!</h2>
           </div>
           :null
            }
           
          {render_abertos == true ? patrimonios.some(p => p.aberto_visitacao) && (
  <CarrosselPontos
    pontos={patrimonios.filter(p => p.aberto_visitacao)}
    titulo={"Abertos para visitação"}
  />
) : null} 

        </div>
    )
}
export default Header;