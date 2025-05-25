import { useQuery } from '@tanstack/react-query'
import { fetchHeroMovie, fetchPopularMovies } from './api'

const HOME_KEY = 'HOME'
const HERO_MOVIE_KEY = 'HERO_MOVIE'

export const useHomeMoviesQuery = () => {
  return useQuery({
    queryKey: [HOME_KEY],
    queryFn: () => fetchPopularMovies(),
  })
}

export const useHeroMovie = () => {
  return useQuery({
    queryKey: [HERO_MOVIE_KEY],
    queryFn: () => fetchHeroMovie(),
  })
}
