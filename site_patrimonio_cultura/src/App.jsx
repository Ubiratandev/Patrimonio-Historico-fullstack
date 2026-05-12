
// App.jsx
// Apenas o conteúdo comum a todas as rotas
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import {useEffect, useState} from "react";
// import {initAnalytics, trackPage }from './analytics'
// import { useLocation } from "react-router-dom";
// import CookieBanner from "./CookieBanner";
// import './App.css'

// function App({ children }) {  
  
//  const [cookiesAccepted, setCookiesAccepted] = useState(false);
 
//  useEffect(() => {
//     const accepted = localStorage.getItem("cookiesAccepted") === "true";
//     setCookiesAccepted(accepted);
//   }, []);

//   useEffect(() => {
//     if (cookiesAccepted) {
//       initAnalytics();
//     }
//   }, [cookiesAccepted]);

//   return (
//     <>
//      {!cookiesAccepted && (
//         <CookieBanner onAccept={() => setCookiesAccepted(true)} />
//       )}
//       <Header />
//       {children}
//       <Footer />
//     </>
//   )
// }

// export default App
// /home/bira/site_patrimonio/site_patrimonio_cultura/src/App.jsx

// /home/bira/site_patrimonio/site_patrimonio_cultura/analytics/analytics.js

// /home/bira/site_patrimonio/site_patrimonio_cultura/src/components/CookiesBanner.jsx

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { initAnalytics } from './analytics';
import CookieBanner from "./components/CookiesBanner";
import './App.css'

function App({ children }) {  
  // const [cookiesAccepted, setCookiesAccepted] = useState(false);
 
const [cookiesAccepted, setCookiesAccepted] = useState(() => {
  return localStorage.getItem("cookiesAccepted");
});

  useEffect(() => {
    if (cookiesAccepted) {
      initAnalytics();
    }
  }, [cookiesAccepted]);

  
  return (
    <>
  
      

    {!cookiesAccepted && (
  <CookieBanner onAccept={() => setCookiesAccepted("true")} />
)}
    
    <Outlet /> 
  
  </>
   
  )
}

export default App;