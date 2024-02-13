
import './App.css'
import Header from './components/Pokemon/Header'
import PokemonFavorite from './components/Pokemon/PokemonFavorite'
import PokemonDetails from './components/Pokemon/PokemonDetails'
import { Route, Routes } from 'react-router-dom'
import PokemonList from './components/Pokemon/PokemonList'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PokemonList />} />
          <Route path="details/:id" element={<PokemonDetails />} />
          <Route path="pokemons" element={<PokemonFavorite />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
