import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Produtos = styled.ul`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.celular}) {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
`
