import * as S from './styles'
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
  const [purchese, { data }] = usePurchaseMutation()

  const [etapaAtual, setEtapaAtual] = useState(1)

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
      receiver: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeNoCartao: '',
      numeroNoCartao: '',
      cvv: '',
      mes: '',
      ano: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(4, 'O nome precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cidade: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(6, 'O CEP precisa ter pelo menos 14 caracteres')
        .max(99999999, 'O CEP pode ter no máximo 15 caracteres')
        .required('O campo é obrigatório'),
      numero: Yup.number()
        .min(1, 'O número precisa ter pelo menos 1 caracteres')
        .max(99)
        .required('O campo é obrigatório'),
      complemento: Yup.string(),
      nomeNoCartao: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numeroNoCartao: Yup.string()
        .min(5, 'O número precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cvv: Yup.number()
        .min(3, 'O CVV precisa ter pelo menos 3 caracteres')
        .max(999)
        .required('O campo é obrigatório'),
      mes: Yup.number()
        .min(1, 'O Mês precisa ter pelo menos 2 caracteres')
        .max(12)
        .required('O campo é obrigatório'),
      ano: Yup.number()
        .min(1, 'O ano precisa ter pelo menos 4 caracteres')
        .max(9999)
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchese({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
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
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      {etapaAtual === 1 && (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <S.CardCarrinho>
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
                  </S.CardCarrinho>
                </li>
              ))}
            </ul>
            <div className="div-total">
              <p>Valor total</p>
              <p>R$ {formataPreco(getTotalPrice())}</p>
            </div>
            <S.Botao onClick={() => setEtapaAtual(2)}>
              Continuar com a entrega
            </S.Botao>
          </S.Sidebar>
        </S.CartContainer>
      )}
      {etapaAtual === 2 && (
        <S.EntregaContainer className={isOpen ? 'is-open' : ''}>
          <h3>Entrega</h3>
          <S.Overlay />
          <S.Sidebar>
            <S.Formulario onSubmit={form.handleSubmit}>
              <div>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  id="receiver"
                  type="text"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
              </div>
              <div>
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('endereco') ? 'error' : ''}
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
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cidade') ? 'error' : ''}
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
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cep') ? 'error' : ''}
                  />
                </div>
                <div>
                  <label htmlFor="numero">Numero</label>
                  <input
                    id="numero"
                    type="text"
                    name="numero"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('numero') ? 'error' : ''}
                  />
                </div>
              </div>
              <label>Complemento(opcional)</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={form.values.complemento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('complemento') ? 'error' : ''}
              />
            </S.Formulario>
            <S.Btn>
              <button
                onClick={() => {
                  setEtapaAtual(3)
                }}
              >
                Continuar com o pagamento
              </button>
              <button
                type="button"
                onClick={() => {
                  setEtapaAtual(1)
                }}
              >
                Voltar para o carrinho
              </button>
            </S.Btn>
          </S.Sidebar>
        </S.EntregaContainer>
      )}
      {etapaAtual === 3 && (
        <S.EntregaContainer className={isOpen ? 'is-open' : ''}>
          <S.Sidebar>
            <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>
            <S.Formulario onSubmit={form.handleSubmit}>
              <div>
                <label htmlFor="nomeNoCartao">Nome no cartão</label>
                <input
                  id="nomeNoCartao"
                  type="text"
                  name="nomeNoCartao"
                  value={form.values.nomeNoCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('nomeNoCartao') ? 'error' : ''}
                />
              </div>
              <div>
                <div className="div-numero-cvv">
                  <div className="numero">
                    <label htmlFor="numeroNoCartao">Numero do cartão</label>
                    <input
                      id="numero-no-cartao"
                      type="text"
                      name="numeroNoCartao"
                      value={form.values.numeroNoCartao}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('numero-no-cartao') ? 'error' : ''
                      }
                    />
                  </div>
                  <div className="cvv">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      id="cvv"
                      type="text"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cvv') ? 'error' : ''}
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
                      className={checkInputHasError('mes') ? 'error' : ''}
                    />
                  </div>
                  <div className="ano">
                    <label htmlFor="ano">Ano de vencimento</label>
                    <input
                      type="text"
                      id="ano"
                      name="ano"
                      value={form.values.ano}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('ano') ? 'error' : ''}
                    />
                  </div>
                </div>
              </div>
              <S.Btn>
                <button
                  type="submit"
                  onClick={() => {
                    form.handleSubmit(), setEtapaAtual(4)
                  }}
                >
                  Finalizar pagamento
                </button>
                <button type="button" onClick={() => setEtapaAtual(2)}>
                  Voltar para a edição de endereço
                </button>
              </S.Btn>
            </S.Formulario>
          </S.Sidebar>
        </S.EntregaContainer>
      )}
      {etapaAtual === 4 && (
        <S.EntregaContainer className={isOpen ? 'is-open' : ''}>
          <S.Sidebar>
            <S.Finalizado>
              <h3>Pedido realizado -{data?.orderId}</h3>
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
              <S.Links
                to="/"
                onClick={() => {
                  closeCart()
                  window.location.href = '/'
                }}
              >
                Concluir
              </S.Links>
            </S.Finalizado>
          </S.Sidebar>
        </S.EntregaContainer>
      )}
    </>
  )
}

export default Cart
