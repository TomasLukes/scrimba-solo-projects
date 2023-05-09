export function updateWatchlist(movieId, savedWatchlist, setSavedWatchlist) {
    // If movie Id is in savedMovies, remove it, otherwise add that Id to savedWatchlist
    if (savedWatchlist.includes(movieId)) {
            setSavedWatchlist((oldWatchlist) => {
            return oldWatchlist.filter((movie) => movie !== movieId);
        });
    } else {
            setSavedWatchlist((oldSavedWatchlist) => {
            const updatedSavedWatchlist = [...oldSavedWatchlist, movieId]
            return updatedSavedWatchlist;
        }) 
    }
}
