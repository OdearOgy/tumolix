import { useQuery } from '@tanstack/react-query'
import { fetchMovieCast, fetchMovieDetails, fetchMovieTrailers } from './api'

const MOVIE_KEY = 'MOVIE'
const CAST_KEY = 'CAST'
const TRAILERS_KEY = 'TRAILER'

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

export const useMovieTrailersQuery = (id: number) => {
  return useQuery({
    queryKey: [TRAILERS_KEY, id],
    queryFn: () => fetchMovieTrailers(id),
  })
}
