import { Produtos } from './styles'
import { Restaurante } from '../../Pages/Home'
import Product from '../Product'

export type Props = {
  options: Restaurante[]
}

export const ProductsList = ({ options }: Props) => (
  <Produtos>
    {options.map((option) => (
      <li key={option.id}>
        <Product
          foto={option.cardapio.foto}
          nome={option.cardapio.nome}
          id={option.cardapio.id}
          descricao={option.cardapio.descricao}
          preco={option.cardapio.preco}
          porcao={option.cardapio.porcao}
        />
      </li>
    ))}
  </Produtos>
)

export default ProductsList
