import { useQuery } from '@tanstack/react-query'
import { useRouterState } from '@tanstack/react-router'
import { fetchGenres, fetchMovieDetails, fetchMovies, fetchRandomMovies, fetchSearch } from './api'
import type { MovieCategory } from './models'

const MOVIES_KEY = 'MOVIES'
const MOVIE_KEY = 'MOVIE'
const GENRES_KEY = 'GENRES'

export const useMoviesQuery = (category?: MovieCategory) => {
  const location = useRouterState({ select: (s) => s.location })
  const search = new URLSearchParams(location.search)

  const query = search.get('q')
  const genres = search.get('genres')?.split(',')

  return useQuery({
    queryKey: [MOVIES_KEY, '/', category, genres, query],
    queryFn: () =>
      query ? fetchSearch(query) : !category ? fetchRandomMovies() : fetchMovies(category, genres),
  })
}

// NOTE: No need to refetch the genres
export function useMovieGenres() {
  return useQuery({
    queryKey: [GENRES_KEY],
    queryFn: () => fetchGenres(),
    staleTime: Infinity,
  })
}

export const useMovieDetailsQuery = (id: number) => {
  return useQuery({
    queryKey: [MOVIE_KEY, id],
    queryFn: () => fetchMovieDetails(id),
  })
}
