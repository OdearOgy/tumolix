import { useQuery } from '@tanstack/react-query'
import { fetchMovies } from './api'
import type { MovieCategory } from './models'

const MOVIES_KEY = 'MOVIES'

export const useMoviesQuery = (category: MovieCategory) => {
  return useQuery({
    queryKey: [MOVIES_KEY, '/', category],
    queryFn: () => fetchMovies(category),
  })
}
