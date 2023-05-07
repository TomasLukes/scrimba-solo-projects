import { useState } from 'react';

const apiKey = 'apikey=b9b3f97a';

export function useFetchMovies() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataNotFound, setDataNotFound] = useState(false);


  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fetchMovies(searchTerm) {
    setDataNotFound(false);
    setIsLoading(true);
    try {
      await delay(500)
      const response = await fetch(`https://www.omdbapi.com/?${apiKey}&s=${searchTerm}`);
      const data = await response.json();
      const searchedMovies = data.Search;

      if (!searchedMovies) {
        setDataNotFound(true);
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
    setIsLoading(false)
  }

  return { searchResults, fetchMovies, isLoading, dataNotFound };
}
