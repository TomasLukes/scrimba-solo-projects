import { Link } from 'react-router-dom';

export default function EmptyWatchlist() {
  return (
    <div className="flex-column">
      <Link to="/" className="text-add-movies flex">
        <p>Your watchlist is looking a little empty...</p>
          <img src="./src/assets/images/icon-add.svg" alt="Add to watchlist button"></img>
          <p>Let’s add some movies!</p>
      </Link>
    </div>
  );
}