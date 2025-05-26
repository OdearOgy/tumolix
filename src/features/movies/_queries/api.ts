import type { MovieQueryOptions } from 'tmdb-ts'
import type { MovieSearchOptions } from 'tmdb-ts/dist/endpoints'
import api from '../../api'
import { MovieCategory } from './models'

const movieFilters: Record<MovieCategory, MovieQueryOptions> = {
  [MovieCategory.Popular]: {
    sort_by: 'popularity.desc',
  },

  [MovieCategory.TopRated]: {
    sort_by: 'vote_average.desc',
    'vote_count.gte': 500,
  },
}

export const fetchMovies = async (category: MovieCategory, genreIds?: string[], page?: number) => {
  const with_genres = genreIds?.join(',') || undefined
  const filters = category ? movieFilters[category] : {}
  return api.discover.movie({
    ...filters,
    page: page ?? 1,
    with_genres,
    language: 'en-US',
  } as MovieQueryOptions)
}

export const fetchGenres = async () => {
  const data = await api.genres.movies()

  return data.genres
}

export const fetchSearch = async (search: string) => {
  return api.search.movies({
    query: search,
  } as MovieSearchOptions)
}

export const fetchRandomMovies = async () => {
  const MI_ID = 575265

  return api.movies.similar(MI_ID, {
    language: 'en-US',
  })
}
