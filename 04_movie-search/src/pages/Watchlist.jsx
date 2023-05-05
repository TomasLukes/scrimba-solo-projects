import { useState } from 'react'
import { useFetchMovies } from '../hooks/useFetchMovies'
import WatchlistHeader from '../components/Watchlist/WatchlistHeader'
import SearchResults from '../components/SearchResults'
import Footer from '../components/shared/Footer'

const apiKey = `apikey=b9b3f97a`   

export default function Watchlist() {
  const myWatchlist = JSON.parse(localStorage.getItem('myWatchlist'))     

  async function fetchWatchlist(myWatchlist) {
    try {
        if (myWatchlist.length) {
        const savedMovies = await Promise.all(myWatchlist.map(async (movie) => {
            const response = await fetch(`https://www.omdbapi.com/?i=${movie}&${apiKey}`);
            const data = await response.json();
            return data;
        }));
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
      <WatchlistHeader fetchMovies={fetchMovies} />
      <p>Something happend</p>
      <SearchResults results={searchResults} />
      <Footer />
    </>
  )
}