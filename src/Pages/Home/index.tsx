import Opcoes from '../../components/Opçoes'
import Header from '../../components/HeaderMain/inde'
import { useGetRestauranteQuery } from '../../services/api'

export type Cardapios = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapios[]
}

const Home = () => {
  const { data: cardapio } = useGetRestauranteQuery()

  if (cardapio) {
    return (
      <>
        <Header />
        <div className="container">
          <Opcoes pratos={cardapio} />
        </div>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
