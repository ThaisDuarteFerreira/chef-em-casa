import React from "react";
import "../styles/ErroBusca.css";

const ErroBusca = ({ onReset }) => {
  return (
    <>
      <div className="erro-container">
        <p className="erro-texto">Nenhuma receita encontrada para sua busca</p>
        <button className="erro-botao" onClick={onReset}>
          Mostrar lista de receitas novamente
        </button>
      </div>
    </>
  );
};

export default ErroBusca;
