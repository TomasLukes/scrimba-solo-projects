import { useState } from 'react'
import { Link } from "react-router-dom"
import HomeHeader from '../components/Home/HomeHeader'
import SearchResults from '../components/SearchResults'
import Footer from '../components/shared/Footer'

const apiKey = `apikey=b9b3f97a`   

export default function Home() {

  const [searchResults, setSearchResults] = useState([])

  async function fetchMovies(searchTerm) {

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=b9b3f97a&s=${searchTerm}`);
      const data = await response.json();
      const searchedMovies = data.Search;
  
      if (!searchedMovies) {
        console.log(`<p>Unable to find what you’re looking for. Please try another search.</p>`)
      } else {
        const detailedMovies = await Promise.all(
        searchedMovies.map(async (movie) => {
          const detailedResponse = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=b9b3f97a`);
          const detailedData = await detailedResponse.json();
          return detailedData;
        })
      );
      setSearchResults(detailedMovies);
    }

    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className='Home'>
        <HomeHeader fetchMovies={fetchMovies} />
        <SearchResults results={searchResults} />
        <Footer />
    </div>
  )
}