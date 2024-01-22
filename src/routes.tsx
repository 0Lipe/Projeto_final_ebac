import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PaginaRestaurante from './Pages/Restaurante'
import Checkout from './Pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<PaginaRestaurante />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
