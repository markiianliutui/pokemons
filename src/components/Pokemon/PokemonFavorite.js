import { useState, useEffect } from 'react'
import styles from './PokemonFavorite.module.css'

function PokemonFavorite() {
  const [PokemonFavorite, setPokemonFavorite] = useState([])

  useEffect(() => {
    const savedPokemonList =
      JSON.parse(localStorage.getItem('favoritePoke')) || []
    setPokemonFavorite(savedPokemonList)
    console.log(savedPokemonList)
  }, [])

  const pokemonDelete = (index) => {
    const newPokemonFavorite = PokemonFavorite.filter(
      (pokemon, i) => i !== index
    )
    localStorage.setItem('favoritePoke', JSON.stringify(newPokemonFavorite))
    setPokemonFavorite(newPokemonFavorite)
  }

  return (
    <div className={styles.container}>
      {PokemonFavorite.map((pokemon, index) => (
        <div className={styles.favoritePokemon} key={pokemon.id}>
          {
            <img
              className={styles.favoriteImg}
              alt="logo"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
            />
          }
          <p className={styles.favoriteName}>{pokemon.name.toUpperCase()}</p>

          <button
            className={styles.favoriteBtn}
            onClick={() => pokemonDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default PokemonFavorite
