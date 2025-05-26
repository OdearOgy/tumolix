import { useQuery } from '@tanstack/react-query'
import { fetchMovieCast, fetchMovieDetails } from './api'

const MOVIE_KEY = 'MOVIE'
const CAST_KEY = 'CAST'

export const useMovieDetailsQuery = (id: number) => {
  return useQuery({
    queryKey: [MOVIE_KEY, id],
    queryFn: () => fetchMovieDetails(id),
  })
}

export const useMovieCastQuery = (id: number) => {
  return useQuery({
    queryKey: [CAST_KEY, id],
    queryFn: () => fetchMovieCast(id),
  })
}
