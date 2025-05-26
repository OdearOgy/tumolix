import { useQuery } from '@tanstack/react-query'
import { fetchMovieDetails } from './api'

const MOVIE_KEY = 'MOVIE'

export const useMovieDetailsQuery = (id: number) => {
  return useQuery({
    queryKey: [MOVIE_KEY, id],
    queryFn: () => fetchMovieDetails(id),
  })
}
