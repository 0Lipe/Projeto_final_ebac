import styled from 'styled-components'
import Baner from '../../assets/images/Vector.png'

export const Header = styled.header`
  background: url(${Baner});
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 186px;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 186px;
    }


  }
`
