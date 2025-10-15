import { Link } from 'react-router-dom'
import { useCartStore } from '../hooks/useCartStore'
import styles from './Cart.module.css'

export const Cart = () => {

  const { items, removeItem, incrementQuantity, decrementQuantity } = useCartStore()

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty.</h2>
        <Link to="/" className={styles.shopLink}>
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <h1>Your Cart</h1>
      <div className={styles.cartLayout}>
        <div className={styles.itemsList}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className={styles.quantityControls}>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <div className={styles.itemTotal}>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className={styles.itemRemove}>
                <button onClick={() => removeItem(item.id)}>×</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryLine}>
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className={styles.summaryLine}>
            <span>Delivery Fee</span>
            <span>$5.00</span>
          </div>
          <div className={`${styles.summaryLine} ${styles.total}`}>
            <span>Total</span>
            <span>${(total + 5).toFixed(2)}</span>
          </div>
          <Link to="/checkout" className={styles.checkoutButton}>
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}