import { Imagem } from './styles'
import bannetImg from '../../assets/images/banner.png'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../Pages/Home'

const Banner = () => {
  const [cardapio, setCardapio] = useState<Restaurante>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <Imagem style={{ backgroundImage: `url(${cardapio?.capa})` }}>
      <div className="container">
        <h3>{cardapio?.tipo}</h3>
        <h4>{cardapio?.titulo}</h4>
      </div>
    </Imagem>
  )
}

export default Banner
