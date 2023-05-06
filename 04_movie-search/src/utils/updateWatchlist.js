export function updateWatchlist(movieId, savedWatchlist, setSavedWatchlist) {
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
