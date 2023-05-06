import MovieCard from '../shared/MovieCard'
import EmptyWatchlist from './EmptyWatchlist'
import { useState, useEffect } from 'react';

export default function WatchlistItems({ savedMoviesData, savedWatchlist, updateWatchlist }) {

  const movieCards = savedMoviesData.map((movie) => {
    let inWatchlist = savedWatchlist.includes(movie.imdbID);
    return (
      <MovieCard
      key={movie.imdbID}
      inWatchlist={inWatchlist}
      updateWatchlist={updateWatchlist}
      imdbID={movie.imdbID}
      Poster={movie.Poster}
      Title={movie.Title}
      Metascore={movie.Metascore}
      Runtime={movie.Runtime}
      Genre={movie.Genre}
      Plot={movie.Plot} />
    )});

  return (
    <main>
        <section className="search-results" id="searchResults">
          { savedWatchlist.length ? movieCards : <EmptyWatchlist /> }
        </section>  
    </main>
  );
}
