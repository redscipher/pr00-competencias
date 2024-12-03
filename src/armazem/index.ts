// importacoes
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// servico: arquivo .json
import api from '../servicos/api'

// redutores
const redutoresRaiz = combineReducers({
  [api.reducerPath]: api.reducer
})

// exportando funcao que gera armazem
export function configuraStore(estadoPrecarregado?: Partial<RootState>) {
  // def retorno
  return configureStore({
    // redutores
    reducer: redutoresRaiz,
    // intermedirio
    middleware: (gdm) => gdm().concat(api.middleware),
    // estado precarregado
    preloadedState: estadoPrecarregado
  })
}

// exportacoes tipos: redutores
export type RootState = ReturnType<typeof redutoresRaiz>
// armazem
export type TipoArmazem = ReturnType<typeof configuraStore>
