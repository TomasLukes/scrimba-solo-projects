export default function ButtonRemove({ imdbID, updateWatchlist }) {
  return (
        <div className='update-watchlist-btn__container'>
                    <label className='update-watchlist-btn__label'>Remove</label>
          <button className="update-watchlist-btn__btn" onClick={() => updateWatchlist(imdbID)}>
            <img className='update-watchlist-btn__icon' src="/assets/images/icon-remove.svg" alt="Remove movie from your watchlist" />
          </button>
        </div>
  );
}
