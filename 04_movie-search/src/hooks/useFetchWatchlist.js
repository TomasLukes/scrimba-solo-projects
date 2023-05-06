import { useState, useEffect } from 'react';
const apiKey = 'apikey=b9b3f97a';

export function useFetchWatchlist(savedWatchlist) {
  const [savedMoviesData, setSavedMoviesData] = useState([])

  useEffect(() => {
    async function fetchWatchlist() {
      try {
        if (savedWatchlist.length) {
          const savedMoviesData = await Promise.all(
            savedWatchlist.map(async (movie) => {
              const response = await fetch(
                `https://www.omdbapi.com/?i=${movie}&${apiKey}`
              );
              const data = await response.json();
              return data;
            })
          );
          setSavedMoviesData(savedMoviesData);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchWatchlist();
  }, [savedWatchlist]);

  return savedMoviesData;
}