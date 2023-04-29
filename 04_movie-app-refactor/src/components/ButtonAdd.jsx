export default function ButtonAdd({ imdbID, addToWatchlist}) {
  return (
        <div className='flex'>
          <button className="btn-toggle-watchlist" onClick={() => addToWatchlist(imdbID)}>
            <img src="./src/assets/images/icon-add.svg" alt="Add movie to your watchlist" className='icon-toggle-watchlist' />
          </button>
          <label className='label-toggle-watchlist'>Watchlist</label>
        </div>
  );
}