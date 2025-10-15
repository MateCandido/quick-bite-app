import { Link } from 'react-router-dom'
import type { IRestaurant } from '../interfaces/types'
import styles from './RestaurantCard.module.css'

interface RestaurantCardProps {
  restaurant: IRestaurant
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className={styles.card}>
      <img src={restaurant.image} alt={restaurant.name} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{restaurant.name}</h3>
        <div className={styles.cardInfo}>
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.category}</span>
          <span>{restaurant.deliveryTime}</span>
        </div>
      </div>
    </Link>
  )
}