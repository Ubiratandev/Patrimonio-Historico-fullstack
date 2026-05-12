// index.jsx (ou onde você monta o router)
import { StrictMode } from 'react';
import { Outlet } from "react-router-dom";
import AppRouter from "./components/AppRouter"
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>
);
