import { useEffect, useState } from 'react'
import styles from './PokemonList.module.css'
import { AiFillHeart } from 'react-icons/ai'
import Modal from './Modal'
import { Link } from 'react-router-dom'

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])
  const [isModal, setIsModal] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState([])

  const addPokemonNameToModal = (pokemon) => {
    setIsModal(!isModal)
    setSelectedPokemon(pokemon)
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then((response) => response.json())
      .then((json) => setPokemonList(json.results))
  }, [])

  return (
    <div>

      <div className={styles.wrapper}>
        {pokemonList.map((pokemon, index) => (
          <div className={styles.container} key={index}>
            <img
              alt="logo"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
            />
            <h1>{pokemon.name.toUpperCase()}</h1>
            <div className={styles.detailsTab}>
              <AiFillHeart className={styles.heart}
                onClick={() => {
                  addPokemonNameToModal(pokemon)
                }}
              />
              <Link
                to={`/details/${index}`}
                state={{
                  index,
                  pokemon,
                  imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`,
                }}
              >
                <p className={styles.detailsLink}>Details</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        pokemon={selectedPokemon}
      />
    </div>
  )
}

export default PokemonList
