import MovieCard from './shared/MovieCard'
import BeforeSearch from './Home/BeforeSearch'
import { useState, useEffect } from 'react';


export default function SearchResults({ results }) {

  const [watchlist, setWatchlist] = useState( () => {
    const savedWatchlist = localStorage.getItem('myWatchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : []
  })

  useEffect(() => {
    localStorage.setItem('myWatchlist', JSON.stringify(watchlist))}, 
    [watchlist])

  function onToggle() {

  }

  function addToWatchlist(id) {
    if (!watchlist.includes(id)) {
      setWatchlist((oldWatchlist) => {
        const updatedWatchlist = [...oldWatchlist, id]
        return updatedWatchlist;
      }) 
    }
  }

  function removeFromWatchlist(id) {
    setWatchlist((oldWatchlist) => {
      return oldWatchlist.filter((movie) => movie !== id);
    });
  }

  const movieCards = results.map((movie) => (
    <MovieCard
    key={movie.imdbID}
    inWatchlist={watchlist.includes(movie.imdbID)}
    addToWatchlist={addToWatchlist}
    removeFromWatchlist={removeFromWatchlist}
    imdbID={movie.imdbID}
    Poster={movie.Poster}
    Title={movie.Title}
    Metascore={movie.Metascore}
    Runtime={movie.Runtime}
    Genre={movie.Genre}
    Plot={movie.Plot} />
  ));

  return (
    <main>
        <section className="search-results" id="searchResults">
          { movieCards.length ? movieCards : <BeforeSearch /> }
        </section>  
    </main>
  );
}
