import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 186px;
  width: 100%;

  h3:hover{
    cursor:pointer;
  }
  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 186px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 100%;
    }

  }
`
