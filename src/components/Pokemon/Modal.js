import styles from './Modal.module.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { GiConfirmed } from 'react-icons/gi'


function Modal({ isModal, setIsModal, pokemon }) {
  const addToStorage = () => {
    let pokemons = JSON.parse(localStorage.getItem('favoritePoke'))
    if (pokemons == null) {
      pokemons = []
    }
    console.log(pokemon);
    localStorage.setItem('pokemon', JSON.stringify(pokemon))
    pokemons.push(pokemon)
    setIsModal(!isModal)
    localStorage.setItem('favoritePoke', JSON.stringify(pokemons))
  }
  console.log(pokemon);
  return isModal ? ( 
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.text}>
          Are you sure to add {pokemon.name.toUpperCase()} to list?
        </p>
        <div className={styles.buttons}>
          <GiConfirmed className={styles.btn} onClick={addToStorage} />
          <AiFillCloseCircle className={styles.btn} onClick={() => setIsModal(!isModal)} />
        </div>
      </div>
    </div>
  ) : 
    ''

}

export default Modal
