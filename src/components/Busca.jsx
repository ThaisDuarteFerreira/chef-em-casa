import React from "react";
import "../styles/Busca.css";

const Busca = ({ busca, setBusca, onBusca }) => {
  return (
    <div className="busca-container">
      <input
        className="busca-input"
        type="text"
        placeholder="Buscar Receita"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onBusca();
        }}
      />
      <button className="busca-botao" onClick={onBusca}>
        Buscar
      </button>
    </div>
  );
};

export default Busca;
