import { useQuery } from '@tanstack/react-query'
import { fetchHeroMovie, fetchPopularMovies } from './api'

const HOME_KEY = 'HOME'
const HERO_MOVIE_KEY = 'HERO_MOVIE'

export const useHomeMoviesQuery = (search: string) => {
  return useQuery({
    queryKey: [HOME_KEY, search],
    queryFn: () => fetchPopularMovies(search),
  })
}

export const useHeroMovie = () => {
  return useQuery({
    queryKey: [HERO_MOVIE_KEY],
    queryFn: () => fetchHeroMovie(),
  })
}
