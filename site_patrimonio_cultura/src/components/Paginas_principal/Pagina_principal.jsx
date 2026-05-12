import Header from "../header/Header";
import Footer from "../footer/Footer";
import Carrossel_Fotos from "../carrosel_fotos/Carrossel_fotos";
import estrela from "../../assets/estrelinha.png"
import"./pagina_principal.css"
import selo from "../../assets/selo.png"
const Pagina_principal = (props) =>{
    const paragrafos = props.patrimonio.texto.trim().split('\n\n');
    const referencias= props.patrimonio.referencias.trim().split('\n\n')
    return(
        <div className="main_pagina_principal">
            <div className="container_header_pagina_principal"><Header render_abertos ={false}/></div>
            <h1 className="justify">{props.patrimonio.titulo} {props.patrimonio.tombado == true ? <div className="div_estrela2"><img src={selo}></img></div>:null}</h1>
            <h4 className="justify">{props.patrimonio.autor}</h4>
            
            {/* <Carrossel_Fotos image = {props.patrimonio.imagem}/> */}
           {props.patrimonio.imagem.length > 0 ? <Carrossel_Fotos image = {props.patrimonio.imagem}/> :null } 
            <h4 className="justify">{props.patrimonio.localizacao}</h4>
           <h4
  className="justify"
  dangerouslySetInnerHTML={{
    __html: props.patrimonio.texto.replace(/\n/g, "<br/>")
  }}
/>
            {referencias.map((referencia ,index)=>(
                <div className="container_referencias">
                      <p key={index} className="justify">{referencia}</p>
                </div>
              
            ))}
            <Footer/>
        </div>

    )
}
export default Pagina_principal;