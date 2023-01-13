export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resultCategories = await categories.json();
  return resultCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const handleApi = await api.json();
  return handleApi;
}

export async function getProductById(productId) {
  const api = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const handleApi = await api.json();
  return handleApi;
}
