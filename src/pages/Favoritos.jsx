import React from "react";
import ReceitaCard from "../components/ReceitaCard";
import "../styles/Home.css";
import "../styles/Favoritos.css";

const Favoritos = ({ favoritos, toggleFavorito }) => {
  return (
    <div>
      <h2 className="favoritos-titulo">Minhas Receitas Favoritas</h2>

      {favoritos.length === 0 ? (
        <p>Você ainda não adicionou receitas favoritas ⭐</p>
      ) : (
        <div className="receitas-grid">
          {favoritos.map((receita) => (
            <ReceitaCard
              key={receita.idMeal}
              id={receita.idMeal}
              nome={receita.strMeal}
              categoria={receita.strCategory}
              imagem={receita.strMealThumb}
              favoritos={favoritos}
              toggleFavorito={toggleFavorito}
              receita={receita}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
