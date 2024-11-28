// importacoes
import styled from 'styled-components'
// imagens
import fundo from '../../ativos/calculos.jpg'

const Heroi = styled.form`
  height: 100%;
  width: 100%;
  background-image: url(${fundo});
  background-size: cover;
  object-fit: contain;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: #eee;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

const TituloHeroi = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  margin-left: 32px;
  margin-top: 45px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

// exportacoes
export default Heroi
export { TituloHeroi }
