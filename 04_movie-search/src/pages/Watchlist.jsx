import { useFetchWatchlist } from '../hooks/useFetchWatchlist'
import WatchlistHeader from '../components/Watchlist/WatchlistHeader'
import WatchlistItems from '../components/Watchlist/WatchlistItems'
import Footer from '../components/shared/Footer'

export default function Watchlist({ savedWatchlist, updateWatchlist }) {    
  const savedMoviesData = useFetchWatchlist(savedWatchlist);

  return (
    <>
      <WatchlistHeader />
      <WatchlistItems
        savedMoviesData={savedMoviesData}
        savedWatchlist={savedWatchlist}
        updateWatchlist={updateWatchlist} 
      />
      <Footer />
    </>
  )
}