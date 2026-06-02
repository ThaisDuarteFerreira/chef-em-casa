import React from "react";
import "../styles/Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-texto">Carregando receitas...</p>
    </div>
  );
};

export default Loading;
