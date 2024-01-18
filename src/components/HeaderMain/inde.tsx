import { HeaderBar, Logo, Titulo } from './styles'

import Logos from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <Logo>
      <img src={Logos} />
    </Logo>
    <div>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </HeaderBar>
)

export default Header
