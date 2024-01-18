import Card from '../Restaurante'
import { Menu } from './styled'

import { Restaurante } from '../../Pages/Home'

export type Props = {
  pratos: Restaurante[]
}

const Opcoes = ({ pratos }: Props) => (
  <Menu>
    {pratos.map((prato) => (
      <li key={prato.id}>
        <Card
          id={prato.id}
          tipo={prato.tipo}
          descricao={prato.descricao}
          titulo={prato.titulo}
          image={prato.capa}
          nota={prato.avaliacao}
        />
      </li>
    ))}
  </Menu>
)

export default Opcoes
