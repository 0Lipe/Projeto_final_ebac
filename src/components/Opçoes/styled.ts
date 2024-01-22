import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  padding-top: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    display: block;
  }
`
