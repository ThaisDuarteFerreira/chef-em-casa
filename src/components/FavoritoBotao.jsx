import React from "react";
import "../styles/FavoritoBotao.css";

const FavoritoBotao = ({ favorito, onFavoritar }) => {
  return (
    <button
      className="favorito-btn"
      onClick={onFavoritar}
      aria-label={
        favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"
      }
    >
      {favorito ? "⭐" : "☆"}
    </button>
  );
};

export default FavoritoBotao;
