import { useState } from 'react'
import { useFetchMovies } from '../hooks/useFetchMovies'
import HomeHeader from '../components/Home/HomeHeader'
import SearchResults from '../components/SearchResults'
import Footer from '../components/shared/Footer'

const apiKey = `apikey=b9b3f97a`   

export default function Home() {
  const [searchResults, fetchMovies] = useFetchMovies();

  return (
    <div className='Home'>
      <HomeHeader fetchMovies={fetchMovies} />
      <SearchResults results={searchResults} />
      <Footer />
    </div>
  )
}