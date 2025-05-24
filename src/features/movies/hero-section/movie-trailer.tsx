import { useState, type FunctionComponent } from 'react'
import { BackdropSize } from 'tmdb-ts'
import { Stack } from '../../../components/layouts'
import {
  TMDB_IMAGE_URL_PREFIX,
  YOUTUBE_EMBED_OPTIONS,
  YOUTUBE_EMBED_PREFIX,
} from '../../../constants'
import type { HeroMovie } from '../_queries/models'
import styles from './index.module.css'

const MovieTrailer: FunctionComponent<{
  data: HeroMovie
}> = ({ data }) => {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false)
  const { title, trailer, background, description } = data

  const url = `${YOUTUBE_EMBED_PREFIX}/${trailer?.key}?playlist=${trailer?.key}&${YOUTUBE_EMBED_OPTIONS}`
  const posterUrl = background
    ? `${TMDB_IMAGE_URL_PREFIX}/${BackdropSize.W780}/${background}`
    : undefined

  return (
    <div className={styles.hero}>
      {posterUrl && (
        <div className={styles.fallback}>
          <img src={posterUrl} alt={`${title}'s poster`} loading="eager" />
        </div>
      )}
      {/* {trailer?.key && (
        <iframe
          src={url}
          className={`${styles.video} ${videoLoaded && styles.loaded}`}
          title={title}
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          onLoad={() => setVideoLoaded(true)}
        />
      )} */}

      <Stack className={styles.footer}>
        <Stack>
          <h1>{title}</h1>
          <p>{description}</p>
        </Stack>
      </Stack>
    </div>
  )
}
export default MovieTrailer
