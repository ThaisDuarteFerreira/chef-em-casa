import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarReceitaPorId } from "../services/api";
import "../styles/Detalhes.css";
import Loading from "../components/Loading";

const Detalhes = () => {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  React.useEffect(() => {
    async function carregar() {
      const dados = await buscarReceitaPorId(id);
      setReceita(dados);
    }
    carregar();
  }, [id]);

  function pegarIngredientes(receita) {
    const ingredientes = [];
    for (let i = 1; i <= 20; i++) {
      const ingrediente = receita[`strIngredient${i}`];
      const medida = receita[`strMeasure${i}`];
      if (ingrediente && ingrediente.trim() !== "") {
        ingredientes.push({ ingrediente, medida });
      }
    }
    return ingredientes;
  }
  return (
    <div className="detalhes-container">
      <Link className="voltar" to="/">
        Voltar para Home
      </Link>

      <h1>Detalhes da Receita</h1>

      {!receita && <Loading />}

      {receita && (
        <div className="detalhes-card">
          <img
            src={receita.strMealThumb}
            alt={receita.strMeal}
            className="detalhes-imagem"
          />

          <div className="detalhes-conteudo">
            <h2>{receita.strMeal}</h2>
            <div className="info">
              <span>Categoria: {receita.strCategory}</span>
              <span>Origem: {receita.strArea}</span>
            </div>
            <h3>Ingredientes:</h3>

            <ul className="ingredientes-lista">
              {pegarIngredientes(receita).map((item, index) => (
                <li key={index}>
                  {item.medida} - {item.ingrediente}
                </li>
              ))}
            </ul>
            <h3>Modo de Preparo:</h3>
            <p className="instrucoes">{receita.strInstructions}</p>
          </div>

          {receita.strYoutube && (
            <div className="video-container">
              <h3>Vídeo da Receita</h3>

              <iframe
                src={`https://www.youtube.com/embed/${
                  receita.strYoutube.split("v=")[1]
                }`}
                title="Vídeo da Receita"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Detalhes;
