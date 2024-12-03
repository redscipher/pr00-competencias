// importacao
import styled from 'styled-components'

// componentes
const Vagas = styled.ul`
  /* dispaly */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; // 3 colunas
  column-gap: 16px;
  row-gap: 16px;
  /* dimensoes */
  margin-top: 80px;

  /* responsividade: smartphone */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // troca p/ 1 coluna
  }
`

// exportacao
export default Vagas
