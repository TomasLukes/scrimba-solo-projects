import { useFetchMovies } from '../hooks/useFetchMovies'
import HomeHeader from '../components/Home/HomeHeader'
import SearchResults from '../components/Home/SearchResults'
import Footer from '../components/shared/Footer'

export default function Home({ savedWatchlist, updateWatchlist }) {
  const [searchResults, fetchMovies] = useFetchMovies();

  return (
    <div className='Home'>
      <HomeHeader fetchMovies={fetchMovies} />
      <SearchResults 
        searchResults={searchResults}
        savedWatchlist={savedWatchlist}
        updateWatchlist={updateWatchlist}
      />
      <Footer />
    </div>
  )
}