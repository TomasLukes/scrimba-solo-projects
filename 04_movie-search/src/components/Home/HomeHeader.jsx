import { useState } from "react";
import { Link } from 'react-router-dom';

export default function HomeHeader({ fetchMovies }) {
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
        <div className="home-header__container">

          <Link to="/">
            <img src="./src/assets/images/logo-no-bg.svg" alt="MovieSearch logo" className="home-header__logo-img" />
          </Link>

          <form className="search-form" onSubmit={handleSearch}>
            <i className="search-form__search-icon"></i>
            <input 
              className="search-form__input"
              type="text"
              placeholder="Search for a movie"
              value={searchTerm}
              onChange={(e) => handleChange(e)}
            />
            <button className="search-form__btn" type="submit">Search</button>
          </form>

          <Link to="/watchlist" className="watchlist-nav__container">
            <svg className="watchlist-nav__bookmark-icon" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28"><path d="M111.152 1021.5V327q0-27.697 20.336-48.033 20.336-20.337 48.034-20.337h472.826q27.599 0 48.364 20.337 20.766 20.336 20.766 48.033v694.5L415.935 892.109 111.152 1021.5Zm68.37-103.435 236.413-101.804 236.413 101.804V327H179.522v591.065Zm600.956 2.435V198.63h-538.63V130.5h538.63q27.698 0 48.034 20.266 20.336 20.265 20.336 47.864V920.5h-68.37ZM179.522 327h472.826-472.826Z"/></svg>
            <label className="watchlist-nav__label">Watchlist</label>
          </Link>
          
        </div>
      </nav>
    </header>
  );
}