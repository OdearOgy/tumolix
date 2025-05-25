import api from '../../api'
import { VideoSite, VideoType, type HeroMovie } from '../../movies/_queries/models'

export const fetchPopularMovies = async () => {
  return api.movies.popular({
    language: 'en-US',
  })
}

export const fetchHeroMovie = async () => {
  const MI_ID = 575265
  const movie = await api.movies.details(MI_ID)
  const videos = await api.movies.videos(MI_ID)

  const { id, backdrop_path: background, overview: description, title } = movie
  const trailer = videos?.results.find(
    (v) => v.type === VideoType.TRAILER && v.site === VideoSite.YOUTUBE
  )

  return {
    id,
    background,
    description,
    title,
    trailer,
  } as HeroMovie
}
