// importacao
import styled from 'styled-components'

// componentes
const Vagas = styled.ul`
  /* dispaly */
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  column-gap: 16px;
  /* dimensoes */
  margin-top: 80px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 8px;
  /* estetico */
  cursor: pointer;

  /* pseudo elementos: barra de rolagem */
  &::-webkit-scrollbar {
    margin-top: 32px;
    height: 8px;
  }

  /* rastreio */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  /* polegar */
  &::-webkit-scrollbar-thumb {
    background-color: #888;

    &:hover {
      background-color: #555;
    }
  }
`

// exportacao
export default Vagas
