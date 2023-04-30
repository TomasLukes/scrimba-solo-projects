import { myWatchlist } from './app.js';
import { handleClick, fetchWatchlist } from './app.js';
window.isWatchlist = true;
 
// Add event listeners
document.addEventListener('click', handleClick);

// Initial fetch of watchlist saved in localStorage
fetchWatchlist(myWatchlist)







