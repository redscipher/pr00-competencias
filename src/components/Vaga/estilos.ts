// importacao
import styled from 'styled-components'
import { CORES } from '../../globais'

// componentes
const VagaItem = styled.li`
  /* cores */
  border: 1px solid ${CORES.principal};
  background-color: ${CORES.secundaria};
  color: ${CORES.principal};
  /* tamanho */
  padding: 16px;
  border-radius: 8px; // tamanho do arredondadmento das bordas
  /* efeitos */
  transition: all ease 0.3s;

  /* estados: mouse em cima */
  &:hover {
    background-color: ${CORES.principal};
    color: ${CORES.secundaria};

    /* elementos: nivel 1 */
    a {
      border-color: ${CORES.principal};
      background-color: ${CORES.secundaria};
      color: ${CORES.principal};
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  /* cores */
  border-color: ${CORES.secundaria};
  background-color: ${CORES.principal};
  color: ${CORES.secundaria};
  /* diplay */
  display: inline-block;
  text-align: center;
  /* dimensionamento */
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  /* fontes */
  font-weight: bold;
  font-size: 14px;
  /* estetico */
  text-decoration: none;

  /* responsividade: smartphone */
  @media (max-width: 768px) {
    display: block;
  }
`

// exportacoes
export default VagaItem
