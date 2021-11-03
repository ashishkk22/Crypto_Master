import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "821a15b72bmshe4947469ae572c8p19bb32jsn64587b98b00d",
}
const baseUrl = "https://coinranking1.p.rapidapi.com"
const createRequest = url => ({ url, headers: cryptoApiHeaders })
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: count => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
    getCryptoDetails: builder.query({
      query: coinId => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
  }),
})
export const {
  useGetCryptosQuery,
  useGetExchangesQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  //uper na getcrytos jevu j name rakhava nu khali use anne query lagava nu
} = cryptoApi
