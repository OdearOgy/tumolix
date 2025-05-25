import type { Video } from 'tmdb-ts'

export enum VideoType {
  TRAILER = 'Trailer',
  TEASER = 'Teaser',
}

export enum VideoSite {
  YOUTUBE = 'YouTube',
}

export interface HeroVideo extends Omit<Video, 'type' | 'site'> {
  type: VideoType
  site: VideoSite
}

export interface HeroMovie {
  id: number
  background: string
  description: string
  title: string
  trailer: HeroVideo
}

export enum MovieCategory {
  TopRated = 'top-rated',
  Popular = 'popular',
}

export type MovieCategoryString = keyof typeof MovieCategory
