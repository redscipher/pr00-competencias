// importacoes
import styled from 'styled-components'
import { CORES } from '../../globais'

// componentes
const Formulario = styled.form`
  /* posicao */
  display: grid;
  grid-template-columns: 1fr auto; // define tamanho do grid
  /* cores */
  background-color: ${CORES.secundaria};
  /* dimensoes */
  padding: 32px;
  margin-top: 40px;
  /* esteticos */
  border-radius: 12px;
`

export const Entrada = styled.input`
  padding: 0 16px;
  outline-color: ${CORES.principal};
`

export const Botao = styled.button`
  /* cores */
  background-color: ${CORES.principal};
  color: ${CORES.secundaria};
  border: 1px solid ${CORES.principal};
  /* dimensionamento */
  height: 40px;
  padding: 0 16px;
  margin-left: 8px;
  /* fontes */
  font-size: 18px;
  /* esteticos */
  cursor: pointer;
`
// exportacoes
export default Formulario
