import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Header } from './styles'

const HeaderSecond = () => (
  <Header>
    <div className="container">
      <h3>Restaurantes</h3>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <h3>0 produto(s) no carrinho</h3>
    </div>
  </Header>
)

export default HeaderSecond
