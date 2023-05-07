import { Link } from 'react-router-dom';

export default function EmptyWatchlist() {
  return (
    <div className="empty-watchlist__container">
      <p className="empty-watchlist__heading">Your watchlist is looking a little empty...</p>
      <Link to="/" className="empty-watchlist__link">
        <img src="./src/assets/images/icon-add.svg" alt="Add to watchlist button"></img>
        <p>Let’s add some movies!</p>
      </Link>
    </div>
  );
}