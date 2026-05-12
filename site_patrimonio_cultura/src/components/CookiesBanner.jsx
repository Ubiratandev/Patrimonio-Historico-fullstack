import {useState}from 'react';
import "./CookiesBanner.css"
import { Link } from "react-router-dom";

const CookiesBanner = ({ onAccept }) => {
  const [visible, setVisible] = useState(true)
  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    onAccept();
  };
  const handleReject =()=>{
    localStorage.setItem("cookiesAccept", "false");
    setVisible(false);
  }

  if(!visible)return(null);
  
  return (
    <div s className ="cookiesBanner">
      <p>
        Este site usa cookies para melhorar sua experiência.
      </p>
      <button onClick={handleAccept}>
        Aceitar
      </button>
      <button onClick={handleReject}>
        Rejeitar
     </button>
        <a>
                                 <Link to="/patrimonio/politica-de-privacidade">Sobre Politica de Privacidade</Link>
</a>     

    </div>
  );
};

export default CookiesBanner;
