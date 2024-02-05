import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  position:relative;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  height:280px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }


  h3{
  color: #FFF;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  line-height: 37.5px;
  padding-top: 25px;
  }

  h4{
  color: #FFF;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  padding-bottom: 32px;
  }

  .container {
      position:relative;
      z-index:1;
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      height:280px;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`
