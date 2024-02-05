import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Produto = styled.li`
  width: 320px;
  heigth: 338px;
  background: ${cores.corPrincipal};
  color: ${cores.corDeFundo};
  display: flex;
  flex-direction: column;

  img {
    width: 304px;
    height: 167px;
    margin: 8px;
  }
  h2 {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-left: 8px;
  }

  p {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin: 8px;
  }
`
export const Button = styled.button`
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

export const ModalContent = styled.div`
  background-color: ${cores.corPrincipal};
  color: #fff;
  display: flex;
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    left: 336px;
    top: 32px;

    p {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin: 16px 0 16px;
    }
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .btn-close {
      width: 16px;
      height: 16px;
      margin-right: 16px;
    }

    h1 {
      text-align: center;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
  }

  .foto {
    margin: 32px 24px 32px 32px;
    width: 280px;
    height: 280px;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.celular}) {
    max-width: 100%;
    display: grid;
  }

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
