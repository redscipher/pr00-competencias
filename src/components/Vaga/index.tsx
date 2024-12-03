// importacoes
import * as E from './estilos'
// tipos
import { Competencia } from '../../globais'

// componente
const Vaga = (props: Competencia) => {
  // def retorno
  return (
    <E.default>
      <E.VagaTitulo>{props.titulo}</E.VagaTitulo>
      <ul>
        <li>Localizacao: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratacao: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </ul>
      <E.VagaLink href="#">Ver detalhes e candidatar-se</E.VagaLink>
    </E.default>
  )
}

// exportacoes
export default Vaga
