import React from "react";
import { useRef } from "react";
import "./Formulario.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import emailjs from "emailjs-com";

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_tziv0mo"
      ,   
      "template_tw1qq98",    
      form.current,
      "xEOxJio9YlZGRgtOk"     
    ).then(
      (result) => {
         alert("Mensagem enviada com sucesso");
        form.current.reset();

          
      },
      (error) => {
        alert("Erro ao enviar: " + error.text);
      }
    );
  };

  return (
    <div className="page-container">
      <Header />
        <h3>Aqui você pode indicar bens culturais para 
            serem reconhecidos
            e preservados ou até mesmo denunciar danos em algum bem cultural. Conte-nos mais sobre 
            você e sobre o que você pensa sobre a cultura de Barra do 
            Piraí. Vamos lá?
        </h3>
      <main className="mainForm">
        <form ref={form} onSubmit={sendEmail}>
          {/* 🔹 Campo de Nome */}
          <div className="nome-field">
            <label htmlFor="nome">Seu nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>

          <div className="email-field">
            <label htmlFor="email">Seu melhor e-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="select-field">
            <label htmlFor="campo-select">Selecione o assunto:</label>
            <select id="campo-select" name="assunto" required>
              <option value="">selecione</option>
              <option value="sugestao">Indicações</option>
                <option value="Dúvidas">Dúvidas</option>
                 <option value="Denúncias">Denúncias</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className="text-area-field">
            <label htmlFor="text-area">Mensagem:</label>
            <textarea id="text-area" name="mensagem" rows={10} required />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Formulario;
