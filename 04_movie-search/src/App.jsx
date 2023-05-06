import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'

export default function App() {
  // Get saved watchlist in localStorage if it exists, otherwise set it to empty array
  const [savedWatchlist, setSavedWatchlist] = useState(() => 
    JSON.parse(localStorage.getItem('myWatchlist')) ?? []
  );

  // Update localStorage with value of savedWatchlist state
  useEffect(() => {
    localStorage.setItem('myWatchlist', JSON.stringify(savedWatchlist));
  }, [savedWatchlist]);

  // Update savedWatchlist (add/remove movie) after triggered by click
  function updateWatchlist(imdbID) {
    if (savedWatchlist.includes(imdbID)) {
      setSavedWatchlist((oldWatchlist) => {
      return oldWatchlist.filter((movie) => movie !== imdbID);});
    } else {
      setSavedWatchlist((oldSavedWatchlist) => {
        const updatedSavedWatchlist = [...oldSavedWatchlist, imdbID]
        return updatedSavedWatchlist;}) 
      }
  }

  // Create main router for App
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home savedWatchlist={savedWatchlist} updateWatchlist={updateWatchlist} />,
    },
    {
      path: "/watchlist",
      element: <Watchlist savedWatchlist={savedWatchlist} updateWatchlist={updateWatchlist} />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}