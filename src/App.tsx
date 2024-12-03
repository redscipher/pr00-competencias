// importacoes
import EstiloGlobal, { Container } from './globais'
import { configuraStore } from './armazem' // loja
// componentes
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Provider } from 'react-redux'

// store redux
const armazem = configuraStore()

// aplicacao principal
function App() {
  // def retorno
  return (
    <Provider store={armazem}>
      <EstiloGlobal></EstiloGlobal>
      <Header />
      <Hero>
        <Container>
          <ListaVagas />
        </Container>
      </Hero>
    </Provider>
  )
}

// exportacao padrao
export default App
