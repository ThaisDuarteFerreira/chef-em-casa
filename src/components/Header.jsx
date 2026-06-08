import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-titulo">Chef em Casa</h1>
      <p className="header-subtitulo">Descubra receitas deliciosas</p>
      <nav className="header-nav">
        <Link
          to="/"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Home
        </Link>{" "}
        | <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
};

export default Header;
