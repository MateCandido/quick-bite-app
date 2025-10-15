import RESTAURANTS from '../data/mockData'
import type { IRestaurant } from '../interfaces/types'

export const getRestaurants = async (): Promise<IRestaurant[]> => {
  console.log("Fetching all restaurants...")

  return Promise.resolve(RESTAURANTS)
}

export const getRestaurantById = async (id: string): Promise<IRestaurant | undefined> => {
  console.log(`Fetching restaurant with id: ${id}`)
  const restaurant = RESTAURANTS.find((r) => r.id.toString() === id)
  return Promise.resolve(restaurant)
}