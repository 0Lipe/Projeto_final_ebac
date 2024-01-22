import { HeaderBar, Logo, Titulo } from './styles'

import Logos from '../../assets/images/logo.png'
import Baner from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${Baner})` }}>
    <Logo>
      <img src={Logos} />
    </Logo>
    <div>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </HeaderBar>
)

export default Header
