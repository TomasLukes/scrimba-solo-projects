import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "watchlist",
      element: <Watchlist />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}