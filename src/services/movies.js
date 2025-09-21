import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const movieApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000'}),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/movies`,
    }),
    getMovieById: builder.query({
      query: (id) => `/movies/${id}`
    }),
    getTheaterById: builder.query({
      query: ({movieId, theaterId}) => `/${movieId}/theaters/${theaterId}`
    })
  }),
})

export const { useGetMoviesQuery, useGetMovieByIdQuery, useGetTheaterByIdQuery } = movieApi