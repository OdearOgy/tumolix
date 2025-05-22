import { useQuery } from '@tanstack/react-query'
import { fetchPopularMovies } from './api'

const MOVIES_KEY = 'MOVIES'

export const useMoviesQuery = (search: string) => {
  return useQuery({
    queryKey: [MOVIES_KEY, search],
    queryFn: () => fetchPopularMovies(),
  })
}
