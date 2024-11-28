import Heroi, { TituloHeroi } from './estilos'

type props = {
  children: JSX.Element
}

const Hero = ({ children }: props) => (
  <Heroi>
    <div>
      <TituloHeroi>Áreas de conhecimentos que se tem acesso.</TituloHeroi>
      {children}
    </div>
  </Heroi>
)

export default Hero
