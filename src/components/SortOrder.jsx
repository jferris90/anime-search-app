const SortOrder = ({ sortOrder, handleSortChange }) => {
  return (
    <div className="flex justify-end mb-4">
            <label htmlFor="sortOrder" className="mr-2">Sort by:</label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={handleSortChange}
              className="p-2 border border-gray-300 rounded bg-gray-800 text-white"
            >
              <option value="default">Default</option>
              <option value="title">Title</option>
              <option value="score">Score</option>
              <option value="rank">Rank</option>
              <option value="popularity">Popularity</option>
              <option value="year">Year</option>
            </select>
          </div>
  )
}

export default SortOrder