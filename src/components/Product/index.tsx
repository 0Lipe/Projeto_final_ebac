import imagem from '../../assets/images/image 3.png'
import close from '../../assets/images/close 1.png'
import { Produto, Modal, Button, ModalContent } from './styles'

export type Props = {
  foto: string
  nome: string
  id: number
  descricao: string
  preco: number
  porcao: string
}

const Product = ({ foto, nome, id, descricao, preco, porcao }: Props) => {
  return (
    <ul>
      <Produto key={id}>
        <div>
          <img src={foto} />
          <h2>{nome}</h2>
          <p>
            {descricao}
            <br />
          </p>
          <Button>Adicionar ao carrinho</Button>
        </div>
      </Produto>
      <Modal>
        <ModalContent>
          <img className="foto" src={imagem} alt="" />
          <div>
            <header>
              <h1>{nome}</h1>
              <img className="btn-close" src={close} alt="close" />
            </header>
            <p>
              {descricao}
              <br />
              {porcao}
            </p>
            <Button>Adicionar ao carrinho {preco} </Button>
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </ul>
  )
}

export default Product
