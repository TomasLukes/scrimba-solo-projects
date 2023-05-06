export default function ButtonRemove({ imdbID, updateWatchlist }) {
  return (
        <div className='flex'>
          <button className="btn-toggle-watchlist" onClick={() => updateWatchlist(imdbID)}>
            <img src="./src/assets/images/icon-remove.svg" alt="Remove movie from your watchlist" className='icon-toggle-watchlist' />
          </button>
          <label className='label-toggle-watchlist'>Remove</label>
        </div>
  );
}
