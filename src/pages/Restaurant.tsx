import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { getRestaurantById } from '../services/api'
import { useCartStore } from '../hooks/useCartStore'
import { MenuItemCard } from '../components/MenuItemCard'
import type { IRestaurant, IMenuItem } from '../interfaces/types'
import styles from './Restaurant.module.css'

export const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { addItem } = useCartStore()

  useEffect(() => {
    if (id) {
      const fetchRestaurant = async () => {
        try {
          const data = await getRestaurantById(id)
          if (data) {
            setRestaurant(data)
          } else {
            setError("Restaurant not found.")
          }
        } catch (err) {
          setError("Failed to load restaurant data.")
        } finally {
          setIsLoading(false)
        }
      }
      fetchRestaurant()
    }
  }, [id])

  const handleAddToCart = (menuItem: IMenuItem) => {
    addItem(menuItem)
    toast.success(`${menuItem.name} added to cart!`)
  }

  if (isLoading) {
    return <p className={styles.message}>Loading restaurant...</p>
  }

  if (error) {
    return <p className={styles.message}>{error}</p>
  }

  if (!restaurant) {
    return <p className={styles.message}>Restaurant not found.</p>
  }

  return (
    <div className={styles.page}>
      <Toaster position="top-center" />

      <header className={styles.header}>
        <img src={restaurant.image} alt={restaurant.name} className={styles.headerImage} />
        <div className={styles.headerContent}>
          <h1>{restaurant.name}</h1>
          <p>⭐ {restaurant.rating} • {restaurant.category} • {restaurant.deliveryTime}</p>
        </div>
      </header>

      <div className={styles.menu}>
        <h2>Menu</h2>
        {restaurant.menu.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </div>
    </div>
  )
}