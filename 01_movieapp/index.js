import { apiKey, myWatchlist, searchResultsContainer, htmlFeed } from './app.js';

import { handleClick, searchMovies, getFeed, render, addToWatchlist, removeFromWatchlist } from './app.js';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
              
// Add event listeners
document.addEventListener('click', handleClick);