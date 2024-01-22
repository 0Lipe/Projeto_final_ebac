import imagem from '../../assets/images/image 3.png'
import close from '../../assets/images/close 1.png'
import { Produto, Modal, Button, ModalContent } from './styles'
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

  return (
    <ul>
      <Produto key={cardapio.id} onClick={() => setModalEstaAberto(true)}>
        <div>
          <img src={cardapio.foto} />
          <h2>{cardapio.nome}</h2>
          <p>
            {cardapio.descricao}
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
            <Button onClick={addToCart}>
              Adicionar ao carrinho R${formataPreco(cardapio.preco)}{' '}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </ul>
  )
}

export default Product
