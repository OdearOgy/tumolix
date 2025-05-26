import type { MovieDetails } from 'tmdb-ts'
import api from '../../api'
import { VideoSite, VideoType } from '../../movies/_queries/models'

export const fetchMovieDetails = async (id: number) => {
  const data = await api.movies.details(id)

  return data as MovieDetails
}

export const fetchMovieCast = async (id: number) => {
  const data = await api.movies.credits(id)
  return data.cast.slice(0, 5)
}

export const fetchMovieTrailers = async (id: number) => {
  const videos = await api.movies.videos(id)

  const trailers = videos?.results.filter(
    (v) => v.type === VideoType.TRAILER && v.site === VideoSite.YOUTUBE
  )

  return trailers
}
