export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resultCategories = await categories.json();
  return resultCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const buscaCategoria = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
  const buscaQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const pesquisa = query ? await fetch(buscaQuery) : fetch(buscaCategoria);
  const resultPesquisa = await pesquisa.json();
  return resultPesquisa;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
