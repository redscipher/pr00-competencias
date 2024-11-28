import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './global'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Header />
      <Hero>
        <Container>
          <ListaVagas />
        </Container>
      </Hero>
    </>
  )
}

export default App
