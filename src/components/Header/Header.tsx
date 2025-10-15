import { Link } from 'react-router-dom'
import { useCartStore } from '../../hooks/useCartStore' 
import styles from './Header.module.css'

export const Header = () => {
  const items = useCartStore((state) => state.items)

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          QuickBite
        </Link>
        <nav>
          <Link to="/cart" className={styles.cartLink}>
            🛒
            {totalItems > 0 && (
              <span className={styles.cartCounter}>{totalItems}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}