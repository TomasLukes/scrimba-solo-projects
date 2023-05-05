import { useState } from 'react';

const apiKey = 'apikey=b9b3f97a';

export function useFetchMovies() {
  const [searchResults, setSearchResults] = useState([]);

  async function fetchMovies(searchTerm) {
    try {
      const response = await fetch(`https://www.omdbapi.com/?${apiKey}&s=${searchTerm}`);
      const data = await response.json();
      const searchedMovies = data.Search;

      if (!searchedMovies) {
        console.log('<p>Unable to find what you’re looking for. Please try another search.</p>');
      } else {
        const detailedMovies = await Promise.all(
          searchedMovies.map(async (movie) => {
            const detailedResponse = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&${apiKey}`);
            const detailedData = await detailedResponse.json();
            return detailedData;
          })
        );
        setSearchResults(detailedMovies);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return [searchResults, fetchMovies];
}
