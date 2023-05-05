import { useState } from "react";
import { Link } from 'react-router-dom';

export default function WatchlistHeader({ fetchMovies }) {

  const [searchTerm, setSearchTerm] = useState('')

  function handleChange(e) {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchMovies(searchTerm);
  }

  return (
    <header>
      <nav>
        <div className="flex-container-header">
          <Link to="/">
            <div>
            <img src="./src/assets/images/logo-no-bg.svg" alt="MovieSearch logo" className="logo-img" />
            </div>
          </Link>
          <form onSubmit={handleSearch}>
              <i className="icon-search"></i>
              <input type="text" id="searchInput" placeholder="Search for a movie" value={searchTerm} onChange={(e) => handleChange(e)}/>
              <button id="searchBtn" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
}