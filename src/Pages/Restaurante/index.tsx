import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderSecond from '../../components/Header'
import ProductsList from '../../components/ProductList'

import { useGetCardapioQuery } from '../../services/api'

const PaginaRestaurante = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetCardapioQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderSecond />
      <Banner restaurante={restaurante} />
      <div className="container">
        <ProductsList Opt={restaurante.cardapio} />
      </div>
    </>
  )
}

export default PaginaRestaurante
