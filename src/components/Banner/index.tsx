import { Imagem } from './styles'
import { Restaurante } from '../../Pages/Home'

export type Props = {
  options: Restaurante[]
}

const Banner = ({ options }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${options.capa})` }}>
      <div className="container">
        <h3>{options.tipo}</h3>
        <h4>{options.titulo}</h4>
      </div>
    </Imagem>
  )
}

export default Banner
