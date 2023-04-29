export default function ButtonRemove({ imdbID, removeFromWatchlist}) {
  return (
        <div className='flex'>
          <button className="btn-toggle-watchlist" onClick={() => removeFromWatchlist(imdbID)}>
            <img src="./src/assets/images/icon-remove.svg" alt="Remove movie from your watchlist" className='icon-toggle-watchlist' />
          </button>
          <label className='label-toggle-watchlist'>Remove</label>
        </div>
  );
}
