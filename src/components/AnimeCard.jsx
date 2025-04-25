import { Link } from "react-router-dom"

const MealCard = ({ result }) => {
  return (
    <div className="bg-gray-800 text-white max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={`/show/${result.mal_id}`}>
        <img className="w-full" src={result.images.jpg.image_url} alt="Image" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl">{result.title}</div>
        </div>
      </Link>
      {(result.synopsis || result.trailer.url) && <div className="px-6 py-4 mb-2">
        {result.synopsis && <p className="text-gray-300 text-base">{result.synopsis.slice(0, 200)}...</p>}
        {result.trailer.url && (
          <a href={result.trailer.url} target="_blank" rel="noopener noreferrer" className="flex place-items-baseline justify-center">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded mt-4 cursor-pointer">Watch on Youtube</button>
          </a>
        )}
      </div>} 
    </div>
  )
}

export default MealCard