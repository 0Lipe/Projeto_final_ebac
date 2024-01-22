import styled from 'styled-components'

export const EntregaContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  color: #ffebd9;

  &.is-open {
    display: flex;
  }
`
