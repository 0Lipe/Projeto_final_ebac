import { Produtos } from './styles'
import { Cardapios } from '../../Pages/Home' // Correção no import
import Product from '../Product'

export type Props = {
  Opt: Cardapios[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductsList = ({ Opt }: Props) => {
  return (
    <Produtos>
      {Opt.map((Cardapios) => (
        <li key={Cardapios.id}>
          <Product cardapio={Cardapios} />
        </li>
      ))}
    </Produtos>
  )
}

export default ProductsList
