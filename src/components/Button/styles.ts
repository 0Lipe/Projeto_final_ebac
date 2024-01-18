import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  background-color: ${cores.corPrincipal};
  color: ${cores.corDeFundo};
  font-size: 14px;
  line-height: 16.41px;
  text-decoration: none;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`
