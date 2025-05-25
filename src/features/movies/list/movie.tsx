import type { FunctionComponent } from 'react'
import { PosterSize, type Movie as MovieDto } from 'tmdb-ts'
import { StarIcon } from '../../../components/icons'
import { Cluster, Stack } from '../../../components/layouts'
import { TMDB_IMAGE_URL_PREFIX } from '../../../constants'
import styles from './index.module.css'

const Movie: FunctionComponent<{
  data: MovieDto
}> = ({ data }) => {
  const { title, release_date, vote_average, poster_path } = data

  const date = new Date(release_date).getFullYear()
  const posterUrl = `${TMDB_IMAGE_URL_PREFIX}/${PosterSize.W342}${poster_path}`

  return (
    <Stack space="0" className={styles.movie}>
      <div className={styles.poster}>
        <img src={posterUrl} loading="lazy"></img>
      </div>
      <Stack className={styles.content} space="0" align="justify-end">
        <h3>{title}</h3>
        <p>{date}</p>
        <Cluster align="items-center" space="gap-1">
          <StarIcon className="text-warning-300 dark:text-warning-800" size="medium" />
          <p>{vote_average.toFixed(1)} / 10</p>
        </Cluster>
      </Stack>
    </Stack>
  )
}

export default Movie
