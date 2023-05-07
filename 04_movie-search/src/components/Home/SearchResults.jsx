import MovieCard from '../shared/MovieCard'
import BeforeSearch from './BeforeSearch'

export default function SearchResults({ searchResults, savedWatchlist, updateWatchlist }) {

  const movieCards = searchResults.map((movie) => {
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
        <section className="search-results">
          { movieCards.length ? movieCards : <BeforeSearch /> }
        </section>  
    </main>
  );
}
