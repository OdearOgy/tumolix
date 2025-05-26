import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useRouterState } from '@tanstack/react-router'
import { fetchGenres, fetchMovies, fetchSearch } from './api'
import type { MovieCategory } from './models'

const MOVIES_KEY = 'MOVIES'
const GENRES_KEY = 'GENRES'

export const useMoviesQuery = (category: MovieCategory) => {
  const location = useRouterState({ select: (s) => s.location })
  const search = new URLSearchParams(location.search)

  const query = search.get('q')
  const genres = search.get('genres')?.split(',')

  return useInfiniteQuery({
    queryKey: [MOVIES_KEY, category, genres, query],
    queryFn: ({ pageParam = 1 }) => {
      return query ? fetchSearch(query, pageParam) : fetchMovies(category, genres, pageParam)
    },
    initialPageParam: 1,
    getNextPageParam: (data) => {
      return data.page < data.total_pages ? data.page + 1 : undefined
    },
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
