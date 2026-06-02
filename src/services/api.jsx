const URL_BASE = "https://www.themealdb.com/api/json/v1/1";

export async function buscarReceitas(nome = "") {
  const resposta = await fetch(`${URL_BASE}/search.php?s=${nome}`);
  const dados = await resposta.json();
  return dados.meals || [];
}

export async function buscarReceitaPorId(id) {
  const resposta = await fetch(`${URL_BASE}/lookup.php?i=${id}`);
  const dados = await resposta.json();
  return dados.meals ? dados.meals[0] : null;
}
