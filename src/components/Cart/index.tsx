import {
  Botao,
  Btn,
  CardCarrinho,
  CartContainer,
  Finalizado,
  Formulario,
  Overlay,
  Sidebar,
  EntregaContainer
} from './styles'
import Lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import { formataPreco } from '../ProductList'

const Cart = () => {
  const [purchese, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const [etapaAtual, setEtapaAtual] = useState(0)

  const avancarEtapa = () => {
    setEtapaAtual(etapaAtual + 1)
  }
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

  const form = useFormik({
    initialValues: {
      fullname: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      nomeNoCartao: '',
      numeroNoCartao: '',
      cvv: '',
      mes: '',
      ano: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      cidade: Yup.string()
        .min(5, 'O cidade precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      cep: Yup.string()
        .min(5, 'O cep precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      numero: Yup.number()
        .min(1, 'O Numero precisa ter pelo menos 1 caracteres')
        .required('O campo e obrigatorio'),
      nomeNoCartao: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      numeroNoCartao: Yup.string()
        .min(5, 'O Numero precisa ter pelo menos 5 numeros')
        .required('O campo e obrigatorio'),
      cvv: Yup.number()
        .min(3, 'O CVV precisa ter pelo menos 3 caracteres')
        .required('O campo e obrigatorio'),
      mes: Yup.number()
        .min(2, 'O Mes precisa ter pelo menos 2 caracteres')
        .required('O campo e obrigatorio'),
      ano: Yup.number()
        .min(4, 'O ano precisa ter pelo menos 2 caracteres')
        .required('O campo e obrigatorio')
    }),
    onSubmit: (values) => {
      purchese({
        delivery: {
          receiver: values.fullname,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: 'Case'
          }
        },
        payment: {
          card: {
            name: values.nomeNoCartao,
            number: values.numeroNoCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mes),
              year: Number(values.ano)
            }
          }
        },
        product: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })
  return (
    <>
      {etapaAtual === 0 && (
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
            <Botao onClick={() => setEtapaAtual(1)}>
              Continuar com a entrega
            </Botao>
          </Sidebar>
        </CartContainer>
      )}
      <Formulario></Formulario>
      {etapaAtual === 1 && (
        <EntregaContainer>
          <h3>Entrega</h3>
          <Overlay />
          <Sidebar>
            <Formulario onSubmit={form.handleSubmit}>
              <div>
                <label htmlFor="fullname">Quem irá receber</label>
                <input
                  id="fullname"
                  type="text"
                  name="fullname"
                  value={form.values.fullname}
                  onChange={form.handleChange}
                />
              </div>
              <div>
                <label htmlFor="endereco">Endereço</label>
                <input
                  id="endereco"
                  type="text"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                />
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <input
                  id="cidade"
                  type="text"
                  name="cidade"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                />
              </div>
              <div className="div-cep-numero">
                <div>
                  <label htmlFor="cep">CEP</label>
                  <input
                    id="cep"
                    type="text"
                    inputMode="none"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="numero">Numero</label>
                  <input
                    id="numero"
                    type="number"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                  />
                </div>
              </div>
              <label>Complemento(opcional)</label>
              <input type="text" />
            </Formulario>
            <Btn>
              <button type="submit" onClick={() => setEtapaAtual(2)}>
                Continuar com o pagamento
              </button>
              <button>Voltar para o carrinho</button>
            </Btn>
          </Sidebar>
        </EntregaContainer>
      )}
      {etapaAtual === 2 && (
        <EntregaContainer>
          <Sidebar>
            <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>
            <Formulario onSubmit={form.handleSubmit}>
              <div>
                <label htmlFor="nomeNoCartao">Nome no cartão</label>
                <input
                  id="nomeNoCartao"
                  type="text"
                  name="nomeNoCartao"
                  value={form.values.nomeNoCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <div>
                <div className="div-numero-cvv">
                  <div className="numero">
                    <label htmlFor="numeroNoCartao">Numero do cartão</label>
                    <input
                      id="numero-no-cartao"
                      type="number"
                      name="numeroNoCartao"
                      value={form.values.numeroNoCartao}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </div>
                  <div className="cvv">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      id="cvv"
                      type="number"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </div>
                </div>
                <div className="div-mes-ano">
                  <div className="mes">
                    <label htmlFor="mes">Mês de vencimento</label>
                    <input
                      type="text"
                      id="mes"
                      name="mes"
                      value={form.values.mes}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </div>
                  <div className="ano">
                    <label htmlFor="ano">Ano de vencimento</label>
                    <input
                      type="number"
                      id="ano"
                      name="ano"
                      value={form.values.ano}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </div>
                </div>
              </div>
              <Btn>
                <button
                  type="button"
                  onClick={() => {
                    form.handleSubmit()
                    setEtapaAtual(3)
                  }}
                >
                  Finalizar pagamento
                </button>
                <button onClick={() => setEtapaAtual(1)}>
                  Voltar para a edição de endereço
                </button>
              </Btn>
            </Formulario>
          </Sidebar>
        </EntregaContainer>
      )}
      {etapaAtual === 3 && (
        <EntregaContainer>
          <Sidebar>
            <Finalizado>
              <h3>Pedido realizado -{data.OrderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.{' '}
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <button>Concluir</button>
            </Finalizado>
          </Sidebar>
        </EntregaContainer>
      )}
    </>
  )
}

export default Cart
