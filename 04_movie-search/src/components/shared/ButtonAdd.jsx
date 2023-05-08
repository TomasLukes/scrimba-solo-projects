export default function ButtonAdd({ imdbID, updateWatchlist }) {
  return (
        <div className='update-watchlist-btn__container'>
          <label className='update-watchlist-btn__label'>Add</label>
          <button className="update-watchlist-btn__btn" onClick={() => updateWatchlist(imdbID)}>
            <img className='update-watchlist-btn__icon' src="/assets/images/icon-add.svg" alt="Add movie to your watchlist" />
          </button>
        </div>
  );
}