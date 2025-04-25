import { useEffect, useState } from "react"
import LoadingIndicator from "../components/LoadingIndicator"
import { useParams } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const AnimeDetails = () => {
    const { id } = useParams()
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchShowDetails = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_BASE_URL}/anime/${id}`)
                const data = await response.json()
                setResult(data.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching meal details:', error)
                setLoading(false)
            }
        }

        fetchShowDetails()
    }, [id])


  return (
    <MainLayout>
        <div className="max-w-2xl mx-auto">
            {loading && <LoadingIndicator />}
            {!loading && result && (
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">{result.title}</h2>
                    <img className="w-full mb-4" src={result.images.jpg.image_url} alt={result.title} />
                    <div className="flex items-center justify-between mb-4 max-sm:flex-col max-sm:gap-4">
                        <h3 className="text-xl"><span className="font-bold">Episodes:</span> {result.episodes}</h3>
                        <h3 className="text-xl"><span className="font-bold">Rating:</span> {result.rating}</h3>
                        <h3 className="text-xl"><span className="font-bold">Score:</span> {result.score}</h3>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">Synopsis:</h3>
                        <p>{result.synopsis}</p>
                    </div>
                    <a href={result.trailer.url} target="_blank" rel="noopener noreferrer">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded mr-4 cursor-pointer">Watch on Youtube</button>
                    </a>
                    <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600">View Original Source</a>
                </div>
            )}
        </div>
    </MainLayout>
  )
}

export default AnimeDetails