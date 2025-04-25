import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Genres from "./views/Genres"
import AnimeDetails from "./views/AnimeDetails"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/genres" element={<Genres />}/>
      <Route path="/show/:id" element={<AnimeDetails />}/>
    </Routes>
  )
}

export default App
