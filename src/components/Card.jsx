const Card = ({ children }) => {
  return (
    <div className="bg-gray-800 text-white max-w-sm rounded overflow-hidden shadow-lg p-4">
        {children}
    </div>
  )
}

export default Card