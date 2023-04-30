import { apiKey, myWatchlist, searchResultsContainer, htmlFeed } from './app.js';
import { handleClick, fetchWatchlist, getFeed, render, removeFromWatchlist } from './app.js';
window.isWatchlist = true;
 
// Add event listeners
document.addEventListener('click', handleClick);

//
fetchWatchlist(myWatchlist)







