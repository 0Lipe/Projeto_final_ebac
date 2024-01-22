import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corPrincipal: '#E66767',
  corDeFundo: '#FFF8F2',
  corBranca: '#fff'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  celular: '320px'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

  body{
    background-color: ${cores.corDeFundo};
    color: ${cores.corPrincipal};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`
