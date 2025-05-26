import type { MovieDetails } from 'tmdb-ts'
import api from '../../api'

export const fetchMovieDetails = async (id: number) => {
  const data = await api.movies.details(id)

  return data as MovieDetails
}

export const fetchMovieCast = async (id: number) => {
  const data = await api.movies.credits(id)
  return data.cast.slice(0, 5)
}
