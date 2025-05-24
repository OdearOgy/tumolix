import { useQuery } from '@tanstack/react-query'
import { fetchHeroMovie, fetchMovies } from './api'

const HOME_KEY = 'HOME'
const MOVIES_KEY = 'MOVIES'
const HERO_MOVIE_KEY = 'HERO_MOVIE'

export const useHomeMoviesQuery = (search: string) => {
  return useQuery({
    queryKey: [HOME_KEY, MOVIES_KEY, search],
    queryFn: () => fetchMovies(),
  })
}

export const useMoviesQuery = (search: string) => {
  return useQuery({
    queryKey: [MOVIES_KEY, search],
    queryFn: () => fetchMovies(),
  })
}

export const useHeroMovie = () => {
  return useQuery({
    queryKey: [HERO_MOVIE_KEY],
    queryFn: () => fetchHeroMovie(),
  })
}
