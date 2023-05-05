import { useState } from "react";

export default function Header({ fetchMovies }) {

  const [searchTerm, setSearchTerm] = useState('')

  function handleChange(e) {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchMovies(searchTerm);
  }

  return (
    <header>
        <nav>
            <div className="flex-container-header">
                <a href="index.html"><img src="./src/assets/images/logo-no-bg.svg" alt="MovieSearch logo" className="logo-img" /></a>

                <form onSubmit={handleSearch}>
                    <i className="icon-search"></i>
                    <input type="text" id="searchInput" placeholder="Search for a movie" value={searchTerm} onChange={(e) => handleChange(e)}/>
                    <button id="searchBtn" type="submit">Search</button>
                </form>
                
                <a href="watchlist.html" className="flex">
                <svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="28"><path d="M111.152 1021.5V327q0-27.697 20.336-48.033 20.336-20.337 48.034-20.337h472.826q27.599 0 48.364 20.337 20.766 20.336 20.766 48.033v694.5L415.935 892.109 111.152 1021.5Zm68.37-103.435 236.413-101.804 236.413 101.804V327H179.522v591.065Zm600.956 2.435V198.63h-538.63V130.5h538.63q27.698 0 48.034 20.266 20.336 20.265 20.336 47.864V920.5h-68.37ZM179.522 327h472.826-472.826Z"/></svg>
                <h2>Watchlist</h2></a>
            </div>
        </nav>
    </header>
  );
}