import {
  Btn,
  CartContainer,
  Finalizado,
  Formulario,
  Overlay,
  Sidebar
} from '../Cart/styles'
import { useFormik } from 'formik'
import { EntregaContainer } from './styles'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Entrega = () => {
  const [purchese, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullname: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: 0,
      nomeNoCartao: '',
      numeroNoCartao: '',
      cvv: 0,
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
      cep: Yup.number()
        .min(5, 'O cep precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      numero: Yup.number()
        .min(1, 'O Numero precisa ter pelo menos 1 caracteres')
        .required('O campo e obrigatorio'),
      nomeNoCartao: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      numeroNoCartao: Yup.number()
        .min(5, 'O Numero precisa ter pelo menos 5 numeros')
        .required('O campo e obrigatorio'),
      cvv: Yup.number()
        .min(3, 'O CVV precisa ter pelo menos 3 caracteres')
        .required('O campo e obrigatorio'),
      mes: Yup.number()
        .min(2, 'O Mes precisa ter pelo menos 2 caracteres')
        .required('O campo e obrigatorio'),
      ano: Yup.number()
        .min(2, 'O ano precisa ter pelo menos 2 caracteres')
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
            number: 12,
            complement: 'Case'
          }
        },
        payment: {
          card: {
            name: values.nomeNoCartao,
            number: values.numeroNoCartao,
            code: 123,
            expires: {
              month: 12,
              year: 1234
            }
          }
        },
        product: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })
  return (
    <>
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
            <button type="submit">Continuar com o pagamento</button>
            <button>Voltar para o carrinho</button>
          </Btn>
        </Sidebar>
      </EntregaContainer>

      {isSuccess ? (
        <CartContainer>
          <Sidebar>
            <Finalizado>
              <h3>Pedido realizado - {data.orderId}</h3>
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
        </CartContainer>
      ) : (
        <CartContainer>
          <Sidebar>
            <h3>Pagamento - Valor a pagar R$ 190,90</h3>
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
            </Formulario>
            <Btn>
              <button type="submit" onClick={() => form.handleSubmit()}>
                Finalizar pagamento
              </button>
              <button>Voltar para a edição de endereço</button>
            </Btn>
          </Sidebar>
        </CartContainer>
      )}
    </>
  )
}

export default Entrega
