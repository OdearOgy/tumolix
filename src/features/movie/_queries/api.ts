import type { MovieDetails } from 'tmdb-ts'
import api from '../../api'

export const fetchMovieDetails = async (id: number) => {
  const data = await api.movies.details(id)

  return data as MovieDetails
}
