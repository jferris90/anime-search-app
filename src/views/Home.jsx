import '../App.css'
import AnimeCard from '../components/AnimeCard'
import SearchForm from '../components/SearchForm'
import MainLayout from '../layouts/MainLayout'
import LoadingIndicator from '../components/LoadingIndicator'
import { useState, useEffect } from 'react'
import SortOrder from '../components/SortOrder'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const Home = () => {

  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const [heading, setHeading] = useState("")
  const [loading, setLoading] = useState(false)
  const [sortOrder, setSortOrder] = useState("default")

  const handleSearch = (query) => {
    console.log('Search query:', query)
    setResults([])
    setLoading(true)

    try {
      const url = `${API_BASE_URL}/anime?q=${query}`
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setHeading(`Search results for "${query}"`)
        setResults(data.data)
        setLoading(false)
        console.log(results)
      })
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false)
    }

  }

  const handleSortChange = (e) => {
    const order = e.target.value
    setSortOrder(order)

    const sortedResults = [...results]
    if (order === "title") {
      sortedResults.sort((a, b) => a.title.localeCompare(b.title))
    } else if (order === "score") {
      sortedResults.sort((a, b) => b.score - a.score)
    } else if (order === "rank") {
      sortedResults.sort((a, b) => b.rank - a.rank)
    } else if (order === "popularity") {
      sortedResults.sort((a, b) => a.popularity - b.popularity)
    } else if (order === "year") {
      sortedResults.sort((a, b) => b.year - a.year)
    }
    setResults(sortedResults)
  }

  return (
    <MainLayout>
      <div className="p-4">
        <div className="flex justify-center my-4">
          <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch}/>
        </div>

        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        {loading && <LoadingIndicator />}
        {!loading && results.length === 0 && 
          <div className="p-4">
            <p className="text-center py-2 text-gray-400">Search for anime by entering a title above</p>
            <img src="/mashup_nofill.png" alt="anime character mashup" className="w-full -mt-18 -mb-14 object-cover opacity-80" />
          </div>}
        {!loading && results.length > 0 && <SortOrder sortOrder={sortOrder} handleSortChange={handleSortChange} />}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((result) => (
            <AnimeCard key={Math.random()} result={result} />
        ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Home