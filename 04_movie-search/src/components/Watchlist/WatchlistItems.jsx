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
        { savedWatchlist.length && <h2 className='watchlist__header'><span className='watchlist__header-border'>This is your watchlist:</span></h2> }
        <section className="search-results" id="searchResults">
          { savedWatchlist.length ? movieCards : <EmptyWatchlist /> }
        </section>  
    </main>
  );
}
