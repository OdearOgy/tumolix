import { type FunctionComponent } from 'react'
import type { Movie as MovieDto } from 'tmdb-ts'
import { NoDataFound } from '../../../components'
import styles from './index.module.css'
import Movie from './movie'
import Skeleton from './skeleton'

const MovieList: FunctionComponent<{
  data?: MovieDto[]
  isError: boolean
  isPending: boolean
  isSuccess: boolean
}> = ({ data, isPending, isError, isSuccess }) => {
  console.log(data)
  if (isPending) {
    return <Skeleton />
  }

  if (isError) {
    return 'some random error'
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
