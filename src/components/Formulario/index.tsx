// importacoes
import { FormEvent, useState } from 'react'
// estilos
import * as E from './estilos'

// tipos: parametros do componente
type Props = {
  aoPesquisar: (termo: string) => void
}

// componente
const FormPesquisa = ({ aoPesquisar }: Props) => {
  // estados
  const [termo, setTermo] = useState<string>('')

  // funcao
  const aoEnviarForm = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  // def retorno
  return (
    <E.default>
      <E.Entrada
        placeholder="Digite um termo..."
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <E.Botao type="submit" onClick={aoEnviarForm}>
        Pesquisar
      </E.Botao>
    </E.default>
  )
}

// exportacao
export default FormPesquisa
