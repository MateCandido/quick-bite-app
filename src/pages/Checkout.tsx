import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../hooks/useCartStore'
import styles from './Checkout.module.css'

export const Checkout = () => {
  const navigate = useNavigate()
  const { items, clearCart } = useCartStore()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('Order Submitted:', {
      customer: formData,
      items: items,
    })

    clearCart()

    navigate('/thank-you')
  }

  return (
    <div className={styles.page}>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <button type="submit" className={styles.submitButton}>
          Place Order
        </button>
      </form>
    </div>
  )
}