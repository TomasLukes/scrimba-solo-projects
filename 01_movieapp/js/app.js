// Shared variables
export const apiKey = `apikey=b9b3f97a`                                        
export const myWatchlist = JSON.parse(localStorage.getItem('myWatchlist'))     
export const searchResultsContainer = document.getElementById('searchResults');
export let moviesHtmlFeed = ``;
      
// Shared functions:

// 01. Event handling:
// Handle all click events for app
export function handleClick(e) {
  if (e.target.id === 'searchBtn') {
    searchMovies(e);
  }
  
  if (e.target.dataset.id && e.target.dataset.button ==='add') {
    addToWatchlist(e.target.dataset.id);
    e.target.src = '../images/icon-remove.svg';
    e.target.dataset.button = 'remove';
  } else if (e.target.dataset.id && e.target.dataset.button === 'remove') {
    removeFromWatchlist(e.target.dataset.id);
    e.target.src = '../images/icon-add.svg';
    e.target.dataset.button = 'add';
  }
}

// Add a movie to watchlist using its ID
export function addToWatchlist(id) {
  let moviesArray = myWatchlist || [];

  if (!moviesArray.includes(id)) {
    moviesArray.push(id);
  }

  localStorage.setItem('myWatchlist', JSON.stringify(moviesArray));
}

// Remove a movie to watchlist using its ID
export function removeFromWatchlist (id) {
  const movieIndex = myWatchlist.indexOf(id);
  myWatchlist.splice(movieIndex, 1);
  localStorage.setItem('myWatchlist', JSON.stringify(myWatchlist))

  if (window.isWatchlist) {
    fetchWatchlist(myWatchlist);
  }
}

// 02. Rendering:
// Generate the HTML feed for list of movies
export function getFeed(movies, iconType) {
  moviesHtmlFeed = '';
  for(let movie of movies) {
    moviesHtmlFeed += `          
      <div class='card-movie'>

        <img src="${movie.Poster}" alt="" class="movie-poster">

        <div class="movie-description"> 
          <div class='flex-row'>
            <h3 class="text-movie-title">${movie.Title}</h3>

            <div class='flex'>
              <svg width="18" height="18" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z" fill="#FEC654"/>
              </svg>

              <p class="text-movie-score">${movie.Metascore}</p>
            </div>
          </div>

          <div class='flex-row-spaced'>
            <p class="text-movie-length">${movie.Runtime}</p>
            <p class="text-movie-genre">${movie.Genre}</p>

            <div class='flex'>
              <button id="addToListBtn" data-title='${movie.Title}' data-id='${movie.imdbID}'>
                <img src='../images/icon-${iconType}.svg' alt="Add to watchlist button" data-id='${movie.imdbID}' class='icon-add-watchlist' data-button='${iconType}'>
              </button>
              <label class='label-add-watchlist'>Watchlist</label>
            </div>
          </div>

          <p class="text-movie-plot">${movie.Plot}</p>
        </div>
      </div>`;
  }
}

// Render the movies feed in the searchResults container
export function render(feed) {
  searchResultsContainer.innerHTML = feed;
}

// 03. Data fetching:
// Search for movies based on the users input
export async function searchMovies(e) {
  e.preventDefault();

  try {
    const response = await fetch(`https://www.omdbapi.com/?${apiKey}&s=${searchInput.value}`);
    const data = await response.json();
    const searchedMovies = data.Search;

    if (!searchedMovies) {
      searchResultsContainer.innerHTML = `<p>Unable to find what you’re looking for. Please try another search.</p>`
    } else {

    const detailedMovies = await Promise.all(searchedMovies.map(async (movie) => {
      const detailedResponse = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&${apiKey}`);
      const detailedData = await detailedResponse.json();
      return detailedData;
    }));

    const addIcon = "add";
    getFeed(detailedMovies, addIcon);
    render(moviesHtmlFeed);
    }
  } catch(error) {
    console.log(error);
  }
};

// Fetch the movies from the users watchlist
export async function fetchWatchlist(myWatchlist) {
  try {
      if (myWatchlist.length) {
      const savedMovies = await Promise.all(myWatchlist.map(async (movie) => {
          const response = await fetch(`https://www.omdbapi.com/?i=${movie}&${apiKey}`);
          const data = await response.json();
          return data;
      }));

      const removeIcon = "remove";
      getFeed(savedMovies, removeIcon);
      render(moviesHtmlFeed);
      } else {
          searchResultsContainer.innerHTML = `            
          <div class="flex-column">
            <p>Your watchlist is looking a little empty...</p>
            <a class="text-add-movies flex" href="index.html">
              <img src="../images/icon-add.svg" alt="Add to watchlist button">
              <p>Let’s add some movies!</p>
            </a>
          </div>`
      }
  } catch (error) {
      console.log(error);
  }
}