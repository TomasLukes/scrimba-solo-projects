export default function ButtonAdd({ imdbID, updateWatchlist }) {
  return (
        <div className='flex'>
          <button className="btn-toggle-watchlist" onClick={() => updateWatchlist(imdbID)}>
            <img src="./src/assets/images/icon-add.svg" alt="Add movie to your watchlist" className='icon-toggle-watchlist' />
          </button>
          <label className='label-toggle-watchlist'>Watchlist</label>
        </div>
  );
}