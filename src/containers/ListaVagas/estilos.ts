// importacao
import styled from 'styled-components'

type props = {
  tipo: 'lista' | 'matriz'
  colunas?: number
}

// componentes
const Vagas = styled.ul<props>`
  /* dispaly */
  display: grid;
  column-gap: 16px;
  /* dimensoes */
  margin-top: 80px;
  padding-bottom: 8px;
  /* estetico */
  cursor: pointer;

  /* tipos objetos: lista / matriz */
  ${(props) =>
    props.tipo === 'lista'
      ? `
      grid-auto-flow: column;
      grid-auto-columns: min-content;
      // barra de rolagem
      overflow-x: auto;
      white-space: nowrap;

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
      : `
      grid-template-columns: repeat(${props.colunas}, 1fr);
      gap: 16px;
    `}
`

// exportacao
export default Vagas
