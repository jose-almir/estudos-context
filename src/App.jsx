import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ThemeContext } from "./contexts/ThemeContext";
import { Home } from "./pages/Home/Home";
import { Perfil } from "./pages/Perfil/Perfil";
import { Login } from "./pages/Login/Login";

export function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  function alternarTema() {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <ThemeContext.Provider value={{ temaEscuro, alternarTema }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
