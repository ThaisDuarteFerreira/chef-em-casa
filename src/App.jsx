import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Favoritos from "./pages/Favoritos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/Global.css";

function App() {
  const [favoritos, setFavoritos] = React.useState(() => {
    try {
      const favoritosSalvos = localStorage.getItem("favoritos");
      return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
    } catch {
      return [];
    }
  });

  React.useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function toggleFavorito(receita) {
    const existe = favoritos.some((item) => item.idMeal === receita.idMeal);
    if (existe) {
      setFavoritos(favoritos.filter((item) => item.idMeal !== receita.idMeal));
    } else {
      setFavoritos([...favoritos, receita]);
    }
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home favoritos={favoritos} toggleFavorito={toggleFavorito} />
          }
        />
        <Route path="/detalhe/:id" element={<Detalhes />} />
        <Route
          path="/favoritos"
          element={
            <Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
