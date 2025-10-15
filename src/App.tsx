import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home'
import { Restaurant } from './pages/Restaurant'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { ThankYou } from './pages/ThankYou'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
    </div>
  )
}

export default App