import Loader from '../shared/Loader';
import MovieCard from '../shared/MovieCard'
import BeforeSearch from './BeforeSearch'
import DataNotFound from './DataNotFound';

export default function SearchResults({ searchResults, isLoading, dataNotFound, savedWatchlist, updateWatchlist }) {

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
      Year={movie.Year}
      Runtime={movie.Runtime}
      Genre={movie.Genre}
      Plot={movie.Plot} />
  )});

  return (
    <main>
        {!movieCards.length && !isLoading && !dataNotFound && <BeforeSearch />}
        { dataNotFound && <DataNotFound />}
        { isLoading && <Loader />}
        <section className="search-results">
          { !isLoading && movieCards }
        </section>  
    </main>
  );
}
