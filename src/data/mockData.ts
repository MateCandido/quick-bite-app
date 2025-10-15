import type { IRestaurant } from '../interfaces/types'

const RESTAURANTS: IRestaurant[] = [
    {
        id: 1,
        name: "Pizza Palace",
        category: "Pizza",
        deliveryTime: "30-45 min",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069",
        menu: [
          { id: 101, name: "Margherita Pizza", description: "Classic tomato, mozzarella, and basil.", price: 8.99, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935" },
          { id: 102, name: "Pepperoni Pizza", description: "Spicy pepperoni with melted cheese.", price: 10.50, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981" },
          { id: 103, name: "Garlic Bread", description: "Toasted bread with garlic butter.", price: 4.00, image: "https://images.unsplash.com/photo-1671106681075-5a7233268cbd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1334" },
        ],
      },
      {
        id: 2,
        name: "Sushi Central",
        category: "Sushi",
        deliveryTime: "40-55 min",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1948",
        menu: [
          { id: 201, name: "California Roll", description: "Crab, avocado, and cucumber.", price: 12.00, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925" },
          { id: 202, name: "Spicy Tuna Roll", description: "Tuna with a spicy mayo sauce.", price: 14.50, image: "https://plus.unsplash.com/premium_photo-1712949140529-203336f93d17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
          { id: 203, name: "Miso Soup", description: "Traditional Japanese soup.", price: 3.50, image: "https://plus.unsplash.com/premium_photo-1705406169429-df5950bc2995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
        ],
      },
      {
        id: 3,
        name: "Burger Barn",
        category: "Burgers",
        deliveryTime: "20-30 min",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899",
        menu: [
          { id: 301, name: "Classic Cheeseburger", description: "Beef patty, cheese, lettuce, and tomato.", price: 9.99, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965" },
          { id: 302, name: "Bacon Burger", description: "Beef patty with crispy bacon and cheese.", price: 11.99, image: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
          { id: 303, name: "French Fries", description: "Golden crispy fries.", price: 3.00, image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070" },
        ],
      },
      {
        id: 4,
        name: "Taco Fiesta",
        category: "Mexican",
        deliveryTime: "25-40 min",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071",
        menu: [
          { id: 401, name: "Tacos al Pastor", description: "Marinated pork tacos with pineapple.", price: 13.50, image: "https://images.unsplash.com/photo-1606168159202-1f3fca458c18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFjb3MlMjBhbCUyMHBhc3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
          { id: 402, name: "Burrito Bowl", description: "A deconstructed burrito in a bowl.", price: 11.00, image: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVycml0byUyMGJvd2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
          { id: 403, name: "Quesadillas", description: "Melted cheese in a folded tortilla.", price: 7.50, image: "https://images.unsplash.com/photo-1719957770167-bb66133ba808?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVlc2FkaWxsYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
        ],
      },
      {
        id: 5,
        name: "The Curry Pot",
        category: "Indian",
        deliveryTime: "45-60 min",
        rating: 4.7,
        image: "https://plus.unsplash.com/premium_photo-1726769145769-7ff764c537c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=910",
        menu: [
          { id: 501, name: "Chicken Tikka Masala", description: "Creamy and flavorful curry.", price: 15.00, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1371" },
          { id: 502, name: "Samosas", description: "Crispy pastry filled with spiced potatoes.", price: 5.50, image: "https://plus.unsplash.com/premium_photo-1695297516710-854716c51121?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
          { id: 503, name: "Naan Bread", description: "Soft and fluffy Indian bread.", price: 3.00, image: "https://plus.unsplash.com/premium_photo-1675949335489-f778abf84197?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
        ],
      },
      {
        id: 6,
        name: "The Green Bowl",
        category: "Salads",
        deliveryTime: "15-25 min",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070",
        menu: [
          { id: 601, name: "Quinoa Power Bowl", description: "Quinoa with fresh vegetables and lemon dressing.", price: 12.50, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887" },
          { id: 602, name: "Classic Caesar Salad", description: "Romaine lettuce, croutons, and Caesar dressing.", price: 10.00, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1935" },
          { id: 603, name: "Berry Smoothie", description: "A refreshing blend of mixed berries.", price: 6.00, image: "https://images.unsplash.com/photo-1610732970511-96d29bce0d52?q=80&w=1887" },
        ],
      },
]

export default RESTAURANTS