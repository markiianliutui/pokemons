import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './PokemonDetails.module.css'

function PokemonDetails() {
  const [pokemonDetailsUrl, setPokemonDetailsUrl] = useState({})
  const location = useLocation()
  const { pokemon, imageUrl } = location.state

  console.log(pokemon.url)

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((json) => setPokemonDetailsUrl(json))
  }, [pokemon.url])

  console.log(pokemonDetailsUrl)
  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} alt="pokemon" />
      <div className={styles.imageBlock}>
        <div className={styles.detailBlock}>
          <h1>Name of Poka:{pokemonDetailsUrl.name}</h1>
          <p>Height of Poka:{pokemonDetailsUrl.height}</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
