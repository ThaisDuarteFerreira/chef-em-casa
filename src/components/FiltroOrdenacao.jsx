import React from "react";
import "../styles/FiltroOrdenacao.css";

const FiltroOrdenacao = ({
  categoria,
  categorias,
  setCategoria,
  ordem,
  setOrdem,
}) => {
  const [mostrarMenu, setMostrarMenu] = React.useState(false);
  return (
    <div className="filtro-container">
      <button
        className="filtro-botao"
        onClick={() => setMostrarMenu(!mostrarMenu)}
      >
        Filtros ⚙️
      </button>

      {mostrarMenu && (
        <div className="filtro-menu">
          <select
            className="filtro-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {" "}
            <option value="">Todas as Categorias</option>
            {categorias.map((cat, index) => {
              return (
                <option key={index} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>

          <select
            className="filtro-select"
            value={ordem}
            onChange={(e) => {
              setOrdem(e.target.value);
            }}
          >
            <option value="">Ordenar</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default FiltroOrdenacao;
