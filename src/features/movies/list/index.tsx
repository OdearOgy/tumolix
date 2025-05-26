import { type FunctionComponent } from 'react'
import type { Movie as MovieDto } from 'tmdb-ts'
import { NoDataFound } from '../../../components'
import styles from './index.module.css'
import Movie from './movie'
import Skeleton from './skeleton'

const MovieList: FunctionComponent<{
  data?: MovieDto[]
  isPending: boolean
  isSuccess: boolean
}> = ({ data, isPending, isSuccess }) => {
  if (isPending) {
    return <Skeleton />
  }

  return isSuccess && data?.length ? (
    <div className={styles.list}>
      {data?.map((movie) => {
        return <Movie key={movie.id} data={movie} />
      })}
    </div>
  ) : (
    <NoDataFound />
  )
}

export default MovieList
