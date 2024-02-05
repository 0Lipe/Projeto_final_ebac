import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 472px;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 40px;
    margin-bottom: 40px;
  }


  p {
    font-size: 14px;
    line-height: 22px;
    padding: 8px 8px 0 7px;
  }

  .img-capa {
    width: 472px;
    height: 217px;
    overflow: hidden;
  }

  .img-capa img {
    width: 100%;
    height: 100%;
    object-fit: cover;  // Mantém a proporção, corta a imagem se necessário
    display: block;
`
export const Prato = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;

  .Notas {
    display: flex;
    h3 {
      font-size: 18px;
      margin-right: 3px;
    }
  }

  h2 {
    font-size: 18px;
    padding-left: 7px;
    line-heigth: 21.09px;
  }
`
export const Descricao = styled.div`
  border: 1px solid ${cores.corPrincipal};
  height: 100%;
`
export const Tags = styled.div`
  position: absolute;
  top: 12px;
  right: 8px;
`
export const BotaoDiv = styled.div`
  margin: 6px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
`
