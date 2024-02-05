import { Cards, Prato, Descricao, Tags, BotaoDiv } from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Botoes from '../Button'

type Props = {
  titulo: string
  tipo: string
  descricao: string
  image: string
  nota: number
  id: number
}

const Card = ({ titulo, tipo, descricao, image, nota, id }: Props) => {
  return (
    <Cards>
      <Tags>
        <Tag>{tipo}</Tag>
      </Tags>
      <div className="img-capa">
        <img src={image} />
      </div>
      <Descricao>
        <Prato>
          <h2>{titulo}</h2>
          <h2>
            {nota} <img src={estrela} />
          </h2>
        </Prato>
        <p>{descricao}</p>
        <BotaoDiv>
          <Botoes to={`restaurante/${id}`}>Saiba Mais</Botoes>
        </BotaoDiv>
      </Descricao>
    </Cards>
  )
}

export default Card
