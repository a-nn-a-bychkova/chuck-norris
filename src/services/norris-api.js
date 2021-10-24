const BASE_URL = 'https://api.chucknorris.io/jokes/';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// export function fetchCategories() {
//   return fetchWithErrorHandling(`${BASE_URL}categories`);
// }
// export function fetchRandomJokeOfCategory() {
//   return fetchWithErrorHandling(`${BASE_URL}random?category={category}`);
// }

export function fetchAnyJoke() {
  return fetchWithErrorHandling(`${BASE_URL}random`);
}

export function fetchCategories() {
  return fetch('https://api.chucknorris.io/jokes/categories').then(response =>
    response.json(),
  );
}
export function fetchRandomJokeOfCategory(category) {
  return fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`,
  ).then(response => response.json());
}

export function fetchRandomJoke() {
  return fetch('https://api.chucknorris.io/jokes/random').then(response =>
    response.json(),
  );
}
