// importacoes
import styled from 'styled-components'
// imagens
import fundo from '../../ativos/calculos.jpg'
import { CORES } from '../../globais'

// componentes
const Heroi = styled.form`
  /* dimensionamento */
  height: 100%;
  width: 100%;
  padding-bottom: 120px;
  /* fundo */
  background-image: url(${fundo});
  background-size: cover;
  object-fit: contain;
  /* posicoes */
  position: relative;
  /* exibicao */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* pseudo elementos: antes - adicionar um ofuscado em cima */
  &::before {
    content: '';
    /* posicoes */
    position: absolute;
    top: 0;
    left: 0;
    /* dimensinamento */
    width: 100%;
    height: 100%;
    /* coers */
    background-color: ${CORES.principal};
    opacity: 0.7; // nivel do ofuscamento
  }

  /* elementos: nivel 1 */
  div {
    position: relative;
    color: #eee;
  }

  /* responsividades: smartphone */
  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const TituloHeroi = styled.h2`
  /* fonte */
  font-family: Gloock, serif;
  font-size: 48px;
  /* dimensionamento */
  margin-left: 32px;
  margin-top: 45px;

  /* responsividade: smartphone */
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

// exportacoes
export default Heroi
