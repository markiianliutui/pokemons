import { Link, Outlet } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <h1 className={styles.headerLogo}>Home</h1>
        </Link>
        <div>
          <Link to="/pokemons">
            <h1 className={styles.headerLogo}>Favourite</h1>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Header
