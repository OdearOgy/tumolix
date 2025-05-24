import type { FunctionComponent } from 'react'
import { PosterSize, type Movie as MovieDto } from 'tmdb-ts'
import { Cluster, Stack } from '../../../components/layouts'
import { TMDB_IMAGE_URL_PREFIX } from '../../../constants'
import styles from './index.module.css'

const Movie: FunctionComponent<{
  data: MovieDto
}> = ({ data }) => {
  const posterUrl = `${TMDB_IMAGE_URL_PREFIX}/${PosterSize.W500}${data.poster_path}`

  return (
    <Stack space="0" className={styles.movie}>
      <div className={styles.poster}>
        <img src={posterUrl} loading="lazy"></img>
      </div>
      <Cluster className={styles.content} align="items-baseline" space="gap-1">
        <h3>{data.title}</h3>
        <p>{data.vote_average.toFixed(1)}</p>
      </Cluster>
    </Stack>
  )
}

export default Movie
