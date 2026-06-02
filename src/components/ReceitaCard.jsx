import React from "react";
import { Link } from "react-router-dom";
import FavoritoBotao from "./FavoritoBotao";
import "../styles/ReceitaCard.css";

const ReceitaCard = ({
  id,
  nome,
  categoria,
  imagem,
  favoritos,
  toggleFavorito,
  receita,
}) => {
  const favorito = favoritos.some((item) => item.idMeal === id);
  return (
    <div className="receita-card">
      <FavoritoBotao
        favorito={favorito}
        onFavoritar={(e) => {
          e.preventDefault();
          toggleFavorito(receita);
        }}
      />
      <Link to={`/detalhe/${id}`}>
        <img src={imagem} className="receita-imagem" alt={nome} />
        <h3 className="receita-titulo">{nome}</h3>
        <p className="receita-categoria">Categoria: {categoria}</p>
      </Link>
    </div>
  );
};

export default ReceitaCard;
