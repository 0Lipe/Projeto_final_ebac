import styled from 'styled-components'

export const Rodape = styled.div`
  height: 298px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background: #ffebd9;
  margin-top: 120px;

  .LogoFooter {
    width: 125px;
    height: 58px;
    margin: 40px 0 40px 0;
  }

  p {
    text-align: center;
    margin-bottom: 40px;
  }
`

export const Logos = styled.div`
  display: flex;
  margin-bottom: 80px;
  width: 88px;
  justify-content: space-between;

  img {
    width: 24px;
    height: 24px;
  }
`
