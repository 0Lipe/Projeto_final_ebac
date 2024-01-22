import { Imagem } from './styles'
import { Restaurante } from '../../Pages/Home'

export type Props = {
  restaurante: Restaurante
}

const Banner = ({ restaurante }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <h3>{restaurante.tipo}</h3>
        <h4>{restaurante.titulo}</h4>
      </div>
    </Imagem>
  )
}

export default Banner
