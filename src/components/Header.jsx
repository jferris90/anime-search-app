import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav className="bg-gray-800 flex items-center justify-between p-4">
        <Link to="/" className="text-white text-2xl">Anime Search App</Link>
        <div className="flex gap-4 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600 p-2 underline underline-offset-6' : 'text-white p-2' }>Home</NavLink>
          <NavLink to="/genres" className={({isActive}) => isActive ? 'text-indigo-600 p-2 underline underline-offset-6' : 'text-white p-2' }>Genres</NavLink>
        </div>
    </nav>
  )
}

export default Header