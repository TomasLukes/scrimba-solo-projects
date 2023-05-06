import { Link } from 'react-router-dom';

export default function WatchlistHeader() {

  return (
    <header>
      <nav>
        <div className="watchlist-header__container">
          <Link to="/">
            <img className="watchlist-header__logo-img" src="./src/assets/images/logo-no-bg.svg" alt="MovieSearch logo" />
          </Link>

          <Link to="/" className='search-nav__container'>
            <svg className="search-nav__search-icon" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28"><path d="M795.761 941.696 531.326 677.5q-29.761 25.264-69.6 39.415-39.84 14.15-85.161 14.15-109.835 0-185.95-76.195Q114.5 578.674 114.5 471t76.196-183.87q76.195-76.195 184.369-76.195t183.87 76.195q75.695 76.196 75.695 184.02 0 43.328-13.641 82.97-13.641 39.641-40.924 74.402L845.5 891.957l-49.739 49.739ZM375.65 662.935q79.73 0 135.29-56.245Q566.5 550.446 566.5 471t-55.595-135.69q-55.595-56.245-135.255-56.245-80.494 0-136.757 56.245Q182.63 391.554 182.63 471t56.228 135.69q56.227 56.245 136.792 56.245Z"/></svg>
            <h2 className="search-nav__label">Search for movies</h2>
          </Link>
        </div>
      </nav>
    </header>
  );
}