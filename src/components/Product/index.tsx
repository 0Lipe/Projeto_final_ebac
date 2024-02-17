import close from '../../assets/images/close 1.png'
import { Produto, Modal, Button, ModalContent, Button2 } from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Cardapios } from '../../Pages/Home'
import { formataPreco } from '../ProductList'

export type Props = {
  cardapio: Cardapios
}

const Product = ({ cardapio }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
  }
  const getDescricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  return (
    <ul>
      <Produto key={cardapio.id} onClick={() => setModalEstaAberto(true)}>
        <div>
          <img src={cardapio.foto} />
          <h2>{cardapio.nome}</h2>
          <p>
            {getDescricao(cardapio.descricao)}
            <br />
          </p>
          <Button>Adicionar ao carrinho</Button>
        </div>
      </Produto>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent>
          <img className="foto" src={cardapio.foto} alt="" />
          <div>
            <header>
              <h1>{cardapio.nome}</h1>
              <img
                className="btn-close"
                src={close}
                alt="close"
                onClick={() => setModalEstaAberto(false)}
              />
            </header>
            <p>
              {cardapio.descricao}
              <br />
              Serve: {cardapio.porcao}
            </p>
            <Button2 onClick={addToCart}>
              Adicionar ao carrinho {formataPreco(cardapio.preco)}{' '}
            </Button2>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </ul>
  )
}

export default Product
