import api from '../../api'

export const fetchPopularMovies = async () => {
  return api.movies.popular()
}
