import { Logos, Rodape } from './styles'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import Instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
import Logo from '../../assets/images/logo.png'

const Footer = () => (
  <Rodape>
    <img className="LogoFooter" src={Logo} />
    <Logos>
      <img src={Instagram} />
      <img src={facebook} />
      <img src={twitter} />
    </Logos>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br /> dos produtos é toda do estabelecimento contratado.{' '}
    </p>
  </Rodape>
)

export default Footer
