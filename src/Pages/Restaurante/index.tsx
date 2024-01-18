import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderSecond from '../../components/Header'

import ProductsList from '../../components/ProductList'
import { Restaurante } from '../Home'

const PaginaRestaurante = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderSecond />
      <Banner />
      <div className="container">
        <ProductsList options={cardapio} />
      </div>
    </>
  )
}

export default PaginaRestaurante
