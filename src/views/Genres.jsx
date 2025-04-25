import LoadingIndicator from "../components/LoadingIndicator"
import MainLayout from "../layouts/MainLayout"
import Card from "../components/Card"
import { useEffect, useState } from "react"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const Genres = () => {

    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchGenres = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_BASE_URL}/genres/anime`)
                const data = await response.json()
                setGenres(data.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false)
              }
        }

        fetchGenres()
    }, [])

  return (
    <MainLayout>
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Anime Genres</h2>
            {loading && <LoadingIndicator />}
            {!loading && genres.length === 0 && <p className="text-center py-8 text-gray-400">No Genres Found</p>}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {genres.map(genre => (
                    <Card key={Math.random()} >
                        <a href={genre.url} target="_blank">
                            <h2>{genre.name}</h2>
                        </a>
                    </Card>
                ))}
            </div>
        </div>
    </MainLayout>
  )
}

export default Genres