import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "821a15b72bmshe4947469ae572c8p19bb32jsn64587b98b00d",
}
const baseUrl = "https://bing-news-search1.p.rapidapi.com"
const createRequest = url => ({ url, headers: cryptoNewsHeaders })
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
})
export const {
  useGetCryptoNewsQuery,
  //uper na getcrytos jevu j name rakhava nu khali use anne query lagava nu
} = cryptoNewsApi
