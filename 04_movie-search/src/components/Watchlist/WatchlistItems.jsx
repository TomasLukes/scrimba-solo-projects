import MovieCard from '../shared/MovieCard'
import EmptyWatchlist from './EmptyWatchlist'

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
    )}
  );

  return (
    <main className='watchlist-main'>
      <section className="search-results">
        {!savedWatchlist.length && <EmptyWatchlist /> }
        { savedWatchlist.length > 0 && <h2 className='watchlist__header'><span className='watchlist__header-border'>Movies in Your Watchlist</span></h2> }
        { savedWatchlist.length > 0 && movieCards }
      </section>  
    </main>
  );
}
