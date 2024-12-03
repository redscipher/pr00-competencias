// importacoes
import * as E from './estilos'

// tipos: parametros do componente
type props = {
  children: JSX.Element
}

// componente
const Hero = ({ children }: props) => {
  // def retorno
  return (
    <E.default>
      <div>
        <E.TituloHeroi>Áreas de conhecimentos que se tem acesso.</E.TituloHeroi>
        {/* exibe componentes / elementos passados como parametro */}
        {children}
      </div>
    </E.default>
  )
}

// exportacoes
export default Hero
