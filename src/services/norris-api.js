const BASE_URL = 'https://api.chucknorris.io/jokes/';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchRandomJoke() {
  return fetchWithErrorHandling(`${BASE_URL}random`);
}

export function fetchCategories() {
  return fetchWithErrorHandling(`${BASE_URL}categories`);
}
export function fetchRandomJokeOfCategory(category) {
  return fetchWithErrorHandling(`${BASE_URL}random?category=${category}`);
}
