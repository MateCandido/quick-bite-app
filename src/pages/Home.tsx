import { useState, useEffect } from 'react'
import { getRestaurants } from '../services/api'
import type { IRestaurant } from '../interfaces/types'
import { RestaurantCard } from '../components/RestaurantCard'
import styles from './Home.module.css'

export const Home = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants()
        setRestaurants(data)
      } catch (err) {
        setError("Failed to load restaurants. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  if (isLoading) {
    return <p className={styles.loadingMessage}>Loading restaurants...</p>
  }

  if (error) {
    return <p className={styles.errorMessage}>{error}</p>
  }

  return (
    <div className={styles.gallery}>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  )
}