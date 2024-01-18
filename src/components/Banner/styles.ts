import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.7);
  height:280px;

  h3{
  color: #FFF;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
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
