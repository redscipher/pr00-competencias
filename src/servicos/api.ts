// importacoes
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// tipos
import { Competencia } from '../globais'

// conexao com servidor arquivo .json
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://base-exercicio-css-in-js-khaki.vercel.app:4000'
  }),
  endpoints: (builder) => ({
    getCompetencias: builder.query<Competencia[], void>({
      query: () => 'competencias'
    })
  })
})

// exportacoes
export default api
export const { useGetCompetenciasQuery } = api
