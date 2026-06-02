import React from "react";
import ReceitaCard from "../components/ReceitaCard";
import { buscarReceitas } from "../services/api";
import Busca from "../components/Busca";
import FiltroOrdenacao from "../components/FiltroOrdenacao";
import ErroBusca from "../components/ErroBusca";
import Loading from "../components/Loading";
import "../styles/Home.css";

const Home = ({ favoritos, toggleFavorito }) => {
  const [receitas, setReceitas] = React.useState([]);
  const [busca, setBusca] = React.useState("");
  const [erro, setErro] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [categoria, setCategoria] = React.useState("");
  const [quantidadeVisivel, setQuantidadeVisivel] = React.useState(6);
  const [ordem, setOrdem] = React.useState("");

  const categorias = [...new Set(receitas.map((r) => r.strCategory))];

  async function buscarReceitasIniciais() {
    setLoading(true);
    const dados = await buscarReceitas();

    const dadosOrdenados = [...dados].sort((a, b) =>
      a.strMeal.localeCompare(b.strMeal)
    );

    setReceitas(dadosOrdenados);

    setLoading(false);
  }

  async function buscarReceitasHandler() {
    if (busca.trim() === "") return;

    setLoading(true);

    try {
      const dados = await buscarReceitas(busca);

      if (dados.length > 0) {
        setReceitas(dados);
        setErro(false);
        setBusca("");
      } else {
        setReceitas([]);
        setErro(true);
        setBusca("");
      }
    } catch (error) {
      console.log(error);
      setErro(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    buscarReceitasIniciais();
  }, []);

  const receitasFiltradas = receitas
    .filter((receita) => {
      if (categoria === "") return true;

      return receita.strCategory === categoria;
    })
    .sort((a, b) => {
      if (ordem === "az") {
        return a.strMeal.localeCompare(b.strMeal);
      }
      if (ordem === "za") {
        return b.strMeal.localeCompare(a.strMeal);
      }
      return 0;
    });

  return (
    <>
      <FiltroOrdenacao
        categoria={categoria}
        categorias={categorias}
        setCategoria={setCategoria}
        ordem={ordem}
        setOrdem={setOrdem}
      />
      <Busca
        busca={busca}
        setBusca={setBusca}
        onBusca={buscarReceitasHandler}
      />

      {erro && (
        <ErroBusca
          onReset={() => {
            buscarReceitasIniciais();
            setErro(false);
          }}
        />
      )}

      {loading && <Loading />}
      <div className="receitas-grid">
        {!loading &&
          receitasFiltradas.slice(0, quantidadeVisivel).map((receita) => {
            return (
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
            );
          })}
      </div>

      {quantidadeVisivel < receitasFiltradas.length && (
        <button
          className="botao-vermais"
          onClick={() => {
            setQuantidadeVisivel(quantidadeVisivel + 6);
          }}
        >
          Ver Mais
        </button>
      )}
    </>
  );
};

export default Home;
