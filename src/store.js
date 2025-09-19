import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useGetMoviesQuery, movieApi } from './services/movies.js'
import authReducer from './features/auth/authSlice.js'
export const store = configureStore({
  reducer: {
    
    [movieApi.reducerPath]: movieApi.reducer,
    auth: authReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})


setupListeners(store.dispatch)