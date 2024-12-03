// importacoes
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// tipos
import { Competencia } from '../globais'

// conexao com servidor arquivo .json
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rep-arquivos.vercel.app'
  }),
  endpoints: (builder) => ({
    getCompetencias: builder.query<Competencia[], void>({
      query: () => 'dados/competencias'
    })
  })
})

// exportacoes
export default api
export const { useGetCompetenciasQuery } = api
