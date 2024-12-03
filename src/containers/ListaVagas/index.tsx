// importacoes
import { useState } from 'react'
// servicos
import { useGetCompetenciasQuery } from '../../servicos/api'
// estilos
import * as E from './estilos'
// componentes
import FormVagas from '../../components/Formulario'
import Vaga from '../../components/Vaga'

// componente
const ListaVagas = () => {
  // estados
  const [filtro, setFiltro] = useState<string>('')
  // busca os dados da api: arquivo .json
  const { data: vagas, isLoading } = useGetCompetenciasQuery()

  // funcoes
  const vagasFiltradas = vagas?.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )
  const execRolagem = (evt: React.WheelEvent) => {
    // validacao
    if (evt.deltaY !== 0) {
      // pega o container pai do objeto atual
      const container = evt.currentTarget
      // adiciona rolagem
      container.scrollLeft += evt.deltaY
      evt.preventDefault()
    }
  }

  // validacao
  if (isLoading) {
    return <h2>Carregando...</h2>
  } else {
    // def retorno
    return (
      <div>
        <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
        <E.default onWheel={execRolagem}>
          {vagasFiltradas?.map((vag) => (
            <Vaga
              key={vag.id}
              titulo={vag.titulo}
              localizacao={vag.localizacao}
              nivel={vag.nivel}
              modalidade={vag.modalidade}
              salarioMin={vag.salarioMin}
              salarioMax={vag.salarioMax}
              requisitos={vag.requisitos}
              id={vag.id}
            />
          ))}
        </E.default>
      </div>
    )
  }
}

export default ListaVagas
