// importa styled
import styled from 'styled-components'
// constantes
import { CORES } from '../../globais'

// cria o componente estilizado
const Cabecalho = styled.header`
  /* cores */
  background-color: ${CORES.secundaria};
  color: ${CORES.principal};
  /* posicao */
  text-align: center;
  /* dimensoes */
  padding: 24px 0;
`
// exporta cabecalho
export default Cabecalho
