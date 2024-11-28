// importacoes
import { FormEvent, useState } from 'react'
import Formulario, { Botao, Entrada } from './estilos'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario>
      <Entrada
        placeholder="Digite um termo..."
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit" onClick={aoEnviarForm}>
        Pesquisar
      </Botao>
    </Formulario>
  )
}
export default FormVagas
