import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Header } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Baner from '../../assets/images/Vector.png'

const HeaderSecond = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Header style={{ backgroundImage: `url(${Baner})` }}>
      <div className="container">
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h3 onClick={openCart}>{items.length} produto(s) no carrinho</h3>
      </div>
    </Header>
  )
}

export default HeaderSecond
