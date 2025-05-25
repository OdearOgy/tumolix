import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { PosterSize, type Movie as MovieDto } from 'tmdb-ts'
import CustomImage from '../../../components/custom-image'
import { Cluster, Stack } from '../../../components/layouts'
import { TMDB_IMAGE_URL_PREFIX } from '../../../constants'
import styles from './index.module.css'

const Movie: FunctionComponent<{
  data: MovieDto
}> = ({ data }) => {
  const { title, release_date, vote_average, poster_path, id } = data

  const date = new Date(release_date).getFullYear()
  const posterUrl = `${TMDB_IMAGE_URL_PREFIX}/${PosterSize.W342}${poster_path}`

  return (
    <Link to="/movie/$id" params={{ id: id?.toString() }}>
      <Stack space="0" className={styles.movie}>
        <div className={styles.poster}>
          <CustomImage src={posterUrl} loading="lazy" alt={title} />
        </div>
        <Stack className={styles.content} space="gap-1" align="justify-end">
          <h3>{title}</h3>
          {release_date && <p>{date}</p>}

          <Cluster align="items-center" space="gap-1">
            <StarIcon className="text-warning-300 dark:text-warning-800 size-4" />
            <p>{vote_average.toFixed(1)} / 10</p>
          </Cluster>
        </Stack>
      </Stack>
    </Link>
  )
}

export default Movie
