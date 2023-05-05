export default function EmptyWatchlist() {
  return (
    <div class="flex-column">
      <p>Your watchlist is looking a little empty...</p>
      <a class="text-add-movies flex" href="./index.html">
          <img src="./images/icon-add.svg" alt="Add to watchlist button"></img>
          <p>Let’s add some movies!</p>
      </a>
    </div>
  );
}