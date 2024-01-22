import { useDispatch, useSelector } from 'react-redux'
import image from '../../assets/images/imagem.png'
import Lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { Overlay, CartContainer, Sidebar, CardCarrinho, Botao } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductList'
import { Btn, Finalizado, Formulario } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <Sidebar>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <CardCarrinho>
                  <div className="div-img">
                    <img src={item.foto} />
                  </div>
                  <div className="div-content">
                    <h3>{item.nome}</h3>
                    <h4>R${formataPreco(item.preco)}</h4>
                  </div>
                  <div className="div-lixeira">
                    <img
                      onClick={() => removeItem(item.id)}
                      className="Lixeira"
                      src={Lixeira}
                    />
                  </div>
                </CardCarrinho>
              </li>
            ))}
          </ul>
          <div className="div-total">
            <p>Valor total</p>
            <p>R$ {formataPreco(getTotalPrice())}</p>
          </div>
          <Botao>Continuar com a entrega</Botao>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
