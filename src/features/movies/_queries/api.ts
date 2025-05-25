import api from '../../api'
import { MovieCategory } from './models'

const movieCategoryFns = {
  [MovieCategory.Default]: (s) => api.discover.movie(s),
  [MovieCategory.TopRated]: (s) => api.movies.topRated(s),
  [MovieCategory.Upcoming]: (s) => api.movies.upcoming(s),
} as const

export const fetchMovies = async (category: MovieCategory) => {
  const fetchFn = movieCategoryFns[category]

  return fetchFn('')
}
