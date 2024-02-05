import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const EntregaContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: #ffebd9;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: #ffebd9;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.corPrincipal};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  li {
    background-color: #ffebd9;
  }

  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: norma;
  }
  .div-total {
    display: flex;
    margin: 40px 8px 16px 8px;
    dispay: flex;
    justify-content: space-between;
  }
`

export const CardCarrinho = styled.div`
  grid-template-columns: 88px 1fr 24px;
  display: grid;
  margin-bottom: 16px;

  .Lixeira {
    width: 16px;
    height: 16px;
  }

  .div-img {
    width: 80px;
    height: 80px;
    margin: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .div-content {
    color: ${cores.corPrincipal};
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 8px;

    h3 {
      margin: 8px 0px 16px 8px;
      font-size: 18px;
      font-style: normal;
      font-weight: 900;
    }

    h4 {
      margin-left: 8px;
    }
  }
  .div-lixeira {
    display: flex;
    justify-content: end;
    flex-direction: column;
    margin: 0 0 8px;
  }
`
export const Botao = styled.button`
  color: ${cores.corPrincipal};
  background-color: ${cores.corDeFundo};
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  padding: 4px 84px;
  margin: 8px;
  cursor:pointer;
}
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 344px;
    height: 32px;
    background-color: #ffebd9;
    border: none;

    &.error {
      border: 3px solid red;
    }
  }

  label {
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  .div-cep-numero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input {
      width: 155px;
    }
  }
  .div-numero-cvv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .numero input {
      width: 228px;
    }
    .cvv input {
      width: 87px;
    }
  }
  .div-mes-ano {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .mes input {
      width: 155px;
    }
    .ano input {
      width: 155px;
    }
  }
`
export const Btn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  button {
    border: 0;
    height: 24px;
    background-color: #ffebd9;
    margin-bottom: 8px;
    color: #e66767;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    cursor: pointer;
  }
`

export const Finalizado = styled.div`
  p {
    margin-top: 16px;
    margin-bottom: 24px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  button {
    border: 0;
    height: 24px;
    background-color: #ffebd9;
    margin-bottom: 8px;
    color: #e66767;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    width: 344px;
  }
`

export const Links = styled(Link)`
  text-decoration: none;
  display: flex;
  height: 24px;
  width: 344px;
  background-color: #ffebd9;
  margin-bottom: 8px;
  color: #e66767;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  justify-content: center;
  align-items: center;
`
