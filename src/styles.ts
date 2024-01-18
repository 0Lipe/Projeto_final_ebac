import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corPrincipal: '#E66767',
  corDeFundo: '#FFF8F2',
  corBranca: '#fff'
}
export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: ${cores.corDeFundo};
    color: ${cores.corPrincipal};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
